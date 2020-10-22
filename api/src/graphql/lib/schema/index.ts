import { buildSchema } from 'graphql'

import { metadataSchema } from './Metadata'
import { crgSchema } from './Crg'
import { taaSchema } from './Taa'
import cmmSchema from './cmm'
import { spinsSchema } from './Spins'
import { iHeartDigitalSchema } from './iHeartDigital'
import { mScoreSchema } from './Mscore'
import { hitPredictorSchema } from './HitPredictor'
import { songCycleSchema } from './SongCycle'
import { earlyIndicatorSchema } from './EarlyIndicator'
import { categoriesSchema } from './Categories'
import { songDataSchema, songDataQuery } from './SongData'
import { sortOptionsSchema } from './SortOptions'
import { crgFilterSchema } from './CrgFilter'
import { songFiltersSchema } from './SongFilters'
import { categoryFilterSchema } from './CategoryFilter'
import {
  musicTrackerPreferencesMutations,
  musicTrackerPreferencesSchema,
  musicTrackerPreferencesQuery,
} from './MusicTrackerPreferences'

export default buildSchema(`
	${musicTrackerPreferencesSchema}
	${metadataSchema}
	${crgSchema}
	${taaSchema}
	${cmmSchema}
	${spinsSchema}
	${iHeartDigitalSchema}
	${mScoreSchema}
	${hitPredictorSchema}
	${songCycleSchema}
	${earlyIndicatorSchema}
	${categoriesSchema}
	${songDataSchema}
	${sortOptionsSchema}
	${crgFilterSchema}
	${songFiltersSchema}
	${categoryFilterSchema}
	scalar Date
	type Query {
		${songDataQuery}
		${musicTrackerPreferencesQuery}
	}
	type Mutation {
		${musicTrackerPreferencesMutations}
	}
`)
