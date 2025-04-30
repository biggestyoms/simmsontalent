'use client'
import Link from "next/link";
import React , {useState}  from "react";
import { images } from "@/constants/image";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { Divide as Hamburger } from 'hamburger-react'
// import { useEffect } from "react";




const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.classList.add("no-scroll");
  //   } else {
  //     document.body.classList.remove("no-scroll");
  //   }
  // }, [isOpen]);

  return (
    <>
    {/* responsive nav bar */}
    {isOpen && (
  <div
    className="fixed inset-0 bg-opacity-40 z-40"
    onClick={() => setIsOpen(false)}
  ></div>
)}
    <div
        className={`fixed top-1/2 left-1/2 z-50 w-full h-full mt-[9dvh] bg-primarythree p-8 transform -translate-x-1/2 -translate-y-1/2  transition-all duration-500 ease-in-out ${
    isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-center items-center  w-full gap-2 text-white h-full ">
     
          <Link href="/" onClick={() => setIsOpen(false)} className="text-[40px] font-[700] ">
            HOME
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-[40px] font-[700] ">
            ABOUT
          </Link>
          <Link href="/services" onClick={() => setIsOpen(false)}className="text-[40px] font-[700] ">
            SERVICES
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-[40px] font-[700] ">
            CONTACT
          </Link>
        </div>
      </div>

    <div className="h-[9dvh] w-full flex items-center justify-center fixed z-50 backdrop-blur-lg shadow-md">
      <div className="w-[95%] h-[5dvh] flex items-center justify-between">
        <div className="flex items-center lg:hidden justify-start   md:w-[27%] w-[26%] h-full ">
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={25} />
        </div>
        <div className="lg:flex items-center justify-around hidden md:w-[27%] w-[33%] h-full ">
          <Link
            href="/"
            className="hover:text-primary text-[16px] leading-[24px] font-[600]"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-primary text-[16px] leading-[24px] font-[600]"
          >
            About
          </Link>
          <div className="relative group">
            {/* Services Button */}
            <Link
              href="/services"
              className="flex items-center justify-center gap-2 hover:text-primary text-[16px] leading-[24px] font-[600]"
            >
              Services <IoIosArrowDown />
            </Link>

            {/* Dropdown Menu (It Stays Open When Hovered) */}
            <div
              className="absolute w-[200px] bg-white shadow-lg rounded-md left-0 mt-2 opacity-0 invisible translate-y-4 
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
                  transition-all duration-300 rounded-lg p-2"
            >
              <p className="w-full text-start bg-gray-300 p-3 rounded-md">
                Students
              </p>
              <Link
                href="/services?type=student&service=career-consultation"
                className="block px-4 py-2 text-gray-700 hover:text-primary rounded-md"
              >
                Career Consultation
              </Link>
              <Link
                href="/services?type=student&service=career-assessments"
                className="block px-4 py-2 text-gray-700 hover:text-primary rounded-md"
              >
                Career Assessments
              </Link>
              <Link
                href="/services?type=student&service=resume-writing"
                className="block px-4 py-2 text-gray-700 hover:text-primary rounded-md"
              >
                Resume Writing
              </Link>
              <Link
                href="/services?type=student&service=interview-preparation"
                className="block px-4 py-2 text-gray-700 hover:text-primary rounded-md"
              >
                Interview Preparation
              </Link>
              <Link
                href="/services?type=student&service=job-searching"
                className="block px-4 py-2 text-gray-700 hover:text-primary rounded-md"
              >
                Job Searching
              </Link>
              <Link
                href="/services?type=student&service=job-placement"
                className="block px-4 py-2 text-gray-700 hover:text-primary rounded-md"
              >
                Job Placement
              </Link>
              <p className="w-full text-start bg-gray-300 p-3 rounded-md">
                Businesses
              </p>
              <Link
                href="/services?type=business&service=event-planning"
                className="block px-4 py-2 text-gray-700 hover:text-primary rounded-md"
              >
                Event Planning & Management
              </Link>
              <Link
                href="/services?type=business&service=project-planning"
                className="block px-4 py-2 text-gray-700 hover:text-primary rounded-md"
              >
                Project Planning & Management
              </Link>
              <Link
                href="/services?type=business&service=recruitment-planning"
                className="block px-4 py-2 text-gray-700 hover:text-primary rounded-md"
              >
                Recruitment Planning & Consultation
              </Link>
              <Link
                href="/services?type=business&service=job-creation"
                className="block px-4 py-2 text-gray-700 hover:text-primary rounded-md"
              >
                Job Creation & Consultation
              </Link>
            </div>
          </div>
        </div>

        <Link href="/" className="flex items-center justify-center md:w-[27%] w-[37%] h-full overflow-hidden">
          {/* <Image src={images.Logo} alt="Logo" className=" bg-cover w-[20%] " /> */}
          <p className="lg:text-[25px] text-[18px] ">
            {" "}
            <span className="font-[600] leading-[24px] text-primarythree">
              Simms
            </span>{" "}
            <span className="font-[300]">on</span>{" "}
            <span className="font-[300] ">talent</span>
          </p>
        </Link>

        <div className="flex items-center justify-end md:w-[27%] w-[29%] h-full">
          <Link
            href="/contact"
            className="bg-primarythree md:rounded-full text-white md:px-[15%] p-1 md:py-2 font-[600] md:text-[16px] text-[15px] md:leading-[24px] hover:bg-gray-300 hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Header;
