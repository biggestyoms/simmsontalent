import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full bg-primary pt-[9dvh]'>
      <div className="h-[125dvh] flex items-center justify-center px-4">
  <div className="w-full max-w-xl py-12">
    <h1 className="text-[48px] font-[700] text-center text-white mb-4 leading-[58px]">Send a message</h1>
    <p className="text-[19px] leading-[29px] font-[400] text-center text-white mb-8">
      Have a question? Fill out the form below and click on submit.
    </p>

    <form className="space-y-6">
      {/* Full Name */}
      <div>
        <label className="block text-white font-medium mb-2" htmlFor="fullName">
          Full Name<span className="text-white">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          className="w-full border border-gray-300 bg-white px-4 py-3 text-black"
          placeholder="Enter your full name"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-white font-medium mb-2" htmlFor="email">
          Email<span className="text-white">*</span>
        </label>
        <input
          type="email"
          id="email"
          className="w-full border border-gray-300 px-4 py-3 text-black bg-white"
          placeholder="Enter your email"
          required
        />
      </div>

      {/* Phone */}

      <div>
        <label className="block text-white font-medium mb-2" htmlFor="phone">
          Phone Number<span className="text-white">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          className="w-full border border-gray-300 px-4 py-3 text-black bg-white"
          placeholder="Enter Mobile number"
          required
        />
      </div>

      {/* Service Selection */}
      <div>
        <label className="block text-white font-medium mb-2" htmlFor="service">
          What service are you interested in?<span className="text-white">*</span>
        </label>
        <select
          id="service"
          className="w-full border border-gray-300 px-4 py-3 text-black bg-white"
          required
        >
          <option>Select one</option>
          <option>Career Coaching</option>
          <option>Resume Writing</option>
          <option>Interview Prep</option>
          <option>Recruitment Support</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-white font-medium mb-2" htmlFor="message">
          Message<span className="text-white">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full border border-gray-300 px-4 py-3 text-black bg-white"
          placeholder="Type your message here"
          required
        ></textarea>
      </div>

      {/* Howd you hear about us  */}
      <div>
        <label className="block text-white font-medium mb-2" htmlFor="info">
          How'd you hear about us ?<span className="text-white">*</span>
        </label>
        <select
          id="info"
          className="w-full border border-gray-300 px-4 py-3 text-black bg-white"
          required
        >
          <option>Select one</option>
          <option>Google Search</option>
          <option>Word of mouth</option>
          <option>Social media</option>
          <option>others</option>
        </select>
      </div>

      

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-black text-[#ffffff] font-bold py-3 px-6 hover:bg-gray-200 transition"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>

      
    </div>
  )
}

export default page
