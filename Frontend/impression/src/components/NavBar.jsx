import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiDressThin } from 'react-icons/pi';
import { RiMenu4Fill } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import { motion } from 'framer-motion';

export default function Navbar() {
  const Links = [
    { name: 'Home', to: '/' },
    { name: 'Shop', to: '/components/ShopProd' },
    { name: 'Brands', to: '/components/Brands' },
    { name: 'Blog', to: '/components/Blog' },
    { name: 'Contact Us', to: '/components/Contact_us' },
  ];
  const baseAnimation = {
    initial: { x: 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: {
      x: { type: 'spring', stiffness: 60 },
      opacity: { duration: 2 },
      ease: 'easeIn',
      duration: 2,
    },
  };
  
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <motion.div  initial={baseAnimation.initial}
          whileInView={baseAnimation.whileInView}
          transition={{ ...baseAnimation.transition, delay: 0.8 }} className='fixed top-0 left-0 z-50 w-full'>
        <div className="md:px-10 py-4  px-7 bg-slate-500 font-abc md:flex  items-center md:justify-between text-white">
          <div className='flex font-font-bold  text-white items-center cursor-pointer'>
            <PiDressThin className='size-12 font-abc text-red-500' />
            <span  className='md:text-2xl text-xl'>Impression</span>
          </div>

          <div onClick={() => setisOpen(!isOpen)} className='text-4xl absolute top-6 right-8 md:hidden'>
            {isOpen ? <RxCross2 /> : <RiMenu4Fill />}
          </div>
          
          <ul className={` bg-slate-200 md:flex md:rounded-full pr-10 pb-20 md:pb-0 text-slate-600  pl-9 md:pl-0 cursor-pointer md:justify-center p-3 md:items-center absolute md:static md:z-auto z-[-1] left-0 md:w-max w-full transition-all duration-500 ease-out ${isOpen ? ' top-16' : 'top-[-490px]'}`}>
            {Links.map((link, index) => (
              <li key={index} className='my-5 pb-2  md:my-0 md:ml-8 transition-all duration-100 hover:scale-105'>
                <Link to={link.to}>
                  {link.name}
                </Link>
              </li>
            ))}
            
          </ul>
          
         
          <Link to={'/components/LogIn'}>
            <button className={`last:bg-slate-400 md:ml-28  p-2 mt-10 md:mt-0   rounded-full md:static hover:scale-110 ${isOpen ? ' top-72' : 'top-[-490px]'} absolute md:static md:z-auto z-[-1] left-5 w-40 md:w-32 transition-all duration-500 ease-out mt-16 md:mt-0`}>Log in</button>
            </Link>
        </div>
      </motion.div>
    </>
  );
}
