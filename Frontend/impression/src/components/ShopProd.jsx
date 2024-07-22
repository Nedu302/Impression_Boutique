import { Link } from 'react-router-dom';
import { FaPlus, FaMinus } from "react-icons/fa";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import ProductCard from './ProdCard';

const baseAnimation = {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: {
        y: { type: 'spring', stiffness: 60 },
        opacity: { duration: 1 },
        ease: 'easeIn',
        duration: 4,
    },
};

export default function ShopProd() {
    const [isOpenCategory, setIsOpenCategory] = useState(false);
    const [isOpenPrice, setIsOpenPrice] = useState(false);
    const [isOpenColor, setIsOpenColor] = useState(false);
    const [shopDress, setShopDress] = useState([]);
    const [filteredDress, setFilteredDress] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedPriceRange, setSelectedPriceRange] = useState([0, Infinity]);

    useEffect(() => {
        const getShopDress = async () => {
            try {
                const res = await axios.get('https://impression-boutique.vercel.app/?categories=ambroidery,chiffon,rafiaData,shopDress');
                console.log(res.data);
                setShopDress(res.data);
                setFilteredDress(res.data);
            } catch (error) {
                console.log("Error: ", error);
            }
        };
        getShopDress();
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        filterProducts(category, selectedPriceRange);
    };

    const handlePriceClick = (minPrice, maxPrice) => {
        setSelectedPriceRange([minPrice, maxPrice]);
        filterProducts(selectedCategory, [minPrice, maxPrice]);
    };

    const filterProducts = (category, priceRange) => {
        const [minPrice, maxPrice] = priceRange;
        let filtered = shopDress;

        if (category !== 'All') {
            filtered = filtered.filter(dress => dress.category === category);
        }

        filtered = filtered.filter(dress => dress.price >= minPrice && dress.price <= maxPrice);

        setFilteredDress(filtered);
    };

    return (
        <>
            <div className='min-h-screen'>
                <motion.div className='Collection_div mt-32 flex flex-col items-center font-custom-serif text-gray-400 mb-16'
                    initial={baseAnimation.initial}
                    whileInView={baseAnimation.whileInView}
                    transition={{ ...baseAnimation.transition, delay: 0.5 }}
                >
                    <span className='text-4xl mb-2'>Shop Our Collection</span>
                    <h1 className='w-1/2 text-center'>
                        Welcome to our exclusive collection, where style meets quality and every piece is crafted to perfection.
                        Discover a curated selection of the finest products designed to elevate your wardrobe and enhance your lifestyle.
                        Whether you're searching for timeless classics or the latest trends, our collection has something for everyone.
                    </h1>
                </motion.div>
                <div className='Main_div md:flex min-h-[500px] font-custom-serif'>
                    <motion.div className='Left_div justify-center p-10'
                        initial={baseAnimation.initial}
                        whileInView={baseAnimation.whileInView}
                        transition={{ ...baseAnimation.transition, delay: 0.2 }}
                    >
                        {/* Filter Section */}
                        <div className='pt-16 text-gray-400 text-lg md:w-60 space-y-4 space-x-7'>
                            <h2 className='font-semibold mb-4 text-2xl'>Filter by</h2>
                            <div className='border-b text-gray-400'></div>
                            <div className='mb-4 mt-3 flex-col cursor-pointer'>
                                <div onClick={() => setIsOpenCategory(!isOpenCategory)} className='flex justify-between items-center'>
                                    <h3 className='font-semibold'>Category</h3>
                                    {isOpenCategory ? <FaMinus /> : <FaPlus />}
                                </div>
                                <ul className={`transition-all duration-500 m-0.5 ease-in ${isOpenCategory ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 '} space-y-0`}>
                                    <li className='mt-2'><Link to="#" onClick={() => handleCategoryClick('All')}>All</Link></li>
                                    <li className='mt-2'><Link to="#" onClick={() => handleCategoryClick('ambroidery')}>Embroidery</Link></li>
                                    <li className='mt-2'><Link to="#" onClick={() => handleCategoryClick('chiffon')}>Chiffon</Link></li>
                                    <li className='mt-2'><Link to="#" onClick={() => handleCategoryClick('rafiaData')}>Kurti</Link></li>
                                    <li className='mt-2'><Link to="#" onClick={() => handleCategoryClick('shopDress')}>On Sale</Link></li>
                                </ul>
                            </div>
                            <div className='border-b text-gray-400'></div>
                            <div className='mb-4 mt-3 cursor-pointer flex-col'>
                                <div onClick={() => setIsOpenPrice(!isOpenPrice)} className='flex justify-between items-center'>
                                    <h3 className='font-semibold'>Price</h3>
                                    {isOpenPrice ? <FaMinus /> : <FaPlus />}
                                </div>
                                <ul className={`transition-all duration-500 m-0.5 ease-in ${isOpenPrice ? 'max-h-96 opacity-100' : 'max-h-0  opacity-0 '} space-y-0`}>
                                    <li className='mt-2'><Link to="#" onClick={() => handlePriceClick(0, 2000)}>Rs:0 - 2000</Link></li>
                                    <li className='mt-2'><Link to="#" onClick={() => handlePriceClick(2000, 4000)}>Rs:2000 - 4000</Link></li>
                                    <li className='mt-2'><Link to="#" onClick={() => handlePriceClick(4000, 6000)}>Rs:4000 - 6000</Link></li>
                                    <li className='mt-2'><Link to="#" onClick={() => handlePriceClick(6000, Infinity)}>Rs:6000+</Link></li>
                                </ul>
                            </div>
                            <div className='border-b text-gray-400'></div>
                            <div className='mb-4 cursor-pointer flex-col'>
                                <div onClick={() => setIsOpenColor(!isOpenColor)} className='flex justify-between items-center'>
                                    <h3 className='font-semibold'>Color</h3>
                                    {isOpenColor ? <FaMinus /> : <FaPlus />}
                                </div>
                                <ul className={`transition-all duration-500 m-0.5 ease-in ${isOpenColor ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} space-y-0`}>
                                    <li className='mt-2'><Link to="#">Red</Link></li>
                                    <li className='mt-2'><Link to="#">Blue</Link></li>
                                    <li className='mt-2'><Link to="#">Green</Link></li>
                                    <li className='mt-2'><Link to="#">Yellow</Link></li>
                                </ul>
                            </div>
                            <div className='border-b text-gray-400'></div>
                        </div>
                    </motion.div>
                    <div className="bg-white w-full md:p-8 z-10 flex-wrap lg:flex items-center justify-around">
                        {filteredDress.map((item) => (
                            <motion.div
                                className='w-1/3'
                                initial={baseAnimation.initial}
                                whileInView={baseAnimation.whileInView}
                                transition={{ ...baseAnimation.transition, delay: 0.2 }}
                                key={item._id}
                            >
                                <ProductCard imgSrc={item.imgUrl} productName={item.productName} price={item.price} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
