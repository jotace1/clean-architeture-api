import { injectable, inject } from 'inversify'
import { IUserRepository } from '@business/repositories/IUserRepository'
import { UserModel } from '@framework/models/User'
import { Repository } from 'typeorm'
import { IUserEntity } from '@domain/entities/userEntity'

@injectable()
export class UserRepository implements IUserRepository {
  public constructor(@inject(UserModel) private userModel: Repository<UserModel>) {}
  async create(userEntity: IUserEntity): Promise<IUserEntity> {
    const userSaved = await this.userModel.create({
      email: userEntity.email,
      password: userEntity.password,
      name: userEntity.name
    })

    await this.userModel.save(userSaved)

    return userSaved
  }
}
