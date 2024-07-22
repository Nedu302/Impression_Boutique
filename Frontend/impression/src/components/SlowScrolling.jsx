import React, { useEffect, useRef } from 'react';
import './StylesBody.css'; 
import { motion } from 'framer-motion';

const SlowScrollImage = () => {
  const firstImageRef = useRef(null);
 
  const stand3Ref = useRef(null);
  
  const baseAnimation = {
    initial: { y: -100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: {
      y: { type: 'spring', stiffness: 60 },
      opacity: { duration: 1 },
      ease: 'easeIn',
      duration: 4,
    },
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const isMobile = window.innerWidth <= 1016;

    if (firstImageRef.current) {
      firstImageRef.current.style.transform = `translateX(${-scrollPosition / 2}px)`;
    }

    if (stand3Ref.current) {
      stand3Ref.current.style.transform = isMobile
        ? `translateX(${scrollPosition / 7}px)`
        : `translateX(${scrollPosition / 2}px)`;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div  className=" absolute z-20 top-80 md:top-20 ml-5  md:left-1/3  md:text-6xl  stroke-black font-font-bold">
        <p className='text-transparent-border text-4xl md:text-7xl '>IMPRESSION</p>
        <span className='text-red-600 text-xl md:text-5xl md:ml-28'> BOUTIQUE</span>
      </div>
      <div className="marquee-container flex min-w-[420px] md:w-full">
        <div className="marquee text-7xl md:text-9xl">
          <p>Curated Collections of Quality, Trendy Apparel Tailored For Your Everyday Style.</p>
        </div>
      </div>

      <div className="mt-20 md:flex bg-slate-300 w-full  min-w-[420px] md:w-full ">
       
          <div className=" lg:w-1/2  overflow-hidden">
            <motion.img
              ref={firstImageRef}
              initial={baseAnimation.initial}
              whileInView={baseAnimation.whileInView}
              transition={{ ...baseAnimation.transition, delay: 0.8 }}
              src="animationPic.png"
              className=" z-5 transition-transform object-shadow duration-500 ease-out"
              alt="Slow Scrolling Image"
              style={{ display: 'block', willChange: 'transform' }}
            />
          </div>
          <div className=" lg:w-1/2 relative overflow-hidden">
            <motion.img
               ref={stand3Ref}
              initial={baseAnimation.initial}
              whileInView={baseAnimation.whileInView}
              transition={{ ...baseAnimation.transition, delay: 0.8 }}
               src="standPic2.png"
              className=" z-5 transition-transform object-shadow duration-500 ease-out"
              alt="Slow Scrolling Image"
              style={{ display: 'block', willChange: 'transform' }}
            />
          </div>

         

      </div>

    </>
  );
};

export default SlowScrollImage;
