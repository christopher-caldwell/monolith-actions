import { Trend, TrendWithRank } from './trends'

export type CrgPossibility = 'c' | 'r' | 'g'

export interface TrendEnabledProperty<TypeOfTrend = TrendWithRank> {
  currentValue: number | null
  trends: TypeOfTrend[]
}

export interface Metadata {
  songName: string
  artistName: string
  songReleaseDate: string | null
  version: string
  label: string
  songId: number
  mediaId: number
  jssId: number
}

export interface Callout {
  cTotalPopRank: number | null
  cTotalPopScore: TrendEnabledProperty<TrendWithRank>
  cTotalTwoPopScore: TrendEnabledProperty<Trend>
  cTotalPtlScore: TrendEnabledProperty<Trend>
  cTotalUnfScore: number | null
  cTotalNegScore: number | null
  cTotalDdlScore: number | null
  cTotalNopScore: number | null
  cTotalLikScore: number | null
  cTotalFavScore: number | null
  cCorePopRank: number | null
  cCorePopScore: TrendEnabledProperty<TrendWithRank>
  cCoreTwoPopScore: TrendEnabledProperty<Trend>
  cCorePtlScore: TrendEnabledProperty<Trend>
  cCoreUnfScore: number | null
  cCoreNegScore: number | null
  cCoreDdlScore: number | null
  cCoreNopScore: number | null
  cCoreLikScore: number | null
  cCoreFavScore: number | null
  cAaScore: number | null
  cAaTwoPopScore: number | null
  cAaPtlScore: number | null
  cHispanicScore: number | null
  cHispanicTwoPopScore: number | null
  cHispanicPtlScore: number | null
  cAaHispanicScore: number | null
  cAaHispanicTwoPopScore: number | null
  cAaHispanicPtlScore: number | null
  cWhiteScore: number | null
  cWhiteTwoPopScore: number | null
  cWhitePtlScore: number | null
  cAsianScore: number | null
  cAsianTwoPopScore: number | null
  cAsianPtlScore: number | null
  cMaleScore: number | null
  cMaleTwoPopScore: number | null
  cMalePtlScore: number | null
  cFemaleScore: number | null
  cFemaleTwoPopScore: number | null
  cFemalePtlScore: number | null
  cOldScore: number | null
  cOldTwoPopScore: number | null
  cOldPtlScore: number | null
  cYoungScore: number | null
  cYoungTwoPopScore: number | null
  cYoungPtlScore: number | null
  cTotalPeakScore: number | null
  cTotalPeakDate: string | null
}

export interface Omt {
  oTotalPopRank: number | null
  oTotalPopScore: TrendEnabledProperty<TrendWithRank>
  oTotalTwoPopScore: TrendEnabledProperty<Trend>
  oTotalPtlScore: TrendEnabledProperty<Trend>
  oTotalUnfScore: number | null
  oTotalNegScore: number | null
  oTotalDdlScore: number | null
  oTotalNopScore: number | null
  oTotalLikScore: number | null
  oTotalFavScore: number | null
  oCorePopRank: number | null
  oCorePopScore: TrendEnabledProperty<TrendWithRank>
  oCoreTwoPopScore: TrendEnabledProperty<Trend>
  oCorePtlScore: TrendEnabledProperty<Trend>
  oCoreUnfScore: number | null
  oCoreNegScore: number | null
  oCoreDdlScore: number | null
  oCoreNopScore: number | null
  oCoreLikScore: number | null
  oCoreFavScore: number | null
}
export interface CustomConsolidatedCallout {
  // cco_total_rnk
  cccTotalPopRank: number | null
  // cco_total_pop
  cccTotalPopScore: TrendEnabledProperty<TrendWithRank>
  // cco_total_2
  cccTotalTwoPopScore: TrendEnabledProperty<Trend>
  cccTotalPtlScore: TrendEnabledProperty<Trend>
  cccCorePopRank: number | null
  cccCorePopScore: TrendEnabledProperty<TrendWithRank>
  cccCoreTwoPopScore: TrendEnabledProperty<Trend>
  cccCorePtlScore: TrendEnabledProperty<Trend>
}
export interface CustomConsolidatedOmt {
  ccoTotalPopRank: number | null
  ccoTotalPopScore: TrendEnabledProperty<TrendWithRank>
  ccoTotalTwoPopScore: TrendEnabledProperty<Trend>
  ccoTotalPtlScore: TrendEnabledProperty<Trend>
  ccoCorePopRank: number | null
  ccoCorePopScore: TrendEnabledProperty<TrendWithRank>
  ccoCoreTwoPopScore: TrendEnabledProperty<Trend>
  ccoCorePtlScore: TrendEnabledProperty<Trend>
}
export interface ConsolidatedCallout {
  // consolidated1_total_rank
  ccTotalPopRank: number | null
  // consolidated1_total_pop
  ccTotalPopScore: TrendEnabledProperty<TrendWithRank>
  // cc_total_2
  ccTotalTwoPopScore: TrendEnabledProperty<Trend>
  // cc_total_ptl
  ccTotalPtlScore: TrendEnabledProperty<Trend>
  // cc_core_rnk
  ccCorePopRank: number | null
  // cc_core_pop
  ccCorePopScore: TrendEnabledProperty<TrendWithRank>
  // cc_core_2
  ccCoreTwoPopScore: TrendEnabledProperty<Trend>
  // cc_core_ptl
  ccCorePtlScore: TrendEnabledProperty<Trend>
}
export interface ConsolidatedOmt {
  coTotalPopRank: number | null
  coTotalPopScore: TrendEnabledProperty<TrendWithRank>
  coTotalTwoPopScore: TrendEnabledProperty<Trend>
  coTotalPtlScore: TrendEnabledProperty<Trend>
  coCorePopRank: number | null
  coCorePopScore: TrendEnabledProperty<TrendWithRank>
  coCoreTwoPopScore: TrendEnabledProperty<Trend>
  coCorePtlScore: TrendEnabledProperty<Trend>
}

export interface Taa {
  // enhanced_pop_rank
  taaRank: number | null
  // enhanced_pop
  taaScore: TrendEnabledProperty<Trend>
  nationalTier: number | null
  localTier: number | null
  plus100Spins: string | null
  plus300Spins: string | null
  // api/main/lib/js/src/panels/musicTracker.js line 75
  quintile?: number | null
}

export interface Spins {
  sixAmSevenPm: number | null
  sixAm12m: number | null
  twentyFourHours: number | null
  totalStationSpins: number | null
  marketSpins: number | null
  totalMarketSpins: number | null
  peakChartPosition: number | null
  peakChartDate: string | null
  peakSpins: number | null
  peakSpinsDate: string | null
  competitors?: {
    // key will be competitor call letters
    [key: string]: {
      spins6amTo7pm: number | null
      spins6amTo12m: number | null
      spins24h: number | null
    }
  }
}

export interface iHeartDigital {
  // up
  thumbsUp: number | null
  // down
  thumbsDown: number | null
  // completed_streams
  completedStreams: number | null
}

export interface MScore {
  switching: number | null
  playCount: number | null
  week1Score: number | null
  week2Score: number | null
  week3Score: number | null
  week4Score: number | null
}

export interface HitPredictor {
  // score
  score: number | null
}

export interface SongCycle {
  // key will be a date string in yyyy-MM-dd format
  startDate: string | null
  totalStationSpinsIn24h: number | null
  totalPopScore: number | null
  taaScore: number | null
  lastStartDate: string | null
  lastTotalPopScore: number | null
}

export interface EarlyIndicator {
  // Not really there yet
  gray: number | null
  // on its way to being a hit
  blue: number | null
  // will definitely be a hit
  green: number | null
  probabilityToHit: number | null
  stars: string | null
}

export interface Crg {
  crgRank?: CrgPossibility
}

export interface Categories {
  prior: string | null
  current: string | null
  recommended: string | null
  staged: string | null
  status: 'synchronizing' | 'synchronized' | 'needsApproval'
}

/** The song that is represented by each row in the Music Tracker table
 * All research categories are possibly undefined because the preferences can be configured to not include them
 */
export interface Song {
  groupId: string
  individualId: string
  metadata: Metadata
  crg?: Crg
  taa?: Taa
  callout?: Callout
  omt?: Omt
  ccCallout?: CustomConsolidatedCallout
  ccOmt?: CustomConsolidatedOmt
  cOmt?: ConsolidatedOmt
  cCallout?: ConsolidatedCallout
  spins?: Spins
  iHeartDigital?: iHeartDigital
  mscore?: MScore
  hitPredictor?: HitPredictor
  songCycles?: SongCycle[]
  earlyIndicator?: EarlyIndicator
  categories?: Categories
}
