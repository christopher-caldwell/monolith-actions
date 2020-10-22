const calloutSchema = `
  type Callout {
    cTotalPopRank: Int
    cTotalPopScore: TrendsWithRank
    cTotalTwoPopScore: TrendsWithoutRank
    cTotalPtlScore: TrendsWithoutRank
    cTotalUnfScore: Int
    cTotalNegScore: Int
    cTotalDdlScore: Int
    cTotalNopScore: Int
    cTotalLikScore: Int
    cTotalFavScore: Int
    cCorePopRank: Int
    cCorePopScore: TrendsWithRank
    cCoreTwoPopScore: TrendsWithoutRank
    cCorePtlScore: TrendsWithoutRank
    cCoreUnfScore: Int
    cCoreNegScore: Int
    cCoreDdlScore: Int
    cCoreNopScore: Int
    cCoreLikScore: Int
    cCoreFavScore: Int
    cAaScore: Int
    cAaTwoPopScore: Int
    cAaPtlScore: Int
    cHispanicScore: Int
    cHispanicTwoPopScore: Int
    cHispanicPtlScore: Int
    cAaHispanicScore: Int
    cAaHispanicTwoPopScore: Int
    cAaHispanicPtlScore: Int
    cWhiteScore: Int
    cWhiteTwoPopScore: Int
    cWhitePtlScore: Int
    cAsianScore: Int
    cAsianTwoPopScore: Int
    cAsianPtlScore: Int
    cMaleScore: Int
    cMaleTwoPopScore: Int
    cMalePtlScore: Int
    cFemaleScore: Int
    cFemaleTwoPopScore: Int
    cFemalePtlScore: Int
    cOldScore: Int
    cOldTwoPopScore: Int
    cOldPtlScore: Int
    cYoungScore: Int
    cYoungTwoPopScore: Int
    cYoungPtlScore: Int
    cTotalPeakScore: Int
    cTotalPeakDate: String
  }
`

export { calloutSchema }
