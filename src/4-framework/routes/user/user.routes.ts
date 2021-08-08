import { CreateUserOperator } from '@controller/operations/createUserOperator'
import { container } from '@shared/ioc/container'
import { Router } from 'express'

const userRouter = Router()

const createUserOperator = container.get(CreateUserOperator)

userRouter.post('/', createUserOperator.exec)

export default userRouter
