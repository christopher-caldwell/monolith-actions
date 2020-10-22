import queryItem from 'common-aws-actions/dist/dynamo/lib/queryItem'
import { ItemList, SearchConfig } from 'common-aws-actions/dist/dynamo/interfaces'
import { partitionKeyName, rangeKeyName, tableName } from '../constants'

export interface DynamoOptions {
  partitionKeySearchTerm: string
  rangeKeySearchTerm?: string
  rangeKeyComparisonOperator?: string
}

export const query = async <ReturnType extends ItemList>({
  partitionKeySearchTerm,
  rangeKeySearchTerm,
}: DynamoOptions): Promise<ReturnType> => {
  const params: SearchConfig = {
    TableName: tableName,
    partitionKeyName,
    partitionKeySearchTerm,
  }
  if (rangeKeySearchTerm) {
    params.rangeKeyName = rangeKeyName
    params.rangeKeySearchTerm = rangeKeySearchTerm
  }

  const items = await queryItem<ReturnType>(params, true)
  if (items) return items
  else throw new Error('No items found')
}
