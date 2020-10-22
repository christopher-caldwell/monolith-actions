import { SortKey } from './data'

export interface SortOptions {
  sortKey: SortKey
  ascending: boolean
}

export interface SongFilters {
  crg: CrgFilter
  prior: CategoryFilter[]
  current: CategoryFilter[]
  recommended: CategoryFilter[]
  staged: CategoryFilter[]
}

export interface QuerySongArguments {
  stationId: number
  weekStartDate: string
  limit?: number
  startPosition?: number
  search?: string
  sortOptions?: SortOptions
  filters?: SongFilters
}

export interface NewPreferences {
  preferences: ColumnGroup[]
}

export interface Preferences {
  preferences: ColumnGroup[]
  defaultPreferences: DefaultColumnGroup[]
}

interface ColumnGroup {
  id: string
  active: boolean
  name: string
  columns: Column[]
}

interface DefaultColumnGroup {
  id: string
  active: boolean
  name: string
  columns: DefaultColumn[]
}

interface Column {
  id: string
  active: boolean
  name: string
  width: string
}

interface DefaultColumn {
  id: string
  active: boolean
  name: string
  width: string
}

export interface CrgFilter {
  C: boolean
  R: boolean
  G: boolean
}

export interface CategoryFilter {
  id: string
  description: string
  label: string
  checked: boolean
}

export interface UpdatedPreferenceArguments {
  userEmail: string
  newPreferences: NewPreferences
}