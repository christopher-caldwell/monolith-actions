import { graphql } from 'graphql'
import ResponseHandler from 'common-aws-actions/dist/util/Responder'
import { ResponseBody } from 'common-aws-actions/dist/shared/interfaces'
import { bodyParser } from 'common-aws-actions/dist/util/formatter'

import { schema, resolvers } from './lib'
import { Event, EventBody } from './interfaces/data'

const corsUrl = process.env.CORS_URL as string
const Responder = new ResponseHandler({ corsUrl, httpMethod: 'POST' })

export const handler = async (event: Event): Promise<ResponseBody> => {
  try {
    const { query, variables, operationName } = bodyParser(event.body) as EventBody
    const result = await graphql(schema, query, resolvers, null, variables, operationName)
    return Responder.respond(result, 200)
  } catch (error) {
    console.error('Global error caught: ', error)
    return Responder.respond(error, error.statusCode || 500)
  }
}
