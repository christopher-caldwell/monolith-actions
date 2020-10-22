const omtSchema = `
type Omt {
  oTotalPopRank: Int
  oTotalPopScore: TrendsWithRank
  oTotalTwoPopScore: TrendsWithoutRank
  oTotalPtlScore: TrendsWithoutRank
  oTotalUnfScore: Int
  oTotalNegScore: Int
  oTotalDdlScore: Int
  oTotalNopScore: Int
  oTotalLikScore: Int
  oTotalFavScore: Int
  oCorePopRank: Int
  oCorePopScore: TrendsWithRank
  oCoreTwoPopScore: TrendsWithoutRank
  oCorePtlScore: TrendsWithoutRank
  oCoreUnfScore: Int
  oCoreNegScore: Int
  oCoreDdlScore: Int
  oCoreNopScore: Int
  oCoreLikScore: Int
  oCoreFavScore: Int
}
`

export { omtSchema }
