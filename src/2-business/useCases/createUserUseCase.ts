import { injectable, inject } from 'inversify'
import { IUseCase } from './iUseCase'
import { left, right } from '@shared/either'
import { UserEntity } from '@domain/entities/userEntity'
import { InputCreateUserDto, OutputCreateUserDto } from '@business/dto/createUserDto'
import { IUserRepository, IUserRepositoryToken } from '@business/repositories/IUserRepository'

@injectable()
export class CreateUserUseCase implements IUseCase<InputCreateUserDto, OutputCreateUserDto> {
  public constructor(
    @inject(IUserRepositoryToken)
    private userRepository: IUserRepository
  ) {}

  async exec(input: InputCreateUserDto): Promise<OutputCreateUserDto> {
    const userEntity = UserEntity.create(input)

    if (userEntity.isLeft()) {
      return left(userEntity.value)
    }

    const user = await this.userRepository.create(userEntity.value.export())

    return right(user)
  }
}
