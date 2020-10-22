const customConsolidatedCalloutSchema = `
	type CustomConsolidatedCallout {
    cccTotalPopRank: Int
    cccTotalPopScore: TrendsWithRank
    cccTotalTwoPopScore: TrendsWithoutRank
    cccTotalPtlScore: TrendsWithoutRank
    cccCorePopRank: Int
    cccCorePopScore: TrendsWithRank
    cccCoreTwoPopScore: TrendsWithoutRank
    cccCorePtlScore: TrendsWithoutRank
	}
`

export { customConsolidatedCalloutSchema }
