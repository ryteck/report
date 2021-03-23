import express from 'express'
import routes from '../routes'

const PORT = 3000
const SERVER = express()

SERVER.use(routes)

SERVER.listen(PORT, () => console.log(`Escutando a porta: ${PORT}`))
