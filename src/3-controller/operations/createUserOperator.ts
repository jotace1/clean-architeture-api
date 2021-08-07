import { CreateUserUseCase } from '@business/useCases/createUserUseCase'
import { InputCreateUser, OutputCreateUser } from '@controller/serializers/inputCreateUser'
import { left } from '@shared/either'
import { inject, injectable } from 'inversify'
import { AbstractOperator } from './abstractOperator'

@injectable()
export class CreateUserOperator extends AbstractOperator<InputCreateUser, OutputCreateUser> {
  public constructor(@inject(CreateUserUseCase) private createUserUseCase: CreateUserUseCase) {
    super()
  }

  protected async run(input: InputCreateUser): Promise<any> {
    const user = await this.createUserUseCase.exec(input)

    if (user.isLeft()) {
      return left(user.value)
    }

    return user
  }
}
