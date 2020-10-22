// Child preference ( 2nd row column headers )
export type MetadataChildPreferenceId = 'songName' | 'artistName' | 'songReleaseDate' | 'songId' | 'mediaId' | 'jssId'
export type CategoryChildPreferenceId = 'prior' | 'current' | 'new' | 'recommended' | 'staged'
export type CrgChildPreferenceId = 'crgRank'
export type TaaChildPreferenceId =
  | 'taaRank'
  | 'taaScore'
  | 'nationalTier'
  | 'localTier'
  | 'plus100Spins'
  | 'plus300Spins'
  | 'quintile'

export type CalloutChildPreferenceId =
  | 'cTotalPopRank'
  | 'cTotalPopScore'
  | 'cTotalTwoPopScore'
  | 'cTotalPtlScore'
  | 'cTotalUnfScore'
  | 'cTotalNegScore'
  | 'cTotalDdlScore'
  | 'cTotalNopScore'
  | 'cTotalLikScore'
  | 'cTotalFavScore'
  | 'cCorePopRank'
  | 'cCorePopScore'
  | 'cCoreTwoPopScore'
  | 'cCorePtlScore'
  | 'cCoreUnfScore'
  | 'cCoreNegScore'
  | 'cCoreDdlScore'
  | 'cCoreNopScore'
  | 'cCoreLikScore'
  | 'cCoreFavScore'
  | 'cAaScore'
  | 'cAaTwoPopScore'
  | 'cAaPtlScore'
  | 'cHispanicScore'
  | 'cHispanicTwoPopScore'
  | 'cHispanicPtlScore'
  | 'cAaHispanicScore'
  | 'cAaHispanicTwoPopScore'
  | 'cAaHispanicPtlScore'
  | 'cWhiteScore'
  | 'cWhiteTwoPopScore'
  | 'cWhitePtlScore'
  | 'cAsianScore'
  | 'cAsianTwoPopScore'
  | 'cAsianPtlScore'
  | 'cMaleScore'
  | 'cMaleTwoPopScore'
  | 'cMalePtlScore'
  | 'cFemaleScore'
  | 'cFemaleTwoPopScore'
  | 'cFemalePtlScore'
  | 'cOldScore'
  | 'cOldTwoPopScore'
  | 'cOldPtlScore'
  | 'cYoungScore'
  | 'cYoungTwoPopScore'
  | 'cYoungPtlScore'
  | 'cTotalPeakScore'
  | 'cTotalPeakDate'

export type CustomConsolidatedCalloutChildId =
  | 'cccTotalPopRank'
  | 'cccTotalPopScore'
  | 'cccTotalTwoPopScore'
  | 'cccTotalPtlScore'
  | 'cccCorePopRank'
  | 'cccCorePopScore'
  | 'cccCoreTwoPopScore'
  | 'cccCorePtlScore'

export type OmtChildId =
  | 'oTotalPopRank'
  | 'oTotalPopScore'
  | 'oTotalTwoPopScore'
  | 'oTotalPtlScore'
  | 'oTotalUnfScore'
  | 'oTotalNegScore'
  | 'oTotalDdlScore'
  | 'oTotalNopScore'
  | 'oTotalLikScore'
  | 'oTotalFavScore'
  | 'oCorePopRank'
  | 'oCorePopScore'
  | 'oCoreTwoPopScore'
  | 'oCorePtlScore'
  | 'oCoreUnfScore'
  | 'oCoreNegScore'
  | 'oCoreDdlScore'
  | 'oCoreNopScore'
  | 'oCoreLikScore'
  | 'oCoreFavScore'

export type CustomConsolidatedOmtChildId =
  | 'ccoTotalPopRank'
  | 'ccoTotalPopScore'
  | 'ccoTotalTwoPopScore'
  | 'ccoTotalPtlScore'
  | 'ccoCorePopRank'
  | 'ccoCorePopScore'
  | 'ccoCoreTwoPopScore'
  | 'ccoCorePtlScore'

export type SpinsChildId =
  | 'sixAmSevenPm'
  | 'sixAm12m'
  | 'twentyFourHours'
  | 'totalStationSpins'
  | 'marketSpins'
  | 'totalMarketSpins'
  | 'peakChartPosition'
  | 'peakChartDate'
  | 'peakSpins'
  | 'peakSpinsDate'
// | 'competitors'

export type MscoreChildId = 'switching' | 'playCount' | 'week1Score' | 'week2Score' | 'week3Score' | 'week4Score'
export type iHeartDigitalChildId = 'thumbsUp' | 'thumbsDown' | 'completedStreams'
export type HitPredictorChildId = 'score'

export type ChildPreferenceId =
  | MetadataChildPreferenceId
  | CategoryChildPreferenceId
  | CrgChildPreferenceId
  | TaaChildPreferenceId
  | CalloutChildPreferenceId
  | CustomConsolidatedCalloutChildId
  | OmtChildId
  | CustomConsolidatedOmtChildId
  | SpinsChildId
  | MscoreChildId
  | iHeartDigitalChildId
  | HitPredictorChildId

export interface ChildPreference {
  id: ChildPreferenceId
  active: boolean
  name: string
  width?: string
}
