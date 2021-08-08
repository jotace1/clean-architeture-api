import { Validatable } from '@controller/serializers/abstractValidatable'
import { injectable } from 'inversify'
import { ValidationError } from 'class-validator'
import { validationError } from '@business/modules/errors/validation'
import { Request, Response } from 'express'

@injectable()
export abstract class AbstractOperator<I, O> {
  public async exec(request: Request, response: Response): Promise<O> {
    try {
      return this.exec(request, response)
    } catch (err) {
      if (err instanceof Array && err.length && err[0] instanceof ValidationError) {
        const data = err.map((i) => ({
          property: i.property,
          constraints: i.constraints
        }))
        throw validationError(data)
      }
      throw err
    }
  }
}
