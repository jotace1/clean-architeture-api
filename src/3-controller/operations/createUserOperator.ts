import { CreateUserUseCase } from '@business/useCases/createUserUseCase'
import { InputCreateUser } from '@controller/serializers/inputCreateUser'
import { left } from '@shared/either'
import { inject, injectable } from 'inversify'
import { AbstractOperator } from './abstractOperator'
import { Request, Response } from 'express'

@injectable()
export class CreateUserOperator extends AbstractOperator<Request, Response> {
  public constructor(@inject(CreateUserUseCase) private createUserUseCase: CreateUserUseCase) {
    super()
  }

  public async exec(request: Request, response: Response): Promise<any> {
    try {
      const input = new InputCreateUser(request.body)

      input.validate()

      const user = await this.createUserUseCase.exec(input)

      if (user.isLeft()) {
        return left(user.value)
      }

      return response.json(user.value)
    } catch (error) {
      console.log(error)
      return response.status(400).json(error)
    }
  }
}
