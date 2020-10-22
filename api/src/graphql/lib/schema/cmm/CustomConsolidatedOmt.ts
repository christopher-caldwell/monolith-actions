const customConsolidatedOmtSchema = `
  type CustomConsolidatedOmt {
    ccoTotalPopRank: Int
    ccoTotalPopScore: TrendsWithRank
    ccoTotalTwoPopScore: TrendsWithoutRank
    ccoTotalPtlScore: TrendsWithoutRank
    ccoCorePopRank: Int
    ccoCorePopScore: TrendsWithRank
    ccoCoreTwoPopScore: TrendsWithoutRank
    ccoCorePtlScore: TrendsWithoutRank
  }
`

export { customConsolidatedOmtSchema }
