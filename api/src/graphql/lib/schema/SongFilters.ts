const songFiltersSchema = `
  input Filters {
    crg: CrgFilter
    current: [CategoryFilter]
    prior: [CategoryFilter]
    staged: [CategoryFilter]
    recommended: [CategoryFilter]
  }
`

export { songFiltersSchema }