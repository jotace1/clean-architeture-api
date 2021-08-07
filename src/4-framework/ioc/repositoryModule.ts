import { IUserRepository, IUserRepositoryToken } from '@business/repositories/IUserRepository'
import { UserRepository } from '@framework/repositories/userRepository'
import { ContainerModule, interfaces } from 'inversify'

export const RepositoryModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<IUserRepository>(IUserRepositoryToken).to(UserRepository)
})
