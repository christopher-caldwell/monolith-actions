import putDynamoItem from 'common-aws-actions/dist/dynamo/lib/putItem'
import { partitionKeyName, rangeKeyName, tableName } from '../constants'
import { AttributeMap } from 'common-aws-actions/dist/dynamo/interfaces'

export default (
  itemToStore: AttributeMap,
  partitionKeyValue?: string,
  rangeKeyValue?: string
): Promise<AttributeMap> => {
  let item: AttributeMap = itemToStore
  if (partitionKeyValue && rangeKeyValue) {
    item = {
      [partitionKeyName]: partitionKeyValue,
      [rangeKeyName]: rangeKeyValue,
      ...item,
    }
  }
  return putDynamoItem(tableName, item)
}