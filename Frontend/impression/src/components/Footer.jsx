import React from 'react'
import { Link } from 'react-router-dom'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";


export default function fotter() {
  return (
  <div className=" font-custom-serif bg-slate-200 text-gray-500 z-300  flex flex-col items-center justify-evenly text-lg pt-20 pb-2">
    <div className='fContent flex flex-col items-center mb-14'>
      <span className=' text-3xl pb-4'>Stay Comfy</span>
      <h3>Subscribe for Updates & Special Offers</h3>
    </div>

    <div className='sContent w-72 md:w-96  flex flex-wrap justify-between items-center text-xl mb-20'>
      <input className=' border-b-2 rounded-none border-gray-500  focus:outline-none  bg-transparent  text-gray-500' type="email" name="" aria-label='Email' placeholder="Email" id="" />
      <Link to="/" htmlFor="Email">Subscribe</Link> 
    </div >
        
    <div className='tContent w-full flex  flex-wrap items-start md:justify-center mb-20'>

      <div className='flex space-y-1 flex-col w-24 m-10 '>
        <Link to="/">Home</Link>
        <Link to="/components/ShopProd" >Shop</Link>
        <Link to={"/components/Contact_us"}>Contact</Link>
      </div>
      <div className='flex space-y-1 flex-col w-24 m-10'>
        <Link>LookBook</Link>
        <Link>Our Story</Link>
        <Link>FAQ</Link>
      </div>
      <div className='flex space-y-1 flex-col w-24 m-10'>
        <Link>Store Policy</Link>
        <Link>Shipping & Returns</Link>
      </div>    
      <div className='flex space-y-4 flex-col w-24 m-10'>
        <Link><CiFacebook /></Link>
        <Link><FaInstagram /></Link>
        <Link><CiYoutube /></Link>
      </div>
    </div>
    <div className=' text-lg mb-3'>
      <h1>© impression.pk</h1>

      </div>
      
    </div>
  )
}
