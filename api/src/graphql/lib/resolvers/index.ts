import songDataResolvers from './SongData'
import preferenceResolvers from './Preferences'
import Date from './Date'

const resolvers = {
  ...songDataResolvers,
  ...preferenceResolvers,
  Date,
}

export default resolvers
