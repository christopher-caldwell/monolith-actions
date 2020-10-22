import { GraphQLScalarType } from 'graphql'

export default new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  // value from the client
  parseValue(value) {
    console.log('parsing date')
    return new Date(value)
  },
  // value sent to the client
  serialize(value) {
    return new Date(value)
  },
})
