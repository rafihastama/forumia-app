import React from 'react'
import { IoReaderOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import RegisterInput from '../components/RegisterInput'
import { useDispatch } from 'react-redux'
import { asyncRegisterUser } from '../states/users/action'

function RegisterPage () {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }))

    navigate('/')
  }

  return (
    <section className="register-page">
      <header className="register-page__hero">
        <h1><IoReaderOutline /></h1>
      </header>
      <article className="register-page__main">
        <h2>Create your account</h2>
        <RegisterInput register={onRegister} />

        <p>
          Already have an account?
          {' '}
          <Link to="/">Login</Link>
        </p>
      </article>
    </section>
  )
}

export default RegisterPage
