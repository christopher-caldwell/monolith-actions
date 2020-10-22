import { ChildPreference } from './childPreferences'

// Root Preference ( top level on table columns )
export type PreferenceId =
  | 'metadata'
  | 'category'
  | 'crg'
  | 'taa'
  | 'callout'
  | 'ccCallout'
  | 'omt'
  | 'ccOmt'
  | 'spins'
  | 'mscore'
  | 'iHeartDigital'
  | 'hitPredictor'

export interface Preference {
  id: PreferenceId
  active: boolean
  name: string
  columns?: ChildPreference[]
}

export interface Preferences {
  preferences: Preference[]
}