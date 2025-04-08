import React from 'react'
import Image from "next/image";
import { images } from "@/constants/image";

const page = () => {
  return (
    <div className='w-full h-full bg-primary pt-[9dvh]'>
      <div className='w-full h-[100dvh] flex items-center justify-between flex-row px-[5%]'>
        <div className='h-[70dvh] w-[45%] flex flex-col items-start justify-center'>
          <p className='text-[48px] font-[700] leading-[58px] text-white'>About Simms on talent</p>
          <p className='text-[19px] font-[400] leading-[31px] text-white'>I provide clients with CV writing and HR support services virtually (remotely). <br /><br />
          Drawing on an extensive background in HR and recruitment, I have been providing professional CV writing, tailoring cover letters, and conducting interview preparation for clients across New Zealand and Australia. I have written hundreds of CVs and reviewed many more. I provide HR support to businesses with their recruitment and other people related tasks. <br /> <br />If you are interested to know more about the services or if you have any questions, please reach out.</p>
        </div>
        <div className='bg-blue-400 h-[70dvh] w-[45%] overflow-hidden flex items-center justify-center'>
           <Image
                          src={images.Hero}
                          alt="Logo"
                          className=" bg-cover w-full "
                        />
        </div>
      </div>
      
    </div>
  )
}

export default page
