import Image from "next/image";
import { images } from "@/constants/image";
import { icons } from "@/constants/icons";

export default function Home() {
  return (
    <div className=" h-full w-full pt-[9dvh]">
      {/* Hero Section */}
      <div className=" w-full h-[87dvh] bg-[#AEDADB] flex items-end justify-center ">
        <div className="w-[90%] h-[80dvh] flex items-end justify-center ">
          <div className="w-[45%]  h-[72dvh] items-start ">
            <div className="h-[50dvh] flex items-start flex-col justify-between">
              <p className="text-[65px] font-[700] leading-[77px] ">
                Virtual HR & Career Support
              </p>
              <p className="text-[45px] font-[700] leading-[58px] text-background">
                Helping Businesses Hire and Job Seekers Succeed
              </p>
              <p className="text-[19px] font-[500] leading-[29px]">
                Whether you're a small business looking for recruitment & HR
                support or a job seeker needing career coaching, I provide
                expert guidance to help you succeed.
              </p>
            </div>
          </div>

          <div className="w-[45%] h-[72dvh] flex items-end justify-end ">
            <div className=" w-[69%] h-[60dvh] overflow-hidden">
              <Image
                src={images.Hero}
                alt="Logo"
                className=" object-cover  w-full h-full "
                
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className=" w-full h-full flex items-center justify-center">
        <div className=" w-[90%] h-full grid gap-4 grid-rows-auto grid-cols-3  pt-4 pb-0  items-center justify-center">
          <div className=" h-[25dvh] bg-[#013558] flex items-center justify-center hover:bg-gray-400 font-[600] text-white text-[30px] leading-[48px]">
            Career Development
          </div>
          <div className=" h-[25dvh] bg-[#036BB0] flex items-center justify-center hover:bg-gray-400 font-[600] text-white text-[30px] leading-[48px]">
            Recruitment{" "}
          </div>
          <div className=" h-[25dvh] bg-[#013558] flex items-center justify-center hover:bg-gray-400 font-[600] text-white text-[30px] leading-[48px]">
            Project Management
          </div>
          <div className=" h-[25dvh]  bg-[#036BB0] flex items-center justify-center hover:bg-gray-400 font-[600] text-white text-[30px] leading-[48px]">
            Consultation{" "}
          </div>
          <div className=" h-[25dvh] bg-[#013558] flex items-center justify-center hover:bg-gray-400 font-[600] text-white text-[30px] leading-[48px]">
            Workforce Solutions
          </div>
          <div className=" h-[25dvh]  bg-[#036BB0] flex items-center justify-center hover:bg-gray-400 font-[600] text-white text-[30px] leading-[48px]">
            Business Growth
          </div>
        </div>
      </div>

      {/* Services Section */}

      <div className="w-full h-full flex flex-row pt-12 p-[5%] justify-between">
        <div className="w-[40%]   h-[100dvh] flex flex-col">
          <div className=" flex items-center justify-center w-full h-1/2 ">
            <Image
              src={icons.Cooperate}
              alt="icons"
              className=" w-[70%]  "
              color="#fffff"
            />
          </div>
          <div className=" flex items-center justify-center w-full h-1/2 ">
            <Image
              src={icons.Cooperate}
              alt="icons"
              className=" w-[70%]  "
              color="#fffff"
            />
          </div>
        </div>
        <div className="w-[56%] h-[115dvh] flex flex-col justify-start items-start text-black ">
  {/* Students & Graduates Section */}
  <div className="mb-12 ">
    <h2 className="text-[40px] font-[700] leading-[48px]">Career Support for Students & Graduates</h2>
    <p className="text-[16px] mt-4 leading-[24px]">
      Searching for the right job or launching your career can be overwhelming, but you don’t have to navigate it alone! 
      At <span className="font-bold">Simms on Talent</span>, we provide <span className="font-bold">career development</span> 
      support tailored to students and graduates, helping you stand out in the job market.
    </p>
    <ul className="mt-4 space-y-2">
      <li className="font-[700] text-[19px]">
        <span className="text-black">•</span> Career Consultation – Get expert guidance on your career path.
      </li>
      <li className="font-[700] text-[19px]">
        <span className="text-black">•</span> Resume Writing – Build a resume that showcases your skills and achievements.
      </li>
      <li className="font-[700] text-[19px]">
        <span className="text-black">•</span> Interview Preparation – Gain confidence with personalized coaching.
      </li>
      <li className="font-[700] text-[19px]">
        <span className="text-black">•</span> Job Searching & Placement – Connect with the right opportunities.
      </li>
    </ul>
    <p className="mt-4 italic font-semibold text-gray-700">
      Your future starts here! Let’s unlock new opportunities and position you for success.
    </p>
  </div>

  {/* Businesses Section */}
  <div>
    <h2 className="text-[40px] font-[700] leading-[48px]">Recruitment & Talent Solutions for Businesses</h2>
    <p className="text-[16px] mt-4 leading-[24px]">
      Hiring the right talent is essential for business success, but managing recruitment can be time-consuming. 
      At <span className="font-bold">Simms on Talent</span>, we offer <span className="font-bold">recruitment and HR solutions</span> 
      designed to help businesses grow with the right workforce.
    </p>
    <ul className="mt-4 space-y-2">
      <li className="font-[700] text-[19px]">
        <span className="text-black">•</span> Job Creation & Consultation – Build strong job roles that attract top talent.
      </li>
      <li className="font-[700] text-[19px]">
        <span className="text-black">•</span> Talent Sourcing – Find qualified professionals for your business needs.
      </li>
      <li className="font-[700] text-[19px]">
        <span className="text-black">•</span> Project & Event Planning – Organize and manage key business functions.
      </li>
    </ul>
    <p className="mt-4 italic font-semibold text-gray-700">
      We streamline hiring, optimize recruitment strategies, and ensure you have the right team to drive business growth.
    </p>
  </div>
</div>

      </div>

      
    </div>
  );
}
