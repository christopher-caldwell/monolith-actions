import getDynamoItem from 'common-aws-actions/dist/dynamo/lib/getItem'
import { partitionKeyName, rangeKeyName, tableName } from '../constants'
import { GetItemOutput } from 'common-aws-actions/dist/dynamo/interfaces'

export default (partitionSearchTerm: string, rangeSearchTerm: string, shouldLogParams?: boolean): Promise<GetItemOutput> => {
  const key = {
    [partitionKeyName]: partitionSearchTerm,
    [rangeKeyName]: rangeSearchTerm,
  }
  return getDynamoItem(tableName, key, shouldLogParams)
}