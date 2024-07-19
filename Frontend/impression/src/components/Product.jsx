import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
export default function Product(props) {
    return (
        <>
        
        <div className=" w-full md:w-1/1 h-full p-2 flex flex-col  items-center justify-center   rounded-md ">
        <div  className='flex h-full w-full flex-col items-center justify-center space-y-3'>

        <img src={`${props.img_link}`}  className=' rounded-md w-4/5 md:h-3/4 object-cover '  />
        <h1 className="pb-2 pt-4 text-base">{props.prodName}</h1>
        <div className='flex items-center w-full flex-col'>
          
            <Rating />
            <h1 className='text-xl text-red-600'>`Rs.{props.price}`</h1>
          
        </div>
        </div>
      </div>

        </>
    );
}