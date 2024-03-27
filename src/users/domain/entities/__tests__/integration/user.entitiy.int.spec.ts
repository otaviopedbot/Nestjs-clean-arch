import { userDataBuilder } from '@/users/domain/testing/helpers/user-data-builder'
import { UserEntity, userProps } from '@/users/domain/entities/user.entity'
import { EntityValidationError } from '@/users/domain/errors/validation-error'


describe('UserEntity integration tests', () => {

  describe('Constructor method', () => {

    it('Should throw an error when creating a user with invalid name', () => {
      let props: userProps = {
        ...userDataBuilder({}),
        name: null,
      }
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError)

      props = {
        ...userDataBuilder({}),
        name: '',
      }
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError)

      props = {
        ...userDataBuilder({}),
        name: 10 as any,
      }
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError)

      props = {
        ...userDataBuilder({}),
        name: 'a'.repeat(256),
      }
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError)
    })

    it('Should throw an error when creating a user with invalid email', () => {
      let props: userProps = {
        ...userDataBuilder({}),
        email: null,
      }
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError)

      props = {
        ...userDataBuilder({}),
        email: '',
      }
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError)

      props = {
        ...userDataBuilder({}),
        email: 10 as any,
      }
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError)

      props = {
        ...userDataBuilder({}),
        email: 'a'.repeat(256),
      }
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError)
    })

    it('Should throw an error when creating a user with invalid password', () => {
      let props: userProps = {
        ...userDataBuilder({}),
        password: null,
      }
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError)

      props = {
        ...userDataBuilder({}),
        password: '',
      }
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError)

      props = {
        ...userDataBuilder({}),
        password: 10 as any,
      }
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError)

      props = {
        ...userDataBuilder({}),
        password: 'a'.repeat(101),
      }
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError)
    })

    it('Should throw an error when creating a user with invalid createdAt', () => {
      let props: userProps = {
        ...userDataBuilder({}),
        createdAt: '2023' as any,
      }
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError)

      props = {
        ...userDataBuilder({}),
        createdAt: 10 as any,
      }
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError)
    })

    it('Should a valid user', () => {
      expect.assertions(0)

      const props: userProps = {
        ...userDataBuilder({}),
      }
      new UserEntity(props)
    })

  })

  describe('Update method', () => {
    it('Should throw an error when update a user with invalid name', () => {
      const entity = new UserEntity(userDataBuilder({}))
      expect(() => entity.update(null)).toThrowError(EntityValidationError)
      expect(() => entity.update('')).toThrowError(EntityValidationError)
      expect(() => entity.update(10 as any)).toThrowError(EntityValidationError)
      expect(() => entity.update('a'.repeat(256))).toThrowError(
        EntityValidationError,
      )
    })

    it('Should a valid user', () => {
      expect.assertions(0)

      const props: userProps = {
        ...userDataBuilder({}),
      }

      const entity = new UserEntity(props)
      entity.update('other name')
    })
  })

  describe('UpdatePassword method', () => {
    it('Should a invalid user using password field', () => {
      const entity = new UserEntity(userDataBuilder({}))
      expect(() => entity.updatePassword(null)).toThrowError(
        EntityValidationError,
      )
      expect(() => entity.updatePassword('')).toThrowError(
        EntityValidationError,
      )
      expect(() => entity.updatePassword(10 as any)).toThrowError(
        EntityValidationError,
      )
      expect(() => entity.updatePassword('a'.repeat(101))).toThrowError(
        EntityValidationError,
      )
    })

    it('Should a valid user', () => {
      expect.assertions(0)

      const props: userProps = {
        ...userDataBuilder({}),
      }

      const entity = new UserEntity(props)
      entity.updatePassword('other password')
    })
  })

})
