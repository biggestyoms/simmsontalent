import Image from "next/image";
import { images } from "@/constants/image";
import { icons } from "@/constants/icons";
import { CiCircleChevDown } from "react-icons/ci";

const ServiceCard = ({ title, bgColor }: { title: string; bgColor: string }) => (
  <div 
    className={`h-[25dvh] rounded-3xl shadow-lg ${bgColor} flex items-center justify-center hover:opacity-60 font-[600] text-white text-[30px] leading-[48px] transition-all`}
  >
    {title}
  </div>
);

const ServiceSection = ({ 
  title, 
  description, 
  items,
  highlight 
}: {
  title: string;
  description: string;
  items: string[];
  highlight: string;
}) => (
  <div className="mb-12">
    <h2 className="text-[40px] font-[700] leading-[48px]">{title}</h2>
    <p className="text-[16px] mt-4 leading-[24px]">
      {description}
    </p>
    <ul className="mt-4 space-y-2">
      {items.map((item, index) => (
        <li key={index} className="font-[700] text-[19px]">
          <span className="text-black">•</span> {item}
        </li>
      ))}
    </ul>
    <p className="mt-4 italic font-semibold text-gray-700">
      {highlight}
    </p>
  </div>
);

export default function Home() {
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
    "Job Searching & Placement – Connect with the right opportunities."
  ];

  const businessItems = [
    "Job Creation & Consultation – Build strong job roles that attract top talent.",
    "Talent Sourcing – Find qualified professionals for your business needs.",
    "Project & Event Planning – Organize and manage key business functions."
  ];

  return (
    <div className="h-full w-full pt-[9dvh] bg-white">
      {/* Hero Section */}
      <div className="w-full h-[87dvh] flex items-end justify-center">  
        <div className="w-[90%] h-[80dvh] flex items-center gap-5">
          <div className="w-[55%] h-[72dvh] items-start relative rounded-3xl">
            <div className="flex items-start flex-col justify-between">
              <p className="text-[55px] text-white font-[700] leading-tight bg-primarythree rounded-t-3xl p-4 pr-10 relative">
                Virtual HR <br /> & Career Support
                <span className="bg-primarythree absolute w-6 h-6 right-0 bottom-0 -mr-6"></span>
                <span className="bg-white absolute w-10 h-10 right-0 bottom-0 rounded-full -mr-10"></span>
              </p>
              <p className="text-[45px] font-[700] leading-[58px] text-background bg-primarythree pt-5 rounded-tr-3xl p-4 pr-10 relative">
                Helping Businesses Hire and Job Seekers Succeed
              </p>
              <p className="text-[16px] text-white font-[500] leading-[20px] bg-primarythree p-4 pb-16 pr-10 relative">
                Whether you're a small business looking for recruitment & HR
                support or a job seeker needing career coaching, I provide
                expert guidance to help you succeed.
                <span className="bg-primarythree absolute w-2 h-3 right-0 bottom-0 -mr-2"></span>
                <span className="bg-white absolute w-6 h-6 right-0 bottom-0 mb-[2px] rounded-full -mr-6"></span>
              </p>
            </div>

            <div className="absolute bottom-0 w-[90dvw] flex items-center gap-3">
              <div className="bg-primarythree w-[80dvw] rounded-tr-3xl rounded-br-3xl rounded-bl-3xl h-32"></div>
              <div className="bg-primarythree rounded-full w-32 h-32 flex items-center justify-center text-white">
              <CiCircleChevDown size={50}/>
              </div>
            </div>
          </div>

          <div className="w-[45%] h-[72dvh]">
            <div className="w-[69%] h-[53dvh] overflow-hidden rounded-3xl shadow-md">
              <Image
                src={images.Hero}
                alt="Logo"
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[90%] h-full grid gap-4 grid-rows-auto grid-cols-3 pt-4 pb-0 items-center justify-center">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} bgColor={service.bgColor} />
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full h-full flex flex-row pt-12 p-[5%] justify-between">
        <div className="w-[40%] h-[100dvh] flex flex-col">
          <div className="flex items-center justify-center w-full h-1/2">
            <Image
              src={icons.Cooperate}
              alt="Corporate icon"
              className="w-[70%]"
            />
          </div>
          <div className="flex items-center justify-center w-full h-1/2">
            <Image
              src={icons.Cooperate}
              alt="Corporate icon"
              className="w-[70%]"
            />
          </div>
        </div>
        
        <div className="w-[56%] h-[115dvh] flex flex-col justify-start items-start text-black">
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
          />
        </div>
      </div>
    </div>
  );
}