import { query, DynamoOptions } from '../../dynamo/query'
import { QuerySongArguments, SortOptions, SongFilters, CategoryFilter, CrgFilter } from '../../interfaces/resolvers'
import { Song } from '../../interfaces'
import { getRawString, applyLimit, handleSort } from './utils'

const defaultSongLimit = 100

const createQueryArgs = (stationId: number, weekStartDate: string): DynamoOptions => {
  console.log(`#MUSIC_TRACKER_TABLE_station_${stationId}_weekStartDate_${weekStartDate}`)
  return {
    partitionKeySearchTerm: `#MUSIC_TRACKER_TABLE_station_${stationId}_weekStartDate_${weekStartDate}`,
  }
}

const defaultSortOptions: SortOptions = {
  sortKey: 'crgRank',
  ascending: true,
}

type FilterName = 'crg' | 'prior' | 'current' | 'staged' | 'recommended'

const handleFilterSongs = (songs: Song[], filters: SongFilters): Song[] => {
  const filtersToRun = (Object.entries(filters) as unknown) as [FilterName, CategoryFilter[] | CrgFilter][]
  const crgTest = (rank: 'C' | 'R' | 'G' | undefined, filter: CrgFilter): boolean => (rank ? filter[rank] : false)
  const categoryTest = (filter: CategoryFilter[], catLabel?: string | null): boolean => {
    const cat: { checked: boolean } = filter.find(({ label }) => label === catLabel) || { checked: false }
    return cat.checked
  }
  return songs.filter(
    ({
      crg = { crgRank: undefined },
      categories = {
        prior: undefined,
        current: undefined,
        staged: undefined,
        recommended: undefined,
      },
    }) => {
      console.log('crg', crg)
      const booleanArray: boolean[] = filtersToRun.map(([filterName, filter]) => {
        if (filterName === 'crg') return crgTest(crg.crgRank, filter as CrgFilter)
        return categoryTest(filter as CategoryFilter[], categories[filterName])
      })
      return !booleanArray.includes(false)
    }
  )
}

const handleSearchOfSongs = (
  allSongs: Song[],
  { limit = defaultSongLimit, sortOptions = defaultSortOptions, search, startPosition = 0 }: QuerySongArguments
) => {
  const { sortKey, ascending } = sortOptions
  const searchWords = getRawString(search as string).split(' ')
  const songsThatPassSearch = []
  for (let i = 0; i < allSongs.length; i++) {
    const {
      metadata: { songName, artistName },
    } = allSongs[i]

    const songAndArtistString = getRawString([songName, artistName].join(' '))
    const songPasses = searchWords.every(word => songAndArtistString.includes(word))
    if (songPasses) songsThatPassSearch.push(allSongs[i])
  }

  const sortedAndSearchedSongs = handleSort(songsThatPassSearch, sortKey, ascending)
  return applyLimit(sortedAndSearchedSongs, startPosition, limit)
}

const songData = async (querySongsArgs: QuerySongArguments): Promise<Song[]> => {
  const { stationId, weekStartDate, search, filters } = querySongsArgs
  const queryArgs = createQueryArgs(stationId, weekStartDate)
  const allSongs = await query<Song[]>(queryArgs)
  const filteredSongs = filters ? handleFilterSongs(allSongs, filters) : allSongs

  if (search) return handleSearchOfSongs(filteredSongs, querySongsArgs)
  const {
    startPosition = 0,
    limit = defaultSongLimit,
    sortOptions: { sortKey, ascending } = { sortKey: 'crgRank', ascending: true },
  } = querySongsArgs

  const sortedSongs = handleSort(filteredSongs, sortKey, ascending)
  return applyLimit(sortedSongs, startPosition, limit)
}

export default { songData }
