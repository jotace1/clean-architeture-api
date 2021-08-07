import { CreateUserOperator } from '@controller/operations/createUserOperator'
import { container } from '@shared/ioc/container'
import { Router } from 'express'
import { InputCreateUser } from '@controller/serializers/inputCreateUser'

const userRouter = Router()

userRouter.post('/', async (request, response) => {
  try {
    const createUserOperator = container.get(CreateUserOperator)

    const input = new InputCreateUser(request.body)

    const user = await createUserOperator.exec(input)

    if (user.isLeft()) {
      return response.status(400).json(user.value)
    }

    return response.json(user.value)
  } catch (error) {
    return response.status(400).json(error)
  }
})

export default userRouter
