import { Song } from './index'
export type SortKey = 'crgRank'

export type SortFunction = (allSongs: Song[], asc: boolean, sortKey?: SortKey) => Song[]

export interface SortFunctionMap {
  crg: SortFunction
}

export interface EventBody {
  query: string
  variables: Record<string, unknown>
  operationName: string
}

export interface Event {
  body: string | EventBody
}

export interface Categories {
  prior: string
  current: string
  new: string
  staged: string
  recommended: string
}
