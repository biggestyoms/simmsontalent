"use client";
import React, { useEffect, useState, Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";

// Animation variants remain the same
const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

type AnimatedServiceCardProps = {
  title: string;
  description: string;
  link: string;
  delay?: number;
};

// AnimatedServiceCard component remains the same
const AnimatedServiceCard = ({
  title,
  description,
  link,
  delay = 0,
}: AnimatedServiceCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={slideUp}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
    >
      <h3 className="text-xl font-semibold mb-3 text-primarythree">{title}</h3>
      <p className="mb-4">{description}</p>
      <Link
        href={link}
        className="text-primarythree hover:underline inline-flex items-center group"
      >
        <span>Explore {title}</span>
        <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} className="ml-1">
          →
        </motion.span>
      </Link>
    </motion.div>
  );
};

// Create a new component to handle search params
const ServiceContentWithParams = () => {
  const searchParams = useSearchParams();
  const serviceType = searchParams?.get("type");
  const service = searchParams?.get("service");

  const [isLoading, setIsLoading] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [currentService, setCurrentService] = useState<string | null>(null);

  const contentRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef(null);
  const navRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true });
  const isNavInView = useInView(navRef, { once: true, amount: 0.3 });

  // Safe scroll function that works in browser only
  const safeScroll = (ref: React.RefObject<HTMLElement | null>, offset = 0) => {
    if (ref.current) {
      const offsetTop =
        ref.current.getBoundingClientRect().top + window.scrollY;
      const headerOffset =
        window.innerWidth < 768 ? 60 : window.innerHeight * 0.12;
      window.scrollTo({
        top: offsetTop - headerOffset - offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setIsLoading(true);

    if (serviceType && service) {
      setCurrentService(`${serviceType}-${service}`);
    }

    const delay = setTimeout(() => {
      setIsLoading(false);

      if (service && contentRef.current && hasInteracted) {
        safeScroll(contentRef);
      } else if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 300);

    return () => clearTimeout(delay);
  }, [serviceType, service, hasInteracted]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasInteracted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const renderServicesNav = () => (
    <motion.div
      ref={navRef}
      initial="hidden"
      animate={isNavInView ? "visible" : "hidden"}
      variants={fadeIn}
      className="bg-gray-100 p-4 rounded-lg mb-8 shadow-sm hover:shadow-md transition-all"
    >
      <motion.h3 variants={slideUp} className="font-semibold mb-4 text-lg">
        Our Services
      </motion.h3>

      <motion.div variants={staggerContainer} className="mb-4">
        <motion.h4
          variants={slideUp}
          className="font-medium text-primarythree mb-2"
        >
          For Students
        </motion.h4>
        <motion.ul variants={staggerContainer} className="space-y-2 ml-4">
          {[
            {
              name: "Career Consultation",
              path: "/services?type=student&service=career-consultation",
            },
            {
              name: "Career Assessments",
              path: "/services?type=student&service=career-assessments",
            },
            {
              name: "Resume Writing",
              path: "/services?type=student&service=resume-writing",
            },
            {
              name: "Interview Preparation",
              path: "/services?type=student&service=interview-preparation",
            },
            {
              name: "Job Searching",
              path: "/services?type=student&service=job-searching",
            },
            {
              name: "Job Placement",
              path: "/services?type=student&service=job-placement",
            },
          ].map((item, index) => (
            <motion.li key={index} variants={slideUp}>
              <Link
                href={item.path}
                onClick={() => setHasInteracted(true)}
                className={`hover:text-primarythree transition-colors ${
                  service === item.path.split("service=")[1] &&
                  serviceType === "student"
                    ? "text-primarythree font-medium"
                    : ""
                }`}
              >
                <motion.span
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="inline-block"
                >
                  {item.name}
                </motion.span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.div variants={staggerContainer}>
        <motion.h4
          variants={slideUp}
          className="font-medium text-primarythree mb-2"
        >
          For Businesses
        </motion.h4>
        <motion.ul variants={staggerContainer} className="space-y-2 ml-4">
          {[
            {
              name: "Event Planning & Management",
              path: "/services?type=business&service=event-planning",
            },
            {
              name: "Project Planning & Management",
              path: "/services?type=business&service=project-planning",
            },
            {
              name: "Recruitment Planning & Consultation",
              path: "/services?type=business&service=recruitment-planning",
            },
            {
              name: "Job Creation & Consultation",
              path: "/services?type=business&service=job-creation",
            },
          ].map((item, index) => (
            <motion.li key={index} variants={slideUp}>
              <Link
                href={item.path}
                onClick={() => setHasInteracted(true)}
                className={`hover:text-primarythree transition-colors ${
                  service === item.path.split("service=")[1] &&
                  serviceType === "business"
                    ? "text-primarythree font-medium"
                    : ""
                }`}
              >
                <motion.span
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="inline-block"
                >
                  {item.name}
                </motion.span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );

  const renderServiceContent = () => {
    // The content rendering logic remains the same
    if (!serviceType || !service) {
      return (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center py-12"
        >
          <motion.h2 variants={slideUp} className="text-3xl font-bold mb-6">
            Our Professional Services
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="text-lg max-w-2xl mx-auto mb-8"
          >
            At Simms on Talent, we offer a comprehensive range of services
            designed to help both students and businesses succeed. Please select
            a specific service from the menu to learn more.
          </motion.p>
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <AnimatedServiceCard
              title="For Students"
              description="We provide career guidance, resume assistance, and job placement services to help students transition into successful professionals."
              link="/services?type=student&service=career-consultation"
            />
            <AnimatedServiceCard
              title="For Businesses"
              description="We offer event management, project planning, and recruitment services to help businesses optimize their operations and talent acquisition."
              link="/services?type=business&service=recruitment-planning"
            />
          </motion.div>
        </motion.div>
      );
    }

    // Student Services Content
    if (serviceType === "student") {
      switch (service) {
        case "career-consultation":
          return (
            <motion.div
              key="career-consultation"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeIn}
            >
              <motion.h1 variants={slideUp} className="text-3xl font-bold mb-6">
                Career Consultation
              </motion.h1>
              <motion.p variants={slideUp} className="mb-4">
                Our career consultation services provide personalized guidance
                to help students identify their strengths, interests, and
                potential career paths. Through one-on-one sessions with our
                experienced career counselors, students gain clarity on their
                professional goals and develop actionable plans to achieve them.
              </motion.p>
              <motion.h2
                variants={slideUp}
                className="text-xl font-semibold mt-6 mb-3"
              >
                What We Offer:
              </motion.h2>
              <motion.ul
                variants={staggerContainer}
                className="list-disc ml-6 mb-6"
              >
                {[
                  "Personalized career path exploration",
                  "Skills and interests assessment",
                  "Industry insights and market trends",
                  "Academic program alignment with career goals",
                  "Long-term career planning strategies",
                ].map((item, index) => (
                  <motion.li key={index} variants={slideUp} className="mb-2">
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.a href="tel:+14165229579" className="block">
                <motion.button
                  variants={slideUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primarythree text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition mt-4"
                >
                  Book a Consultation
                </motion.button>
              </motion.a>
            </motion.div>
          );
        case "career-assessments":
          return (
            <motion.div
              key="career-assessments"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeIn}
            >
              <motion.h1 variants={slideUp} className="text-3xl font-bold mb-6">
                Career Assessments
              </motion.h1>
              <motion.p variants={slideUp} className="mb-4">
                Our comprehensive career assessment tools help students identify
                their aptitudes, interests, values, and personality traits to
                discover suitable career options. These scientifically validated
                assessments provide valuable insights that inform educational
                and career decisions.
              </motion.p>
              <motion.h2
                variants={slideUp}
                className="text-xl font-semibold mt-6 mb-3"
              >
                Our Assessment Tools Include:
              </motion.h2>
              <motion.ul
                variants={staggerContainer}
                className="list-disc ml-6 mb-6"
              >
                {[
                  "Skills and aptitude evaluations",
                  "Personality type assessments",
                  "Work values inventory",
                  "Career interest profiling",
                  "Detailed results interpretation and guidance",
                ].map((item, index) => (
                  <motion.li key={index} variants={slideUp} className="mb-2">
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.a href="tel:+14165229579" className="block">
                <motion.button
                  variants={slideUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primarythree text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition mt-4"
                >
                  Book a Consultation
                </motion.button>
              </motion.a>
            </motion.div>
          );
        case "resume-writing":
          return (
            <motion.div
              key="resume-writing"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeIn}
            >
              <motion.h1 variants={slideUp} className="text-3xl font-bold mb-6">
                Resume Writing
              </motion.h1>
              <motion.p variants={slideUp} className="mb-4">
                Our professional resume writing service helps students create
                compelling resumes that stand out to employers. We work with you
                to highlight your unique skills, experiences, and achievements
                in a format that catches attention and increases your chances of
                landing interviews.
              </motion.p>
              <motion.h2
                variants={slideUp}
                className="text-xl font-semibold mt-6 mb-3"
              >
                Our Resume Services Include:
              </motion.h2>
              <motion.ul
                variants={staggerContainer}
                className="list-disc ml-6 mb-6"
              >
                {[
                  "Professional resume writing and formatting",
                  "Achievement-focused content development",
                  "Industry-specific keyword optimization",
                  "ATS (Applicant Tracking System) compatibility",
                  "Cover letter creation and customization",
                ].map((item, index) => (
                  <motion.li key={index} variants={slideUp} className="mb-2">
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.a href="tel:+14165229579" className="block">
                <motion.button
                  variants={slideUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primarythree text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition mt-4"
                >
                  Book a Consultation
                </motion.button>
              </motion.a>
            </motion.div>
          );
        case "interview-preparation":
          return (
            <motion.div
              key="interview-preparation"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeIn}
            >
              <motion.h1 variants={slideUp} className="text-3xl font-bold mb-6">
                Interview Preparation
              </motion.h1>
              <motion.p variants={slideUp} className="mb-4">
                Our interview preparation service equips students with the
                skills and confidence needed to excel in job interviews. Through
                mock interviews, personalized feedback, and strategic coaching,
                we help you make a strong impression and effectively communicate
                your value to potential employers.
              </motion.p>
              <motion.h2
                variants={slideUp}
                className="text-xl font-semibold mt-6 mb-3"
              >
                Our Interview Prep Includes:
              </motion.h2>
              <motion.ul
                variants={staggerContainer}
                className="list-disc ml-6 mb-6"
              >
                {[
                  "Mock interview sessions with industry specialists",
                  "Common and challenging question preparation",
                  "Behavioral interview techniques",
                  "Non-verbal communication coaching",
                  "Post-interview follow-up strategies",
                ].map((item, index) => (
                  <motion.li key={index} variants={slideUp} className="mb-2">
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.a href="tel:+14165229579" className="block">
                <motion.button
                  variants={slideUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primarythree text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition mt-4"
                >
                  Book a Consultation
                </motion.button>
              </motion.a>
            </motion.div>
          );
        case "job-searching":
          return (
            <motion.div
              key="job-searching"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeIn}
            >
              <motion.h1 variants={slideUp} className="text-3xl font-bold mb-6">
                Job Searching
              </motion.h1>
              <motion.p variants={slideUp} className="mb-4">
                Our job search assistance helps students navigate the complex
                job market efficiently. We provide access to exclusive job
                listings, networking opportunities, and strategies to identify
                and pursue positions that align with your career goals and
                qualifications.
              </motion.p>
              <motion.h2
                variants={slideUp}
                className="text-xl font-semibold mt-6 mb-3"
              >
                Our Job Search Support Includes:
              </motion.h2>
              <motion.ul
                variants={staggerContainer}
                className="list-disc ml-6 mb-6"
              >
                {[
                  "Job market research and industry insights",
                  "Access to our exclusive job database",
                  "Application strategy development",
                  "Networking event opportunities",
                  "Social media and LinkedIn optimization",
                ].map((item, index) => (
                  <motion.li key={index} variants={slideUp} className="mb-2">
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.a href="tel:+14165229579" className="block">
                <motion.button
                  variants={slideUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primarythree text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition mt-4"
                >
                  Book a Consultation
                </motion.button>
              </motion.a>
            </motion.div>
          );
        case "job-placement":
          return (
            <motion.div
              key="job-placement"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeIn}
            >
              <motion.h1 variants={slideUp} className="text-3xl font-bold mb-6">
                Job Placement
              </motion.h1>
              <motion.p variants={slideUp} className="mb-4">
                Our job placement service connects qualified students with
                appropriate employment opportunities. We leverage our extensive
                network of employer relationships to help you secure positions
                that match your skills, experience, and career aspirations.
              </motion.p>
              <motion.h2
                variants={slideUp}
                className="text-xl font-semibold mt-6 mb-3"
              >
                Our Placement Services Include:
              </motion.h2>
              <motion.ul
                variants={staggerContainer}
                className="list-disc ml-6 mb-6"
              >
                {[
                  "Personalized job matching",
                  "Direct employer introductions",
                  "Interview arrangement and coordination",
                  "Offer negotiation assistance",
                  "Post-placement support and coaching",
                ].map((item, index) => (
                  <motion.li key={index} variants={slideUp} className="mb-2">
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.a href="tel:+14165229579" className="block">
                <motion.button
                  variants={slideUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primarythree text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition mt-4"
                >
                  Book a Consultation
                </motion.button>
              </motion.a>
            </motion.div>
          );
        default:
          return (
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <motion.div variants={slideUp}>
                Please select a specific service
              </motion.div>
            </motion.div>
          );
     
      }
    }

    // Business Services Content
    if (serviceType === "business") {
      switch (service) {
             case 'event-planning':
               return (
                 <motion.div
                   key="event-planning"
                   initial="hidden"
                   animate="visible"
                   exit="exit"
                   variants={fadeIn}
                 >
                   <motion.h1 variants={slideUp} className="text-3xl font-bold mb-6">Event Planning & Management</motion.h1>
                   <motion.p variants={slideUp} className="mb-4">Our comprehensive event planning and management services help businesses organize and execute successful professional events. From corporate gatherings and conferences to recruitment fairs and networking sessions, we handle all aspects of event coordination to ensure a smooth and impactful experience.</motion.p>
                   <motion.h2 variants={slideUp} className="text-xl font-semibold mt-6 mb-3">Our Event Services Include:</motion.h2>
                   <motion.ul variants={staggerContainer} className="list-disc ml-6 mb-6">
                     {[
                       "Strategic event conceptualization and planning",
                       "Venue selection and logistics coordination",
                       "Speaker and participant management",
                       "Marketing and promotion strategies",
                       "On-site coordination and post-event evaluation"
                     ].map((item, index) => (
                       <motion.li key={index} variants={slideUp} className="mb-2">{item}</motion.li>
                     ))}
                   </motion.ul>
                   <motion.a href="tel:+14165229579" className="block">
       <motion.button
         variants={slideUp}
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
         className="bg-primarythree text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition mt-4"
       >
         Plan a event
       </motion.button>
     </motion.a>
                 </motion.div>
               );
             case 'project-planning':
               return (
                 <motion.div
                   key="project-planning"
                   initial="hidden"
                   animate="visible"
                   exit="exit"
                   variants={fadeIn}
                 >
                   <motion.h1 variants={slideUp} className="text-3xl font-bold mb-6">Project Planning & Management</motion.h1>
                   <motion.p variants={slideUp} className="mb-4">Our project planning and management services help businesses efficiently organize, execute, and complete important initiatives. We provide structured methodologies and expert guidance to ensure your projects are delivered on time, within budget, and with the desired outcomes.</motion.p>
                   <motion.h2 variants={slideUp} className="text-xl font-semibold mt-6 mb-3">Our Project Management Services Include:</motion.h2>
                   <motion.ul variants={staggerContainer} className="list-disc ml-6 mb-6">
                     {[
                       "Project scope definition and planning",
                       "Resource allocation and scheduling",
                       "Risk assessment and mitigation strategies",
                       "Progress tracking and reporting",
                       "Quality assurance and stakeholder management"
                     ].map((item, index) => (
                       <motion.li key={index} variants={slideUp} className="mb-2">{item}</motion.li>
                     ))}
                   </motion.ul>
                   <motion.a href="tel:+14165229579" className="block">
       <motion.button
         variants={slideUp}
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
         className="bg-primarythree text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition mt-4"
       >
         Book a Consultation
       </motion.button>
     </motion.a>
                 </motion.div>
               );
             case 'recruitment-planning':
               return (
                 <motion.div
                   key="recruitment-planning"
                   initial="hidden"
                   animate="visible"
                   exit="exit"
                   variants={fadeIn}
                 >
                   <motion.h1 variants={slideUp} className="text-3xl font-bold mb-6">Recruitment Planning & Consultation</motion.h1>
                   <motion.p variants={slideUp} className="mb-4">Our recruitment planning and consultation services help businesses develop effective talent acquisition strategies. We work with you to identify staffing needs, create recruitment plans, and implement efficient hiring processes to attract and retain top talent.</motion.p>
                   <motion.h2 variants={slideUp} className="text-xl font-semibold mt-6 mb-3">Our Recruitment Services Include:</motion.h2>
                   <motion.ul variants={staggerContainer} className="list-disc ml-6 mb-6">
                     {[
                       "Workforce needs assessment and planning",
                       "Recruitment process optimization",
                       "Job description development",
                       "Candidate sourcing and screening strategies",
                       "Employer branding and talent attraction"
                     ].map((item, index) => (
                       <motion.li key={index} variants={slideUp} className="mb-2">{item}</motion.li>
                     ))}
                   </motion.ul>
                   <motion.a href="tel:+14165229579" className="block">
       <motion.button
         variants={slideUp}
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
         className="bg-primarythree text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition mt-4"
       >
         Book a Consultation
       </motion.button>
     </motion.a>
                 </motion.div>
               );
             case 'job-creation':
               return (
                 <motion.div
                   key="job-creation"
                   initial="hidden"
                   animate="visible"
                   exit="exit"
                   variants={fadeIn}
                 >
                   <motion.h1 variants={slideUp} className="text-3xl font-bold mb-6">Job Creation & Consultation</motion.h1>
                   <motion.p variants={slideUp} className="mb-4">Our job creation and consultation services help businesses design effective roles and organizational structures. We provide insights on job market trends, compensation benchmarks, and role optimization to help you create positions that attract qualified candidates and contribute to your business objectives.</motion.p>
                   <motion.h2 variants={slideUp} className="text-xl font-semibold mt-6 mb-3">Our Job Creation Services Include:</motion.h2>
                   <motion.ul variants={staggerContainer} className="list-disc ml-6 mb-6">
                     {[
                       "Organizational structure assessment",
                       "Role design and job description development",
                       "Competitive compensation planning",
                       "Skills gap analysis and workforce planning",
                       "Career path and advancement structure design"
                     ].map((item, index) => (
                       <motion.li key={index} variants={slideUp} className="mb-2">{item}</motion.li>
                     ))}
                   </motion.ul>
                   <motion.a href="tel:+14165229579" className="block">
       <motion.button
         variants={slideUp}
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
         className="bg-primarythree text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition mt-4"
       >
         Start Creating jobs
       </motion.button>
     </motion.a>
                 </motion.div>
               );
             default:
               return (
                 <motion.div
                   initial="hidden"
                   animate="visible"
                   variants={fadeIn}
                 >
                   <motion.div variants={slideUp}>Please select a specific business service</motion.div>
                 </motion.div>
               );
           }
    }

    return (
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <motion.div variants={slideUp}>
          Please select a service type and specific service
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div ref={contentRef} className="container mx-auto px-4 py-[12dvh]">
      <motion.div
        ref={headerRef}
        initial="hidden"
        animate={isHeaderInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="mb-8 text-center"
      >
        <motion.h1
          variants={slideUp}
          className="text-4xl md:text-5xl font-bold mb-4 text-primarythree"
        >
          Our Services
        </motion.h1>
        <motion.p variants={slideUp} className="text-lg max-w-2xl mx-auto">
          Comprehensive support for both students and businesses to achieve
          their professional goals.
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-1">{renderServicesNav()}</div>
        <div className="md:col-span-3">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-center items-center h-64"
              >
                <div className="animate-pulse flex space-x-2">
                  <div className="w-3 h-3 bg-primarythree rounded-full"></div>
                  <div className="w-3 h-3 bg-primarythree rounded-full"></div>
                  <div className="w-3 h-3 bg-primarythree rounded-full"></div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={currentService || "default"}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                {renderServiceContent()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

// Main component that uses Suspense
function ServicesContent() {
  return (
    <Suspense fallback={<div>Loading services...</div>}>
      <ServiceContentWithParams />
    </Suspense>
  );
}

export default ServicesContent;
