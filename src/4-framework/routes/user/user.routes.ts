import { CreateUserOperator } from '@controller/operations/createUserOperator'
import { container } from '@shared/ioc/container'
import { Router } from 'express'
import { InputCreateUser } from '@controller/serializers/inputCreateUser'
import { CreateUser } from '@framework/functions/createUser'

const userRouter = Router()

const createUser = new CreateUser()

userRouter.post('/', createUser.run)

export default userRouter
