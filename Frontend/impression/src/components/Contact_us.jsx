import 'animate.css';
import React, { useEffect, useRef } from 'react';
import './StylesBody.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact_us() {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const { register, handleSubmit, formState: { errors },reset } = useForm();

  const onSubmit = async (data) => {
    const UserMessage = {
      name: data.name,
      email: data.email,
      message: data.message
    };

    try {
      const res = await axios.post("impression-boutique.vercel.app/components/Contact_us", UserMessage);
      console.log('Server response:', res);

      if ( res.data) {
        toast.success("Message sent successfully!");
        reset();
      } 
    } catch (err) {
      console.error('Error occurred:', err);
      toast.error(err.response.data.message);
    }
  };

  useEffect(() => {
    const options = {
      threshold: 0.5,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeIn');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (imageRef1.current) observer.observe(imageRef1.current);
    if (imageRef2.current) observer.observe(imageRef2.current);

    return () => {
      if (imageRef1.current) observer.unobserve(imageRef1.current);
      if (imageRef2.current) observer.unobserve(imageRef2.current);
    };
  }, []);

  return (
    <div className="bg-white pt-20">
      <ToastContainer />
      <div className="text-center font-custom-serif p-7">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Get In Touch
        </p>
        <p className="mt-4 max-w-2xl text-gray-500 lg:mx-auto text-md">
          We'd love to hear from you. Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 rounded-md lg:px-8 bg-gradient-to-r from-gray-200 to-gray-50 py-12 mb-20">
        <div className="mt-10">
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-1/2 p-14">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input type="text" {...register('name', { required: true })} name="name" id="name" className="block w-full h-14 px-4 py-2 sm:text-sm bg-transparent border border-sky-900 focus:outline-none" placeholder="Your Name" />
                  {errors.name && (<span className="error-message text-sm text-red-500">Name is required</span>)}
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input type="email" {...register('email', { required: true })} name="email" id="email" className="block w-full h-14 px-4 py-2 sm:text-sm bg-transparent border border-sky-900 focus:outline-none" placeholder="Your Email" />
                  {errors.email && (<span className="error-message text-sm text-red-500">Email is required</span>)}
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea name="message" {...register('message', { required: true })} id="message" rows="4" className="block w-full px-4 py-10 sm:text-sm bg-transparent border border-sky-900 focus:outline-none" placeholder="Your Message"></textarea>
                  {errors.message && (<span className="error-message text-sm text-red-500">Message is required</span>)}
                </div>
                <div>
                  <button type="submit" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium shadow-sm text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-slate-600">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="md:w-1/2 md:bg-slate-600 rounded-md flex items-center justify-center relative">
              <img ref={imageRef1} src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zmxvd2VyfGVufDB8fDB8fHww" alt="Contact Us" className="w-1/2 h-auto opacity-0 rounded-md shadow-lg" />
              <img ref={imageRef2} src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?q=80&w=1619&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="New Image" className="md:w-1/2 w-2/6 h-3/4 rounded-md md:h-auto absolute top-7 md:top-8 left-8 shadow-lg opacity-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
