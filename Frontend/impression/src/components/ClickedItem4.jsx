import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function ClickedItem(props) {
    const [quantity, setQuantity] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='mt-36 flex flex-wrap justify-center text-xl font-custom-serif text-gray-400 mb-16'>
                <h1>Home / Shop / </h1>
                <span className='ml-1 text-gray-300'>I'm a Product</span>
            </div>
            <div className='Clicked_product w-full flex flex-wrap justify-center font-custom-serif'>
                <div className='w-full md:w-1/2 p-2 flex justify-center items-center'>
                    <img src={`${props.img_link}`} className='w-4/5 md:w-full h-auto object-cover' alt="Product" />
                </div>
                <div className="flex flex-col w-full md:w-1/3 items-start p-4 text-gray-700">
                    <h1 className='text-2xl w-full md:w-96'>{props.prodName}</h1>
                    <h2 className="text-xl mb-2 text-gray-300">SKU: 0001</h2>
                    <p className="text-xl mb-4 text-red-600">{props.price}</p>
                    <h1 className='text-xl'>Color</h1>
                    <div className="flex space-x-2 mb-4">
                        <span className="block w-6 h-6 bg-green-500 rounded-full"></span>
                        <span className="block w-6 h-6 bg-purple-500 rounded-full"></span>
                    </div>
                    <h1 className='text-xl'>Size</h1>
                    <select className="border border-gray-300 py-2 mb-4 w-full md:w-72 focus:outline-none h-14">
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                    <h1 className='text-xl'>Quantity</h1>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="border border-gray-300 w-24 px-4 py-2 mb-4 focus:outline-none"
                    />
                    <div className='flex flex-wrap flex-col w-full mt-5'>
                        <div className='flex w-full mb-1'>
                            <button className='bg-slate-500 hover:bg-slate-400 transition-all duration-500 ease-out text-white text-xl p-2 w-full md:w-80'>
                                Add to Cart
                            </button>
                            <div className='ml-1 bg-slate-500 text-white hover:bg-slate-400 transition-all duration-500 ease-out flex items-center justify-center text-3xl p-2 w-14'>
                                <CiHeart />
                            </div>
                        </div>
                        <button className='bg-slate-500 hover:bg-slate-400 transition-all duration-500 ease-out text-white text-xl p-2 mb-1 md:w-96'>
                            Buy Now
                        </button>
                    </div>
                    <div className='mt-5 flex-col cursor-pointer w-full text-xl'>
                        <div onClick={() => setIsOpen(!isOpen)} className='flex justify-between items-center md:w-96'>
                            <h3 className='font-semibold'>Detail</h3>
                            {isOpen ? <FaMinus /> : <FaPlus />}
                        </div>
                        <ul className={`transition-all duration-500 text-gray-300 ease-in md:w-96 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} space-y-0`}>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus delectus mollitia suscipit enim itaque explicabo repudiandae eligendi at ipsum praesentium dolore similique, commodi laudantium facilis nostrum. Dolorum in commodi pariatur.</p>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
