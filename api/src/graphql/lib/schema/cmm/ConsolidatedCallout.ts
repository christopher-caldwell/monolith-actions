const consolidatedCalloutSchema = `
  type ConsolidatedCallout {
    ccTotalPopRank: Int
    ccTotalPopScore: TrendsWithRank
    ccTotalTwoPopScore: TrendsWithoutRank
    ccTotalPtlScore: TrendsWithoutRank
    ccCorePopRank: Int
    ccCorePopScore: TrendsWithRank
    ccCoreTwoPopScore: TrendsWithoutRank
    ccCorePtlScore: TrendsWithoutRank
  }
`

export { consolidatedCalloutSchema }
