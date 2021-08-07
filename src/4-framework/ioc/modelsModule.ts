import { UserModel } from '@framework/models/User'
import { ContainerModule, interfaces } from 'inversify'

export const ModelsModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<UserModel>(UserModel).toConstructor(UserModel)
})
