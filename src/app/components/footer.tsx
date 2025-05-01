import React from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/constants/image";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
<div className="w-full h-full bg-[#f3f2f5] shadow-[0_-5px_14px_rgba(0,0,0,0.1)] flex items-center justify-center">
<div className=" md:w-[90%] w-[97%] h-[40dvh]  flex items-center justify-center">
        <div className=" h-[30dvh] w-full flex flex-col items-center justify-between">
          <div className="w-full h-[10dvh] flex items-center justify-between ">
            <div className="md:w-[15%] w-[20%] h-full ">
              <Image
                src={images.Logo}
                alt="Logo"
                className=" w-full h-full object-contain flex items-center justify-center "
              />
            </div>
            <div className="w-[45%] flex items-center justify-center gap-[11%]   h-full ">
              <Link
                href="/about"
                className=" hover:text-primary text-[16px] leading-[24px] font-[600]"
              >
                About
              </Link>
              <Link
                href="/contact"
                className=" hover:text-primary text-[16px] leading-[24px] font-[600]"
              >
                Contact
              </Link>
            </div>
            <div className="md:w-[15%] w-[20%] h-full flex items-center justify-center gap-[11%]">
            <FaInstagram  size={30} color="#035A93"/>
            <FaLinkedinIn size={30} color="#035A93" />
            </div>
          </div>
          <div className="w-full h-[10dvh] flex items-center justify-center">
            <div className="h-[1px] w-full bg-black"></div>
          </div>
          <div className="w-full h-[10dvh]  text-[14px] font-[400] leading-[21px] flex items-center justify-center">
            © 2025 Simms On Talent. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
