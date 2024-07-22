import React from 'react';
import './StylesBody.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import SignUp from './SignUp';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LogIn() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userInfo={
      email:data.email,
      password:data.password,
    };
     await axios.post("https://impression-boutique.vercel.app/components/LogIn",userInfo)
    .then((res)=>{
      if(res.data)
      {
        toast.success('LogIn successfully!');
      }
    })
    .catch((err)=>
    {
      if(err.response)
      {
          toast.error("Invalid credential!");

      }
      
    })



  };

  return (
    <div className='pt-20 flex justify-center w-full font-custom-abc bg-slate-100'>
      <form onSubmit={handleSubmit(onSubmit)} id='login' className='flex flex-col items-center justify-center text-lg space-y-1 w-96 m-3'>
        <h1 className='text-3xl mt-16 mb-6'>Login</h1>
        <button style={{ backgroundColor: '#3b5998', color: 'white' }} className='btn text-white p-2 w-full transition-all duration-500 ease-out hover:scale-105 text-lg'>Login with Facebook</button>
        <button className='btn text-white bg-red-600 p-2 w-full hover:bg-red-500 transition-all duration-500 ease-out hover:scale-105'>Login with Google</button>
        <button className='btn text-white bg-blue-400 p-2 w-full hover:bg-blue-300 transition-all duration-500 ease-out hover:scale-105'>Login with Twitter</button>
        <div className='pt-6 w-full'>
          <div className='mb-8'>
            <label htmlFor="email" className=''>Email</label>
            <input id='email' type="email" name="email" {...register('email', { required: 'Email is required' })} className='bg-slate-100  mt-1 focus:outline-none rounded-none h-12 w-full p-2 border border-slate-400' />
            <div>
              {errors.email && (<span className="error-message text-sm mb-6 text-red-500">{errors.email.message}</span>)}
            </div>
          </div>
          <div className='mb-8'>
            <label htmlFor="password" className=''>Password</label>
            <input id='password' type="password" name="password" {...register('password', { required: 'Password is required' })} className='bg-slate-100  mt-1 focus:outline-none rounded-none w-full h-12 border p-2 border-slate-400' />
            {errors.password && (<span className="error-message text-sm text-red-500">{errors.password.message}</span>)}

          </div>
        </div>
        <div className='flex justify-between w-full items-center pb-28'>
          <button className='bg-slate-500 transition-all duration-500 ease-out hover:scale-105 text-white p-4 w-36' type="submit">
            SIGN IN
          </button>
          <Link to="/components/SignUp" className='text-slate-400 hover:text-red-800'>
            Create account
          </Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
