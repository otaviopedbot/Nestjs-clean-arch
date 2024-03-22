import { faker } from '@faker-js/faker'
import { UserEntity, userProps } from '../../user.entity'

describe("userEntity unit tests", () => {

  let props: userProps
  let sut: UserEntity

  beforeEach(() => {
    props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    }
    sut = new UserEntity(props)
  })

  it('constructor method', () => {
    expect(sut.props.name).toEqual(props.name)
    expect(sut.props.email).toEqual(props.email)
    expect(sut.props.createdAt).toBeInstanceOf(Date)
  })
})
