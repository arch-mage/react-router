import { type ServerBuild, createRequestHandler } from 'react-router'
import * as build from './build/server'

const handler = createRequestHandler(build as unknown as ServerBuild)

export default {
  fetch(request: Request) {
    return handler(request)
  },
}
