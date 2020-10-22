/* eslint-disable @typescript-eslint/ban-ts-comment */

import { SortFunction, SortKey } from '../../interfaces/data'
import { ChildPreferenceId } from '../../interfaces/childPreferences'
import { PreferenceId } from '../../interfaces/rootPreferences'
import { dataPaths } from '../../constants/dataPath'
import { Song, CrgPossibility } from '../../interfaces'

export const getRawString = (str: string): string => str.toLowerCase().replace(/[^a-zA-Z ]/g, '')
export const applyLimit = (songs: Song[], startIndex: number, howManySongs: number): Song[] =>
  songs.slice(startIndex, howManySongs)

const crgOrder = {
  c: 1,
  r: 2,
  g: 3,
}

// sort functions -----------------------------------------------------------------------------
const sortByCrg: SortFunction = (songs: Song[], asc: boolean, sortKey: SortKey = 'crg'): Song[] =>
  [...(songs as Song[])].sort((songA, songB) => {
    const crgA = songA[sortKey].crgRank as CrgPossibility
    const crgB = songB[sortKey].crgRank as CrgPossibility
    return asc ? crgOrder[crgA] - crgOrder[crgB] : crgOrder[crgB] - crgOrder[crgA]
  })

const defaultNumberSort = (songs: Song[], key: ChildPreferenceId, asc: boolean) => {
  const parentGroup: PreferenceId = dataPaths[key]
  // @ts-ignore
  const noData = songs.filter(song => !song[parentGroup] && song[parentGroup][key])
  const hasData = songs
    // @ts-ignore
    .filter(song => !!song[parentGroup][key])
    .sort((songA, songB) => {
      // @ts-ignore
      const metricA = songA[parentGroup][key]
      // @ts-ignore
      const metricB = songB[parentGroup][key]
      return asc ? metricA - metricB : metricB - metricA
    })
  return hasData.concat(noData)
}

const sortFunctions: { [key: string]: SortFunction } = { crg: sortByCrg }

export const handleSort = (songs: Song[], key: string, isAsc: boolean): Song[] => {
  const customSort = sortFunctions[key] || false
  return customSort ? customSort(songs, isAsc) : defaultNumberSort(songs, key as ChildPreferenceId, isAsc)
}
// -----------------------------------------------------------------------------
