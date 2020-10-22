import { Preferences, NewPreferences, UpdatedPreferenceArguments } from '../../interfaces/resolvers'
import putItem from '../../dynamo/putItem'
import getItem from '../../dynamo/getItem'

const musicTrackerPreferenceRangeKey = 'music-tracker-preferences'

const updateMusicTrackerPreferences = async ({
  userEmail,
  newPreferences,
}: UpdatedPreferenceArguments): Promise<Preferences> => {
  await putItem(newPreferences, userEmail, musicTrackerPreferenceRangeKey)
  const defaultPreferences = await getItem('#SETTINGS', 'default-music-tracker-preferences') as NewPreferences
  return { preferences: newPreferences.preferences, defaultPreferences: defaultPreferences.preferences }
}

const fetchMusicTrackerPreferences = async ({ userEmail }: { userEmail: string }): Promise<Preferences> => {
  try {
    // TODO: 
    const [preferences, defaultPreferences] = await Promise.all([
      getItem(userEmail, musicTrackerPreferenceRangeKey, true),
      getItem('#SETTINGS', 'default-music-tracker-preferences')
    ]) as unknown as NewPreferences[]
    
      return { preferences: preferences.preferences, defaultPreferences: defaultPreferences.preferences }
  } catch(error) {
    if (error.statusCode === 404) {
      const defaultPreferences = await getItem('#SETTINGS', 'default-music-tracker-preferences') as NewPreferences
      await updateMusicTrackerPreferences({ userEmail, newPreferences: defaultPreferences })
      return { preferences: defaultPreferences.preferences, defaultPreferences: defaultPreferences.preferences }
    }
    throw error
  }
}

export default { updateMusicTrackerPreferences, fetchMusicTrackerPreferences }
