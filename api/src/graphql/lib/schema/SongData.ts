const songDataSchema = `
	type SongData {
		groupId: String
		individualId: String
		metadata: Metadata
		crg: Crg
		taa: Taa
		callout: Callout
		omt: Omt
		ccCallout: CustomConsolidatedCallout
		ccOmt: CustomConsolidatedOmt
		cOmt: ConsolidatedOmt
		cCallout: ConsolidatedCallout
		spins: Spins
		iHeartDigital: iHeartDigital
		mscore: Mscore
		hitPredictor: HitPredictor
		songCycles: [SongCycle]
		earlyIndicator: EarlyIndicator
		categories: Categories
	}
`

/* eslint-disable */
const songDataQuery = `
	songData(
		stationId: Int!,
		weekStartDate: Date!,
		limit: Int,
		startPosition: Int,
		search: String,
		sortOptions: SortOptions,
		filters: Filters
	): [SongData]
`
/* eslint-enable */

export { songDataSchema, songDataQuery }
