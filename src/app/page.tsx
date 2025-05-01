'use client'
import Image from "next/image";
import { images } from "@/constants/image";
import { icons } from "@/constants/icons";
import { CiCircleChevDown } from "react-icons/ci";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.8,
      ease: "easeInOut" 
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Service Card Component with Animation
const ServiceCard = ({
  title,
  bgColor,
  delay = 0
}: {
  title: string;
  bgColor: string;
  delay?: number;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      custom={delay}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      className={`md:h-[25dvh] h-[10dvh] rounded-3xl shadow-lg ${bgColor} flex items-center justify-center hover:opacity-90 font-[600] text-white md:text-[30px] text-[20px] md:leading-[48px] leading-tight transition-all`}
    >
      {title}
    </motion.div>
  );
};

// Service Section Component with Animation
const ServiceSection = ({
  title,
  description,
  items,
  highlight,
  delay = 0
}: {
  title: string;
  description: string;
  items: string[];
  highlight: string;
  delay?: number;
}) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  return (
    <motion.div 
      ref={sectionRef}
      className="mb-12"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <motion.h2 
        variants={fadeInUp} 
        className="md:text-[40px] text-[40px] leading-tight font-[700] md:leading-[48px]"
      >
        {title}
      </motion.h2>
      
      <motion.p 
        variants={fadeInUp} 
        className="lg:text-[16px] text-[15px] mt-4 lg:leading-[24px]"
      >
        {description}
      </motion.p>
      
      <motion.ul 
        variants={staggerContainer} 
        className="mt-4 space-y-2"
      >
        {items.map((item, index) => (
          <motion.li 
            key={index}
            variants={fadeInUp}
            custom={index * 0.1}
            className="font-[700] lg:text-[19px]"
          >
            <span className="text-black">•</span> {item}
          </motion.li>
        ))}
      </motion.ul>
      
      <motion.p 
        variants={fadeIn}
        className="mt-4 italic font-semibold text-gray-700"
      >
        {highlight}
      </motion.p>
    </motion.div>
  );
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { title: "Career Development", bgColor: "bg-[#013558]" },
    { title: "Recruitment", bgColor: "bg-primarythree" },
    { title: "Project Management", bgColor: "bg-[#013558]" },
    { title: "Consultation", bgColor: "bg-primarythree" },
    { title: "Workforce Solutions", bgColor: "bg-[#013558]" },
    { title: "Business Growth", bgColor: "bg-primarythree" },
  ];

  const careerSupportItems = [
    "Career Consultation – Get expert guidance on your career path.",
    "Resume Writing – Build a resume that showcases your skills and achievements.",
    "Interview Preparation – Gain confidence with personalized coaching.",
    "Job Searching & Placement – Connect with the right opportunities.",
  ];

  const businessItems = [
    "Job Creation & Consultation – Build strong job roles that attract top talent.",
    "Talent Sourcing – Find qualified professionals for your business needs.",
    "Project & Event Planning – Organize and manage key business functions.",
  ];

  // References for intersection observer
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const servicesSectionRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isGridInView = useInView(gridRef, { once: true, amount: 0.2 });
  const isServicesSectionInView = useInView(servicesSectionRef, { once: true, amount: 0.1 });

  return (
    <div className="h-full w-full pt-[9dvh] bg-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.div 
        ref={heroRef}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="w-full lg:h-[90dvh] md:h-[120dvh] flex lg:items-end items-start justify-center"
      >
        <div className="lg:w-[90%] lg:h-[90dvh] h-full flex lg:flex-row flex-col items-center gap-5">
          <div className="lg:w-[60%] lg:h-[72dvh] md:h-[70dvh] h-[80dvh] items-start md:relative md:rounded-3xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex md:items-start h-full flex-col lg:justify-start justify-evenly bg-primarythree lg:bg-white pt-16 md:pt-0"
            >
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:text-[55px] md:text-[96px] text-center lg:text-start text-white font-[700] md:px-[6%] lg:leading-tight md:leading-[96px] bg-primarythree lg:rounded-t-3xl lg:p-4 lg:pr-10 lg:relative text-[3.5rem] leading-tight"
              >
                Virtual HR <br /> & Career Support
                <span className="bg-primarythree absolute lg:block hidden w-6 h-6 right-0 bottom-0 -mr-6"></span>
                <span className="bg-white absolute w-10 h-10 lg:block hidden right-0 bottom-0 rounded-full -mr-10"></span>
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="lg:text-[40px] md:text-[51px] text-[2rem] lg:text-start text-center px-[6%] lg:w-full font-[700] lg:leading-[58px] md:leading-[48px] leading-tight text-background bg-primarythree pt-5 lg:rounded-tr-3xl lg:p-4 lg:pr-10 lg:relative"
              >
                Helping Businesses Hire and Job Seekers Succeed
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="lg:text-[19px] md:px-[6%] lg:px-[2.3%] md:text-[19px] text-[1.1rem] lg:text-start text-center w-full text-white font-[500] md:leading-[20px] leading-tight bg-primarythree p-4 lg:pb-16 lg:pr-10 lg:relative"
              >
                Whether you're a small business looking for recruitment & HR
                support or a job seeker needing career coaching, I provide
                expert guidance to help you succeed.
                <span className="bg-primarythree lg:absolute w-2 h-3 right-0 bottom-0 -mr-2"></span>
                <span className="bg-white lg:absolute w-6 h-6 right-0 bottom-0 mb-[2px] rounded-full -mr-6"></span>
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="lg:absolute bottom-0 w-[90dvw] lg:flex hidden items-center gap-3"
              >
                <div className="bg-primarythree w-[80dvw] rounded-tr-3xl rounded-br-3xl rounded-bl-3xl h-30 flex items-center justify-center overflow-hidden">
                  <div className="animate-marquee items-center justify-center inline-block overflow-hidden">
                    <span className="text-[30px] font-semibold px-4 text-white text-center ">
                    Where Talent Meets Opportunity 
                    </span>
                  </div>
                </div>
                <motion.div 
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="bg-primarythree rounded-full w-32 h-32 flex items-center justify-center text-white"
                >
                  <CiCircleChevDown size={50} />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-[37%] w-[95%] lg:h-[72dvh] h-[40dvh]"
          >
            <div className="lg:w-[73.5%] w-full lg:h-[53dvh] h-full overflow-hidden rounded-3xl shadow-md">
              <motion.div
                animate={{
                  scale: scrollY > 100 ? 1.05 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={images.Hero}
                  alt="Logo"
                  className="object-cover w-full h-full"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Grid Section */}
      <motion.div 
        ref={gridRef}
        initial="hidden"
        animate={isGridInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="w-full h-full flex items-center justify-center pt-5 md:pt-0"
      >
        <motion.div 
          variants={staggerContainer}
          className="md:w-[90%] w-[98%] lg:h-[60dvh] md:h-[60dvh] text-center grid gap-4 grid-rows-auto md:grid-cols-3 grid-cols-2 pt-4 pb-0 items-center justify-center"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              bgColor={service.bgColor}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Services Section */}
      <motion.div 
        ref={servicesSectionRef}
        initial="hidden"
        animate={isServicesSectionInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="w-full h-full flex lg:flex-row flex-col-reverse pt-12 p-[5%] justify-between"
      >
        <div className="lg:w-[40%] lg:h-[140dvh] h-[18dvh] w-full flex lg:flex-col flex-row">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center w-full lg:h-[70dvh]"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src={icons.Cooperate}
                alt="Corporate icon"
                className="lg:w-[70%] md:w-[60%] w-[79%]"
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center w-full lg:h-[70dvh]"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src={icons.Cooperate}
                alt="Corporate icon"
                className="lg:w-[70%] md:w-[60%] w-[79%]"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={isServicesSectionInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:w-[56%] w-full lg:h-[140dvh] h-full flex flex-col justify-evenly items-start text-black"
        >
          <ServiceSection
            title="Career Support for Students & Graduates"
            description="Searching for the right job or launching your career can be overwhelming, but you don't have to navigate it alone! At Simms on Talent, we provide career development support tailored to students and graduates, helping you stand out in the job market."
            items={careerSupportItems}
            highlight="Your future starts here! Let's unlock new opportunities and position you for success."
          />

          <ServiceSection
            title="Recruitment & Talent Solutions for Businesses"
            description="Hiring the right talent is essential for business success, but managing recruitment can be time-consuming. At Simms on Talent, we offer recruitment and HR solutions designed to help businesses grow with the right workforce."
            items={businessItems}
            highlight="We streamline hiring, optimize recruitment strategies, and ensure you have the right team to drive business growth."
            delay={0.3}
          />
        </motion.div>
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
    </div>
  );
}