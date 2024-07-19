import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate(); 

  const onSubmit = async (data) => {
    
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:8000/components/SignUp", userInfo);
      if (res.data) {
        toast.success("Successfully created!");

        setTimeout(() => {
          navigate('/components/LogIn');
        }, 1000); 
        localStorage.setItem("Users", JSON.stringify(res.data.User));
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error(err.response.data.message);
      }
    }
  };

  return (
    <div className='pt-20 flex justify-center w-full font-custom-abc bg-slate-100'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center text-lg space-y-1 w-96 m-3'>
        <h1 className='text-3xl mt-16 mb-6'>Signup</h1>
        <button style={{ backgroundColor: '#3b5998', color: 'white' }} className='btn text-white p-2 w-full transition-all duration-500 ease-out hover:scale-105 text-lg'>Signup with Facebook</button>
        <button className='btn text-white bg-red-600 p-2 w-full hover:bg-red-500 transition-all duration-500 ease-out hover:scale-105'>Signup with Google</button>
        <button className='btn text-white bg-blue-400 p-2 w-full hover:bg-blue-300 transition-all duration-500 ease-out hover:scale-105'>Signup with Twitter</button>
        <div className='pt-6 w-full'>
          <label htmlFor="fullname" className=''>Full Name</label>
          <input id="fullname" type="text" {...register('fullname', { required: true })} className='bg-slate-100 mt-1 focus:outline-none rounded-none h-12 w-full p-2 border border-slate-400' />
          {errors.fullname && (<span className="error-message text-sm text-red-500">Name is required</span>)}
          <div className='pt-6'>
            <label htmlFor="email" className=''>Email</label>
            <input id='email' type="email" {...register('email', { required: true })} className='bg-slate-100 mt-1 focus:outline-none rounded-none h-12 w-full p-2 border border-slate-400' />
            {errors.email && (<span className="error-message text-sm text-red-500">Email is required</span>)}
          </div>
          <div className='pt-6'>
            <label htmlFor="password" >Password</label>
            <input id='password' type="password" {...register('password', { required: true })} className='bg-slate-100 mt-1 focus:outline-none rounded-none w-full h-12 border p-2 border-slate-400' />
            {errors.password && (<span className="error-message text-sm text-red-500">Password is required</span>)}
          </div>
        </div>
        <div className='flex justify-between pt-6 w-full items-center pb-28'>
          <button className='bg-slate-500 transition-all duration-500 ease-out hover:scale-105 text-white p-4 w-36' type="submit">
            SIGN UP
          </button>
          <Link to="/components/LogIn" className='text-slate-400 hover:text-red-800'>
            Already have an account?
          </Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
