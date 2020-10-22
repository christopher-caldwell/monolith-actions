import { calloutSchema } from './Callout'
import { omtSchema } from './Omt'
import { customConsolidatedCalloutSchema } from './CustomConsolidatedCallout'
import { customConsolidatedOmtSchema } from './CustomConsolidatedOmt'
import { consolidatedCalloutSchema } from './ConsolidatedCallout'
import { consolidatedOmtSchema } from './ConsolidatedOmt'

export default `
type Trend {
  date: String
  score: Int
}

type RankedTrend {
  date: String
  score: Int
  rank: Int
}

type TrendsWithoutRank {
  currentValue: Int
  trends: [Trend]
}

type TrendsWithRank {
  currentValue: Int
  trends: [RankedTrend]
}

${calloutSchema}
${omtSchema}
${customConsolidatedCalloutSchema}
${customConsolidatedOmtSchema}
${consolidatedCalloutSchema}
${consolidatedOmtSchema}
`
