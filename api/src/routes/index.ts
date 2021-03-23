import { Router } from 'express'

const ROUTER = Router()

ROUTER
  .all('/', (request, response) => response.status(200).send('Hello World'))

export default ROUTER
