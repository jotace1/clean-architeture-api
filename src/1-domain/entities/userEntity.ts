import { left, Either, right } from '../../shared/either'
import { IError } from '../../shared/iError'
import { passwordDoesntMatch } from '../errors/user'
import { AbstractEntity } from './abstractEntity'

export interface IUserEntity {
  email: string
  password: string
  password_confirmation?: string
  name: string
}

export class UserEntity extends AbstractEntity<IUserEntity> {
  static create(props: IUserEntity): Either<IError, UserEntity> {
    if (props.password !== props.password_confirmation) {
      return left(passwordDoesntMatch)
    }

    const user = new UserEntity({
      ...props
    })

    return right(user)
  }
}
