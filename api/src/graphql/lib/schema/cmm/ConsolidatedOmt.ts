const consolidatedOmtSchema = `
  type ConsolidatedOmt {
    coTotalPopRank: Int
    coTotalPopScore: TrendsWithRank
    coTotalTwoPopScore: TrendsWithoutRank
    coTotalPtlScore: TrendsWithoutRank
    coCorePopRank: Int
    coCorePopScore: TrendsWithRank
    coCoreTwoPopScore: TrendsWithoutRank
    coCorePtlScore: TrendsWithoutRank
  }
`

export { consolidatedOmtSchema }
