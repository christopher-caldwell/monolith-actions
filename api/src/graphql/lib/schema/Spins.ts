const spinsSchema = `
  type Competitor {
    spins6amTo7pm: Int
    spins6amTo12m: Int
    spins24h: Int
  }

	type Spins {
		sixAmSevenPm: Int
    sixAm12m: Int
    twentyFourHours: Int
    totalStationSpins: Int
    marketSpins: Int
    totalMarketSpins: Int
    peakChartPosition: Int
    peakChartDate: String
    peakSpins: Int
    peakSpinsDate: String
    competitors: [Competitor]
	}
`

export { spinsSchema }
