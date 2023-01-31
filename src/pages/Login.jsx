import { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
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
        <form className="form-group">
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