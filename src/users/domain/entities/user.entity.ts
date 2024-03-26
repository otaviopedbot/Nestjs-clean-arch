import { Entity } from '@/shared/domain/entities/entity'
import { UserValidatorFactory } from '../validators/user.validator'
import { EntityValidationError } from '../errors/validation-error'


export type userProps = {
  name: string
  email: string
  password: string
  createdAt?: Date
}

export class UserEntity extends Entity<userProps> {
  constructor(public readonly props: userProps, id?: string) {
    UserEntity.validate(props)
    super(props, id)
    this.props.createdAt = this.props.createdAt ?? new Date()
  }

  update(value: string): void {
    UserEntity.validate({
      ...this.props,
      name: value,
    })
    this.name = value
  }

  updatePassword(value: string): void {
    UserEntity.validate({
      ...this.props,
      password: value,
    })
    this.password = value
  }

  get name() {
    return this.props.name
  }
  private set name(value: string) {
    this.props.name = value
  }
  get email() {
    return this.props.email
  }
  get password() {
    return this.props.password
  }
  private set password(value: string) {
    this.props.password = value
  }
  get createdAt() {
    return this.props.createdAt
  }

  static validate(props: userProps) {
    const validator = UserValidatorFactory.create()
    const isValid = validator.validate(props)
    if (!isValid) {
      throw new EntityValidationError(validator.errors)
    }
  }
}
