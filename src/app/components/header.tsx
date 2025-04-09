import Link from "next/link";
import React from "react";
import { images } from "@/constants/image";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <div className="h-[9dvh] w-full flex items-center justify-center fixed z-50 backdrop-blur-lg shadow-md">
      <div className="w-[95%] h-[5dvh] flex items-center justify-between">
        <div className="flex items-center justify-around w-[27%] h-full ">
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
              <p className="w-full text-start bg-gray-300 p-3 rounded-md">Students</p>
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
              <p className="w-full text-start bg-gray-300 p-3 rounded-md">Businesses</p>
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

        <div className="flex items-center justify-center w-[27%] h-full overflow-hidden">
          {/* <Image src={images.Logo} alt="Logo" className=" bg-cover w-[20%] " /> */}
          <p className="text-[25px] ">
            {" "}
            <span className="font-[600] leading-[24px] text-primarythree">
              Simms
            </span>{" "}
            <span className="font-[300]">on</span>{" "}
            <span className="font-[300] ">talent</span>
          </p>
        </div>

        <div className="flex items-center justify-end w-[27%] h-full">
          <Link
            href="/contact"
            className="bg-primarythree rounded-full text-white px-[15%] py-2 font-[600] text-[16px] leading-[24px] hover:bg-gray-300 hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;