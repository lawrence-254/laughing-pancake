import { yupResolver } from '@hookform/resolvers/yup'
import {useForm, submitHandler} from 'react-hook-form'
import * as yup from 'yup'

interface IFormInput {
  email: string
  password: string
}
const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required")
  })
  const {login, handleSubmit, formState:{errors},}=useForm<IFormInput>({
    resolver:yupResolver(schema)
  })
  const handleSubmit =()=>{
    console.log('ghj');

  }


  return (
    <div>
      <h1>LOGIN TO YOUR ACCOUNT</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
