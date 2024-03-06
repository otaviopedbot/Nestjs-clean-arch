export type userProps = {
  name: string
  email: string
  password: string
  createdAt?: Date
}


export class UserEntity {
  constructor(public readonly props: userProps){
    this.props.createdAt = this.props.createdAt ?? new Date()
  }
}
