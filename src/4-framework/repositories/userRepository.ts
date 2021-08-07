import { injectable, inject } from 'inversify'
import { IUserRepository } from '@business/repositories/IUserRepository'
import { UserModel } from '@framework/models/User'
import { Repository, getRepository } from 'typeorm'
import { IUserEntity } from '@domain/entities/userEntity'

@injectable()
export class UserRepository implements IUserRepository {
  private ormRepository: Repository<UserModel>

  public constructor() {
    this.ormRepository = getRepository(UserModel)
  }
  async create(userEntity: IUserEntity): Promise<IUserEntity> {
    const userSaved = await this.ormRepository.create({
      email: userEntity.email,
      password: userEntity.password,
      name: userEntity.name
    })

    await this.ormRepository.save(userSaved)

    return userSaved
  }
}
