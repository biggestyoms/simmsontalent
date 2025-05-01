'use client'
import React, { useEffect, useState,  useRef } from 'react'
import Image from "next/image";
import { images } from "@/constants/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { CiCircleChevDown } from "react-icons/ci";

const AboutPage = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.7, 1, 0.9]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  const [scrollY, setScrollY] = useState(0);
    
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  

  return (
    <motion.div 
      ref={containerRef}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className='w-full h-full pt-[9dvh] pb-6'
    >
      <div className='w-full lg:h-[110dvh] h-[150dvh] text-black flex items-center justify-between lg:flex-row flex-col lg:px-[5%] px-[5%]'>
        <motion.div 
          ref={textRef}
          style={{ opacity: isTextInView ? 1 : 0 }}
          className='md:h-[100dvh] h-[90dvh] lg:h-[75dvh]  lg:w-[50%] w-full flex flex-col lg:items-start items-center justify-center md:p-8 p-4 rounded-lg shadow-lg'
        >
          <motion.p 
            variants={titleVariants}
            className='md:text-[40px] lg:text-[31px] text-[30px] font-[700] md:leading-[58px] leading-[34px] text-black md:mb-6 mb-4'
          >
            About Simms on talent
          </motion.p>
          
          <motion.div variants={textVariants}>
            <p className='md:text-[19px]  lg:h-[9dvh] text-[16px] font-[400] md:leading-[31px] leading-[26px] text-black'>
              I provide clients with CV writing and HR support services virtually (remotely).
            </p>
          </motion.div>
          
          <motion.div 
            variants={textVariants}
            custom={1}
            className="md:mt-6 mt-3"
          >
            <p className='md:text-[19px]   lg:h-[25dvh] text-[16px] font-[400] md:leading-[31px] leading-[26px] text-black'>
              Drawing on an extensive background in HR and recruitment, I have been providing professional CV writing, tailoring cover letters, and conducting interview preparation for clients across New Zealand and Australia. I have written hundreds of CVs and reviewed many more. I provide HR support to businesses with their recruitment and other people related tasks.
            </p>
          </motion.div>
          
          <motion.div 
            variants={textVariants}
            custom={2}
            className="md:mt-6 mt-3"
          >
            <p className='md:text-[19px]   lg:h-[9dvh] text-[16px] font-[400] md:leading-[31px] leading-[26px] text-black'>
              If you are interested to know more about the services or if you have any questions, please reach out.
            </p>
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-white text-black px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-primary transition-all"
          >
            Get in Touch
          </motion.button>
        </motion.div>
        
        <motion.div 
          ref={imageRef}
          variants={imageVariants}
          style={{ scale }}
          className='bg-blue-400 md:h-[70dvh] h-[50dvh] md:w-[45%] w-[98%] overflow-hidden flex items-center justify-center rounded-lg shadow-lg'
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full overflow-hidden"
          >
            <Image
              src={images.Hero}
              alt="Simms on Talent"
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Additional animated sections */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full py-16 bg-white"
      >
        <div className="max-w-6xl mx-auto px-5">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Our Expertise
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "CV Writing", desc: "Professional CV writing tailored to your career goals and industry." },
              { title: "HR Support", desc: "Comprehensive HR services to help businesses manage their workforce effectively." },
              { title: "Career Coaching", desc: "Personalized career guidance to help you navigate your professional journey." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 text-primarythree">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full py-16 bg-gray-50"
      >
        <div className="max-w-3xl mx-auto text-center px-5">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Take the Next Step?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 mb-8"
          >
            Whether you're looking to enhance your career or find the right talent for your business, we're here to help you succeed.
          </motion.p>
          
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#90e0ef" }}
            whileTap={{ scale: 0.95 }}
            className="bg-primarythree text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Schedule a Consultation
          </motion.button>
        </div>
      </motion.div>
         {/* Floating scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: scrollY > 100 ? 1 : 0,
                y: [0, 10, 0]
              }}
              transition={{ 
                opacity: { duration: 0.3 },
                y: { repeat: Infinity, duration: 1.5 }
              }}
              className="fixed bottom-8 right-8 p-4 bg-primarythree rounded-full shadow-lg cursor-pointer z-50"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <motion.div
                animate={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <CiCircleChevDown size={30} color="white" />
              </motion.div>
            </motion.div>
    </motion.div>
    
  )
}

export default AboutPage