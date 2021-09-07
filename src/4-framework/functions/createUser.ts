import { CreateUserUseCase } from '@business/useCases/createUserUseCase'
import { CreateUserOperator } from '@controller/operations/createUserOperator'
import { InputCreateUser } from '@controller/serializers/inputCreateUser'
import { container } from '@shared/ioc/container'
import { Request, Response } from 'express'
import { inject, injectable } from 'inversify'

@injectable()
export class CreateUser {
  async run(request: Request, response: Response) {
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
  }
}
