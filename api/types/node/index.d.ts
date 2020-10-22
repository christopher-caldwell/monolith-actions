declare namespace global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: string
      TABLE_NAME?: string
      PARTITION_KEY?: string
      RANGE_KEY?: string
      TABLE_RANGE_KEY?: string
    }
  }
}
