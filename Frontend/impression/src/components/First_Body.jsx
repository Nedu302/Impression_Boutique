import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProdCard';
import axios from "axios";
import { Link } from 'react-router-dom';



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

export default function BodyFirst() {
  const [EMBROIDERY, setSummerDresses] = useState([]);
  const [CHIFFON, setWinterDresses] = useState([]);
  const [kurti, setChiffonDresses] = useState([]);

  useEffect(() => {
    const getDresses = async () => {
      try {
        const res = await axios.get('impression-boutique.vercel.app/?categories=ambroidery,chiffon,rafiaData');
        const EMBROIDERY = res.data.filter(dress => dress.category === 'ambroidery');
        const CHIFFON = res.data.filter(dress => dress.category === 'chiffon');
        const kurti = res.data.filter(dress => dress.category === 'rafiaData');

        setSummerDresses(EMBROIDERY);
        setWinterDresses(CHIFFON);
        setChiffonDresses(kurti);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    getDresses();
  }, []);
  // console.log(EMBROIDERY);

  return (
    <>
      <div className="bg-white w-full p-8 z-10 flex items-center justify-around" style={{ height: '100%' }}>
        <div className="w-40 md:w-96">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: 'spring', stiffness: 20 },
              opacity: { duration: 1 },
              ease: 'easeIn',
              duration: 2,
            }}
            src="prev_feature_1.jpg"
            className="rounded-r-full"
            alt=""
          />
        </div>
        <div className="w-1/2 flex items-center">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: 'spring', stiffness: 60 },
              opacity: { duration: 1 },
              ease: 'easeIn',
              duration: 1,
            }}
            className="text-1xl md:text-4xl font-custom-serif text-center whitespace-normal">
            Impression Boutique is a haven for fashion enthusiasts who appreciate quality, style, and elegance.
          </motion.h2>
        </div>
      </div>

      <div className="border border-t-2 mb-10"></div>

      <h1 className="md:pl-20 pl-10 md:text-5xl text-3xl font-custom-serif">EMBROIDERY</h1>

      <div className="bg-white w-full md:p-8 z-10 lg:flex items-center justify-around">

        {EMBROIDERY.map((item) => (


          <motion.div
            initial={baseAnimation.initial}
            whileInView={baseAnimation.whileInView}
            transition={{ ...baseAnimation.transition, delay: 0.2 }}
            key={item._id}>
            <ProductCard  imgSrc={item.imgUrl} productName={item.productName} price={item.price} />
          </motion.div>
          
        ))}
        
      </div >

      <div className="flex justify-center pb-10 font-custom-serif text-white">
       
      </div>

      <div className="border border-t-2 mb-10"></div>
      <h1 className="md:pl-20 pl-10 md:text-5xl text-3xl font-custom-serif">CHIFFON</h1>
      <div className="bg-white w-full md:p-8 z-10 lg:flex items-center justify-around">
        {CHIFFON.map((item) => (
          <motion.div
            initial={baseAnimation.initial}
            whileInView={baseAnimation.whileInView}
            transition={{ ...baseAnimation.transition, delay: 0.2 }}
            key={item._id}>
            <ProductCard imgSrc={item.imgUrl} productName={item.productName} price={item.price} />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center pb-10 font-custom-serif text-white">
        
      </div>

      <div className="border border-t-2 mb-10"></div>
      <h1 className="md:pl-20 pl-10 md:text-5xl text-3xl font-custom-serif">Kurti</h1>
      <div className="bg-white w-full md:p-8 z-10 lg:flex items-center justify-around">
        {kurti.map((item) => (
          <motion.div
            initial={baseAnimation.initial}
            whileInView={baseAnimation.whileInView}
            transition={{ ...baseAnimation.transition, delay: 0.2 }}
            key={item._id}>
            <ProductCard imgSrc={item.imgUrl} productName={item.productName} price={item.price} />
          </motion.div>
        ))}
      </div>

      <div className="border border-t-2 mb-10"></div>

      <div className="About flex space-x-2 text-gray-500 h-1/2 flex-col justify-center items-center m-10 md:m-56 font-custom-serif text-center">
        <motion.h1
          initial={baseAnimation.initial}
          whileInView={baseAnimation.whileInView}
          transition={{ ...baseAnimation.transition, delay: 0.5 }}
          className="text-4xl pb-4">
          About Us
        </motion.h1>
        <motion.h2
          initial={baseAnimation.initial}
          whileInView={baseAnimation.whileInView}
          transition={{ ...baseAnimation.transition, delay: 0.2 }}
          className="md:text-lg flex texmd font-200">
          IMPRESSION BOUTIQUE- is a brand that has made its mark with its blend of classical and modern cuts, vibrant colors, eye-catching intricate details, dazzling embellishments, and luxurious premium-quality fabric! Shireen Lakdawala has emerged as your go-to brand, your savior for every occasion. With the wide variety of carefully curated collections of ensembles, IMPRESSION BOUTIQUE has a trick up her sleeve that leaves you looking effortlessly chic, and gorgeous and makes your style statement shine!
          The Pakistani traditional motifs and designs have always had a huge fan base around the globe. South Asian couture has a flair for dramatic details.
        </motion.h2>
      </div>
    </>
  );
}
