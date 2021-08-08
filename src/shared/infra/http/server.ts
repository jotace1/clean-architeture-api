import 'reflect-metadata'
import 'dotenv/config'
import express from 'express'
import '@shared/infra/typeorm'
import '@framework/ioc/inversify.config'
import Routes from './routes'

const app = express()
app.use(express.json())
app.use(Routes)

app.listen(process.env.APP_PORT, () => {
  console.log(`Running in ${process.env.ENVIRONMENT} environment at port ${process.env.APP_PORT}`)
})
