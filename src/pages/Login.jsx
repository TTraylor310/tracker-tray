import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaSignInAlt } from 'react-icons/fa'
import { login } from '../features/auth/authSlice'

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = formData
  const dispatch = useDispatch()
  const {user, isError, isLoading, isSuccess, message} = useSelector(state => state.auth)

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = e => {
    e.preventDefault()
    const userData = {
      email,
      password,
    }
    dispatch(login(userData))
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please log in to get access</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input 
              type='email'
              className='form-control'
              id='email'
              name='email'
              placeholder='Enter your email'
              required
              onChange={onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <input 
              type='password'
              className='form-control'
              id='password'
              name='password'
              placeholder='Enter password'
              required
              onChange={onChange}
              value={password}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}
export default Login