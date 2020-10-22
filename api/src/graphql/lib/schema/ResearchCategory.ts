const researchCategorySchema = `
	type ResearchCategory {
		rank: String,
		score: String,
		spins: SpinData
		breakouts(limit: Int): [Breakout]
	}
`

export { researchCategorySchema }
