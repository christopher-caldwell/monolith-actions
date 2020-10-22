/* eslint-disable max-len */

const musicTrackerPreferencesSchema = `
  type MusicTrackerPreferences {
    preferences: [ColumnGroup]
    defaultPreferences: [DefaultColumnGroup]
  }
  type ColumnGroup {
    id: String
    active: Boolean
    name: String
    columns: [SubColumnGroup]
  }
  type DefaultColumnGroup {
    id: String
    active: Boolean
    name: String
    columns: [DefaultSubColumnGroup]
  }
  type SubColumnGroup {
    id: String
    active: Boolean
    name: String
    width: String
  }
  type DefaultSubColumnGroup {
    id: String
    active: Boolean
    name: String
    width: String
  }
  input SubColumnGroupInput {
    id: String
    active: Boolean
    name: String
    width: String
  }
  input ColumnGroupInput {
    id: String
    active: Boolean
    name: String
    columns: [SubColumnGroupInput]
  }
  input MusicTrackerPreferencesInput {
    preferences: [ColumnGroupInput]
  }
`

const musicTrackerPreferencesMutations = `
  updateMusicTrackerPreferences(userEmail: String!, newPreferences: MusicTrackerPreferencesInput): MusicTrackerPreferences
`

const musicTrackerPreferencesQuery = `
  fetchMusicTrackerPreferences(userEmail: String!): MusicTrackerPreferences
`
export { musicTrackerPreferencesSchema, musicTrackerPreferencesMutations, musicTrackerPreferencesQuery }