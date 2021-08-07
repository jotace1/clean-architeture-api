import 'reflect-metadata'
import 'dotenv/config'
import express, { Request, Response, NextFunction } from 'express'
import Routes from './routes'
import '@shared/infra/typeorm'
import '@framework/ioc/inversify.config'

const app = express()
app.use(express.json())
app.use(Routes)

app.listen(process.env.APP_PORT, () => {
  console.log(`Running in ${process.env.ENVIRONMENT} environment at port ${process.env.APP_PORT}`)
})
