import { OutputCreateUserDto } from '@business/dto/createUserDto'
import { IsNotEmpty, IsString } from 'class-validator'
import { Validatable } from './abstractValidatable'

export class InputCreateUser extends Validatable<InputCreateUser> {
  @IsNotEmpty()
  @IsString()
  email!: string

  @IsNotEmpty()
  @IsString()
  password!: string

  @IsNotEmpty()
  @IsString()
  password_confirmation!: string

  @IsNotEmpty()
  @IsString()
  name!: string
}

export type OutputCreateUser = OutputCreateUserDto
