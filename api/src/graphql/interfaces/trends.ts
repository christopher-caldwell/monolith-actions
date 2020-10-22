export type ConsolidatedTrendType = 'Callout' | 'Omt'
export type TrendName = ConsolidatedTrendType | 'Custom Consolidated' | 'Custom Consolidated OMT'

export interface Trend {
  date: string
  score: number
}

export interface TrendWithRank {
  date: string
  score: number
  rank: number
}

interface BaseTrend {
  /** Combination of `song_id` and `jss_id` */
  compositeId: string
  dataSource: TrendName
}

interface BaseTrendConsolidated {
  /** Combination of `song_id` and `jss_id` */
  compositeId: string
  dataSource: ConsolidatedTrendType
}

export interface TrendReturnFromDb<TypeOfTrend> {
  [songId: string]: TypeOfTrend
}

export interface OmtTrendsData extends BaseTrend {
  oTotalPop: TrendWithRank[]
  oCorePop: TrendWithRank[]
  oTotalTwoPop: Trend[]
  oCoreTwoPop: Trend[]
  oTotalPtl: Trend[]
  oCorePtl: Trend[]
}

export interface CalloutTrendsData extends BaseTrend {
  cTotalPop: TrendWithRank[]
  cCorePop: TrendWithRank[]
  cTotalTwoPop: Trend[]
  cCoreTwoPop: Trend[]
  cTotalPtl: Trend[]
  cCorePtl: Trend[]
}

export interface CCCalloutTrendsData extends BaseTrend {
  cccTotalPop: TrendWithRank[]
  cccCorePop: TrendWithRank[]
  cccTotalTwoPop: Trend[]
  cccCoreTwoPop: Trend[]
  cccTotalPtl: Trend[]
  cccCorePtl: Trend[]
}

export interface CCOmtTrendsData extends BaseTrend {
  ccoTotalPop: TrendWithRank[]
  ccoCorePop: TrendWithRank[]
  ccoTotalTwoPop: Trend[]
  ccoCoreTwoPop: Trend[]
  ccoTotalPtl: Trend[]
  ccoCorePtl: Trend[]
}

export interface CCalloutTrendsData extends BaseTrendConsolidated {
  ccTotalPop: TrendWithRank[]
  ccCorePop: TrendWithRank[]
  ccTotalTwoPop: Trend[]
  ccCoreTwoPop: Trend[]
  ccTotalPtl: Trend[]
  ccCorePtl: Trend[]
}

export interface COmtTrendsData extends BaseTrendConsolidated {
  coTotalPop: TrendWithRank[]
  coCorePop: TrendWithRank[]
  coTotalTwoPop: Trend[]
  coCoreTwoPop: Trend[]
  coTotalPtl: Trend[]
  coCorePtl: Trend[]
}
