// import React from 'react';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import * as yup from 'yup';
// import Cookies from 'universal-cookie'

// interface IFormInput {
//   email: string;
//   username: string;
//   password: string;
// }

// const Login: React.FC = () => {
//   const cookies = new Cookies();
//   const schema = yup.object().shape({
//     email: yup.string().email().required("Email is required"),
//     username: yup.string().required("Username is required"),
//     password: yup.string().required("Password is required")
//   });

//   const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
//     resolver: yupResolver(schema)
//   });

// const onSubmit: SubmitHandler<IFormInput> = async (data) => {
//     console.log(data);

//     try {
//       const response = await fetch('http://localhost:6969/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       });

//       if (!response.ok) {
//         const message = `An error has occurred: ${response.status}`;
//         throw new Error(message);
//       }

//       const responseData = await response.json();
//        const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);
//       cookies.set("token", responseData.token,{
//         expires,
//       })
//        cookies.set("email", responseData.email,{
//         expires,
//       })
//        cookies.set("username", responseData.username,{
//         expires,
//       })
//        cookies.set("password", responseData.password,{
//         expires,
//       })
//       console.log(responseData);
//     } catch (error) {
//       console.error('Error:', error);
//     }

//   };
//   return (
//     <div>
//       <h1>LOGIN TO YOUR ACCOUNT</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label>Email:</label>
//           <input type="email" {...register("email")} />
//           {errors.email && <p>{errors.email.message}</p>}
//         </div>
//           <div>
//           <label>User Name:</label>
//           <input type="text" {...register("username")} />
//           {errors.username && <p>{errors.username.message}</p>}
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" {...register("password")} />
//           {errors.password && <p>{errors.password.message}</p>}
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import Cookies from 'universal-cookie';

interface IFormInput {
  email: string;
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const cookies = new Cookies();
  const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);

    try {
      const response = await fetch('http://localhost:6969/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
      }

      const responseData = await response.json();
      const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);
      cookies.set('token', responseData.token, { expires });
      cookies.set('email', responseData.email, { expires });
      cookies.set('username', responseData.username, { expires });

      console.log(responseData);
    } catch (error) {
      console.error('Error:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div>
      <h1>Login to Your Account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email:</label>
          <input type="email" {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Username:</label>
          <input type="text" {...register('username')} />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" {...register('password')} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
