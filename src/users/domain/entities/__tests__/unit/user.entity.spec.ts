import { UserEntity, userProps } from '../../user.entity'
import { userDataBuilder } from '@/users/domain/testing/helpers/user-data-builder'

describe("userEntity unit tests", () => {

  let props: userProps
  let sut: UserEntity

  beforeEach(() => {
    UserEntity.validate = jest.fn()
    props = userDataBuilder({})
    sut = new UserEntity(props)
  })

  it('constructor method', () => {
    expect(UserEntity.validate).toHaveBeenCalled()
    expect(sut.props.name).toEqual(props.name)
    expect(sut.props.email).toEqual(props.email)
    expect(sut.props.createdAt).toBeInstanceOf(Date)
  })

  it('Getter of name field', () => {
    expect(sut.props.name).toBeDefined()
    expect(sut.props.name).toEqual(props.name)
    expect(typeof sut.props.name).toBe("string")
  })

  it('Setter of name field', () => {
    sut['name'] = 'other name'
    expect(sut.props.name).toEqual('other name')
    expect(typeof sut.props.name).toBe("string")
  })

  it('Getter of email field', () => {
    expect(sut.props.email).toBeDefined()
    expect(sut.props.email).toEqual(props.email)
    expect(typeof sut.props.email).toBe("string")
  })

  it('Getter of password field', () => {
    expect(sut.props.password).toBeDefined()
    expect(sut.props.password).toEqual(props.password)
    expect(typeof sut.props.password).toBe("string")
  })

  it('Setter of password field', () => {
    sut['password'] = 'other password'
    expect(sut.props.password).toEqual('other password')
    expect(typeof sut.props.password).toBe("string")
  })

  it('Getter of createdAt field', () => {
    expect(sut.props.createdAt).toBeDefined()
    expect(sut.props.createdAt).toBeInstanceOf(Date)
  })

  it('Should update a user', () => {
    expect(UserEntity.validate).toHaveBeenCalled()
    sut.update('other name')
    expect(sut.props.name).toEqual('other name')
  })

  it('Should update the password field', () => {
    expect(UserEntity.validate).toHaveBeenCalled()
    sut.updatePassword('other password')
    expect(sut.props.password).toEqual('other password')
  })

})
