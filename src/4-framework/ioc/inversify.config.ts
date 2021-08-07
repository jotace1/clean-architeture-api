import { container } from '@shared/ioc/container'
import { RepositoryModule } from './repositoryModule'
import { ModelsModule } from './modelsModule'
import { UseCasesModule } from './useCasesModule'
import { OperatorModule } from './operatorModule'

container.load(ModelsModule)
container.load(RepositoryModule)
container.load(UseCasesModule)
container.load(OperatorModule)
