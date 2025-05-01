"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    info: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string }>({ 
    success: false, 
    message: "" 
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // For development: still use mailto as fallback
      // In production, you'd replace this with an API call
      const subject = `New Contact Form Submission: ${formData.service}`;
      const body = `
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Service Requested: ${formData.service}
How They Found Us: ${formData.info}

Message:
${formData.message}
      `;

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For development: open email client with pre-filled data
      window.location.href = `mailto:cherie.wade@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      
      setSubmitResult({
        success: true,
        message: "Form submitted successfully!"
      });
      
      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        info: "",
      });
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "Error submitting form. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-full bg-primaryone pt-[9dvh]">
      <div className="lg:h-auto min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-xl py-12">
          <h1 className="text-4xl font-bold text-center text-white mb-4">
            Send a message
          </h1>
          <p className="text-lg leading-relaxed font-normal text-center text-white mb-8">
            Have a question? Fill out the form below and click on submit.
          </p>

          {submitResult.message && (
            <div className={`p-4 mb-6 text-center rounded ${
              submitResult.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}>
              {submitResult.message}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            {/* Full Name */}
            <div>
              <label
                className="block text-white font-medium mb-2"
                htmlFor="fullName"
              >
                Full Name<span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full border border-gray-300 bg-white px-4 py-3 text-black rounded"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="block text-white font-medium mb-2"
                htmlFor="email"
              >
                Email<span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 px-4 py-3 text-black bg-white rounded"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                className="block text-white font-medium mb-2"
                htmlFor="phone"
              >
                Phone Number<span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full border border-gray-300 px-4 py-3 text-black bg-white rounded"
                placeholder="Enter mobile number"
                value={formData.phone}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            {/* Service Selection */}
            <div>
              <label
                className="block text-white font-medium mb-2"
                htmlFor="service"
              >
                What service are you interested in?
                <span className="text-red-400">*</span>
              </label>
              <select
                id="service"
                className="w-full border border-gray-300 px-4 py-3 text-black bg-white rounded"
                value={formData.service}
                onChange={handleChange}
                required
                aria-required="true"
              >
                <option value="">Select one</option>
                <option value="Career Coaching">Career Coaching</option>
                <option value="Resume Writing">Resume Writing</option>
                <option value="Interview Prep">Interview Prep</option>
                <option value="Recruitment Support">Recruitment Support</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                className="block text-white font-medium mb-2"
                htmlFor="message"
              >
                Message<span className="text-red-400">*</span>
              </label>

              <textarea
                id="message"
                rows={5}
                className="w-full border border-gray-300 px-4 py-3 text-black bg-white rounded"
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
              ></textarea>
            </div>

            {/* How'd you hear about us */}
            <div>
              <label
                className="block text-white font-medium mb-2"
                htmlFor="info"
              >
                How&apos;d you hear about us?
                <span className="text-red-400">*</span>
              </label>
              <select
                id="info"
                className="w-full border border-gray-300 px-4 py-3 text-black bg-white rounded"
                value={formData.info}
                onChange={handleChange}
                required
                aria-required="true"
              >
                <option value="">Select one</option>
                <option value="Google Search">Google Search</option>
                <option value="Word of mouth">Word of mouth</option>
                <option value="Social media">Social media</option>
                <option value="Others">Others</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-3 px-6 hover:bg-gray-800 transition rounded"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;