import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const baseAnimation = {
    initial: { y: 0, opacity: 0 },
    whileInView: { y: 100, opacity: 1 },
    transition: {
        y: { type: 'spring', stiffness: 60, duration: 1 }, // Adjust duration if needed
        opacity: { duration: 3 },
        ease: 'easeIn', // Apply ease globally or adjust as needed
    },
};

export default function Brands() {


    return (
        <>
            <div className=" bg-gradient-to-r from-slate-200 via-gray-50 to-slate-200">

            <motion.div className=' flex justify-center md:justify-start'
                initial={baseAnimation.initial}
                whileInView={baseAnimation.whileInView}
                transition={{ ...baseAnimation.transition, delay: 0.7 }}>
                <span data-v-b0ccb2e2="" className="font-inter md:m-20  font-semibold  text-dark text-4xl font-font-bold text-slate-500 font-custom-serif">All Brands</span>

            </motion.div>

            <motion.div className=' flex justify-center mt-10 pb-32   min-w-[420px] md:w-full'
                initial={baseAnimation.initial}
                whileInView={baseAnimation.whileInView}
                transition={{ ...baseAnimation.transition, delay: 0.5 }}
            >

                <div data-v-b0ccb2e2="" id="A" className="component--brand-list-body-brand-group   flex  text-slate-500  border-r  border-r-gray-400"> 
                    <ul data-v-b0ccb2e2="" className="brand-list">
                    <li data-v-b0ccb2e2="" className="flex w-full">
                    <div data-v-b0ccb2e2="" className="brand-initial-group-header-container">
                        <div data-v-b0ccb2e2="" className="brand-initial-group-header"></div>
                    </div>

                </li>
                    <li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/alee-malic" className="ml-10 flex w-full  pb-6">
                    <span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        ALEE MALIC
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/ar-apparel" className="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        AR Apparel
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/ay-textile" className="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        AY Textile
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/aabyaan" className="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Aabyaan
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/aahang" className="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Aahang
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/aangan" className="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in  hover:text-dark md:text-mediumGray">
                        Aangan
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/aasme-asma" className="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Aasme Asma
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/aayra" className="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Aayra
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/abaan-zohan" className="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Abaan Zohan
                    </span></Link></li>
                    <li data-v-b0ccb2e2="" className="flex w-full">
                        <Link data-v-b0ccb2e2="" to="/brands/abaya" className="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6">
                            <span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                                Abaya
                            </span>
                        </Link>
                    </li>
                    <li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/abbas-jamil-rajpoot" className="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Abbas Jamil Rajpoot
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/abdullah-amin" className="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Abdullah Amin
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/abeeha-mishcah" className="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Abeeha Mishcah
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/abeera-usman" className="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Abeera Usman
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/ace-attires" className="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Ace Attires
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/adans-libas" className="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Adan's Libas
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/addee" className="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Addee
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/adiba-a-chaudhary" className="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Adiba A. Chaudhary
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/afifa-iftikhar" className="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Afifa Iftikhar
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/afrozeh" className="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Afrozeh
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/afsaneh" className="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Afsaneh
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/agha-fabrics" className="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Agha Fabrics
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/agha-hassan" className="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Agha Hassan
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/agha-jaan" className="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Agha Jaan
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/aghaaz-casual-pret" className="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Aghaaz Casual Pret
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/ahmad-imran-clothing" className="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Ahmad Imran Clothing
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/ahmad-raza" className="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Ahmad Raza
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/ahmads" className="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Ahmad’s
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/ahsan-nazir" className="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Ahsan Nazir
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/aik-atelier" className="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Aik Atelier
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/ain" className="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Ain
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/ainee-faisal" className="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Ainee Faisal
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/aisha-farid" className="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Aisha Farid
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/aisha-fatema" className="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Aisha Fatema
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/aisling-by-nirmal" className="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Aisling By Nirmal
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/akasya" className="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Akasya
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/akbar-aslam" className="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Akbar Aslam
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/aks" className="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Aks
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/aksejahan" className="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Aks-e-Jahan
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/al-qaswa-kids" className="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Al Qaswa Kids
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/al-sami-creations" className="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Al Sami Creations
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/al-zohaib-textile" className="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Al Zohaib Textile
                    </span></Link></li><li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/alharir-apparel" className="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Al-Harir Apparel
                    </span></Link></li>
                    <li data-v-b0ccb2e2="" className="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/alazffum" className="ml-20 flex w-full border-l-0 gray-300 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" className="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Alazffum
                    </span></Link></li>

                </ul>
                </div>


                <div data-v-b0ccb2e2="" id="B" class="component--brand-list-body-brand-group text-gray-400">

                    <ul data-v-b0ccb2e2="" class="brand-list"><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/babynest-boutique" class="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Babynest Boutique
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/bachaa-party" class="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Bachaa Party
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/bag-x" class="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Bag X
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/bagerz" class="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Bagerz
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/bala-rosh" class="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Bala Rosh
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/bandana" class="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Bandana
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/banjara-gear" class="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Banjara Gear
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/bano-empire" class="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Bano Empire
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/bano-signature" class="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Bano Signature
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/barae-khanom" class="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Barae Khanom
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/bareen" class="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Bareen
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/bareeq-outfits" class="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Bareeq Outfits
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/bareera-and-kinza" class="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Bareera And Kinza
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/baroque" class="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Baroque
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/bata" class="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Bata
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/be-gull" class="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Be Gull
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/bebano" class="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Bebano
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/beechtree" class="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Beechtree
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/beehive-clothing" class="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Beehive Clothing
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/beingpink" class="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Beingpink
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/bella" class="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Bella
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/belle" class="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Belle
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/belleza" class="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Belleza
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/belva" class="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Belva
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/beri-and-coral" class="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Beri And Coral
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/bespoke" class="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Bespoke
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/bin-ilyas" class="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Bin Ilyas
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/bin-zakariya" class="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Bin Zakariya
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/bisma-akbar" class="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Bisma Akbar
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/black-camels" class="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Black Camels
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/blend" class="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Blend
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/bloon" class="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Bloon
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/body-brics" class="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Body Brics
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/bokitta" class="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Bokitta
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/bonacci-menswear" class="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Bonacci Menswear
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/borboleta-atelier" class="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Borboleta Atelier
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/brackets" class="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Brackets
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/brocade-by-hina-rabia" class="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Brocade By Hina Rabia
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/brooklyn-outfit" class="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Brooklyn Outfit
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/brumano" class="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Brumano
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/bunai" class="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Bunai
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/buraq-store" class="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Buraq Store
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/bustangi" class="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Bustangi
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/buzzazi" class="ml-20 flex w-full border-l-0 border-r-0 border-solid border-borderColor2 pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        Buzzazi
                    </span></Link></li><li data-v-b0ccb2e2="" class="flex w-full"><Link data-v-b0ccb2e2="" to="/brands/by-the-way" class="ml-10 flex w-full  pb-6"><span data-v-b0ccb2e2="" class="font-inter text-base font-normal leading-6 text-dark transition duration-100 ease-in hover:text-dark md:text-mediumGray">
                        By The Way
                    </span></Link></li></ul>
                </div>
            </motion.div>
            </div>

        </>
    )
}
