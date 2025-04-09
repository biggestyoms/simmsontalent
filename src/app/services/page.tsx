"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const ServicesPage = () => {
  const searchParams = useSearchParams();
  const serviceType = searchParams.get('type');
  const service = searchParams.get('service');
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, [serviceType, service]);

  const renderServicesNav = () => (
    <div className="bg-gray-100 p-4 rounded-lg mb-8">
      <h3 className="font-semibold mb-4 text-lg">Our Services</h3>
      
      <div className="mb-4">
        <h4 className="font-medium text-primarythree mb-2">For Students</h4>
        <ul className="space-y-2 ml-4">
          <li>
            <Link 
              href="/services?type=student&service=career-consultation"
              className={`hover:text-primarythree ${service === 'career-consultation' && serviceType === 'student' ? 'text-primarythree font-medium' : ''}`}
            >
              Career Consultation
            </Link>
          </li>
          <li>
            <Link 
              href="/services?type=student&service=career-assessments"
              className={`hover:text-primarythree ${service === 'career-assessments' && serviceType === 'student' ? 'text-primarythree font-medium' : ''}`}
            >
              Career Assessments
            </Link>
          </li>
          <li>
            <Link 
              href="/services?type=student&service=resume-writing"
              className={`hover:text-primarythree ${service === 'resume-writing' && serviceType === 'student' ? 'text-primarythree font-medium' : ''}`}
            >
              Resume Writing
            </Link>
          </li>
          <li>
            <Link 
              href="/services?type=student&service=interview-preparation"
              className={`hover:text-primarythree ${service === 'interview-preparation' && serviceType === 'student' ? 'text-primarythree font-medium' : ''}`}
            >
              Interview Preparation
            </Link>
          </li>
          <li>
            <Link 
              href="/services?type=student&service=job-searching"
              className={`hover:text-primarythree ${service === 'job-searching' && serviceType === 'student' ? 'text-primarythree font-medium' : ''}`}
            >
              Job Searching
            </Link>
          </li>
          <li>
            <Link 
              href="/services?type=student&service=job-placement"
              className={`hover:text-primarythree ${service === 'job-placement' && serviceType === 'student' ? 'text-primarythree font-medium' : ''}`}
            >
              Job Placement
            </Link>
          </li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-medium text-primarythree mb-2">For Businesses</h4>
        <ul className="space-y-2 ml-4">
          <li>
            <Link 
              href="/services?type=business&service=event-planning"
              className={`hover:text-primarythree ${service === 'event-planning' && serviceType === 'business' ? 'text-primarythree font-medium' : ''}`}
            >
              Event Planning & Management
            </Link>
          </li>
          <li>
            <Link 
              href="/services?type=business&service=project-planning"
              className={`hover:text-primarythree ${service === 'project-planning' && serviceType === 'business' ? 'text-primarythree font-medium' : ''}`}
            >
              Project Planning & Management
            </Link>
          </li>
          <li>
            <Link 
              href="/services?type=business&service=recruitment-planning"
              className={`hover:text-primarythree ${service === 'recruitment-planning' && serviceType === 'business' ? 'text-primarythree font-medium' : ''}`}
            >
              Recruitment Planning & Consultation
            </Link>
          </li>
          <li>
            <Link 
              href="/services?type=business&service=job-creation"
              className={`hover:text-primarythree ${service === 'job-creation' && serviceType === 'business' ? 'text-primarythree font-medium' : ''}`}
            >
              Job Creation & Consultation
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

  const renderServiceContent = () => {
    if (!serviceType || !service) {
      return (
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold mb-6">Our Professional Services</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            At Simms on Talent, we offer a comprehensive range of services designed to help both students and businesses succeed. 
            Please select a specific service from the menu to learn more.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primarythree">For Students</h3>
              <p className="mb-4">We provide career guidance, resume assistance, and job placement services to help students transition into successful professionals.</p>
              <Link href="/services?type=student&service=career-consultation" className="text-primarythree hover:underline">
                Explore Student Services →
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primarythree">For Businesses</h3>
              <p className="mb-4">We offer event management, project planning, and recruitment services to help businesses optimize their operations and talent acquisition.</p>
              <Link href="/services?type=business&service=recruitment-planning" className="text-primarythree hover:underline">
                Explore Business Services →
              </Link>
            </div>
          </div>
        </div>
      );
    }

    // Student Services Content
    if (serviceType === 'student') {
      switch (service) {
        case 'career-consultation':
          return (
            <div>
              <h1 className="text-3xl font-bold mb-6">Career Consultation</h1>
              <p className="mb-4">Our career consultation services provide personalized guidance to help students identify their strengths, interests, and potential career paths. Through one-on-one sessions with our experienced career counselors, students gain clarity on their professional goals and develop actionable plans to achieve them.</p>
              <h2 className="text-xl font-semibold mt-6 mb-3">What We Offer:</h2>
              <ul className="list-disc ml-6 mb-6">
                <li className="mb-2">Personalized career path exploration</li>
                <li className="mb-2">Skills and interests assessment</li>
                <li className="mb-2">Industry insights and market trends</li>
                <li className="mb-2">Academic program alignment with career goals</li>
                <li className="mb-2">Long-term career planning strategies</li>
              </ul>
              <button className="bg-primarythree text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition mt-4">
                Book a Consultation
              </button>
            </div>
          );
        case 'career-assessments':
          return (
            <div>
              <h1 className="text-3xl font-bold mb-6">Career Assessments</h1>
              <p className="mb-4">Our comprehensive career assessment tools help students identify their aptitudes, interests, values, and personality traits to discover suitable career options. These scientifically validated assessments provide valuable insights that inform educational and career decisions.</p>
              <h2 className="text-xl font-semibold mt-6 mb-3">Our Assessment Tools Include:</h2>
              <ul className="list-disc ml-6 mb-6">
                <li className="mb-2">Skills and aptitude evaluations</li>
                <li className="mb-2">Personality type assessments</li>
                <li className="mb-2">Work values inventory</li>
                <li className="mb-2">Career interest profiling</li>
                <li className="mb-2">Detailed results interpretation and guidance</li>
              </ul>
              <button className="bg-primarythree text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition mt-4">
                Take an Assessment
              </button>
            </div>
          );
        case 'resume-writing':
          return (
            <div>
              <h1 className="text-3xl font-bold mb-6">Resume Writing</h1>
              <p className="mb-4">Our professional resume writing service helps students create compelling resumes that stand out to employers. We work with you to highlight your unique skills, experiences, and achievements in a format that catches attention and increases your chances of landing interviews.</p>
              <h2 className="text-xl font-semibold mt-6 mb-3">Our Resume Services Include:</h2>
              <ul className="list-disc ml-6 mb-6">
                <li className="mb-2">Professional resume writing and formatting</li>
                <li className="mb-2">Achievement-focused content development</li>
                <li className="mb-2">Industry-specific keyword optimization</li>
                <li className="mb-2">ATS (Applicant Tracking System) compatibility</li>
                <li className="mb-2">Cover letter creation and customization</li>
              </ul>
              <button className="bg-primarythree text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition mt-4">
                Get Your Professional Resume
              </button>
            </div>
          );
        case 'interview-preparation':
          return (
            <div>
              <h1 className="text-3xl font-bold mb-6">Interview Preparation</h1>
              <p className="mb-4">Our interview preparation service equips students with the skills and confidence needed to excel in job interviews. Through mock interviews, personalized feedback, and strategic coaching, we help you make a strong impression and effectively communicate your value to potential employers.</p>
              <h2 className="text-xl font-semibold mt-6 mb-3">Our Interview Prep Includes:</h2>
              <ul className="list-disc ml-6 mb-6">
                <li className="mb-2">Mock interview sessions with industry specialists</li>
                <li className="mb-2">Common and challenging question preparation</li>
                <li className="mb-2">Behavioral interview techniques</li>
                <li className="mb-2">Non-verbal communication coaching</li>
                <li className="mb-2">Post-interview follow-up strategies</li>
              </ul>
              <button className="bg-primarythree text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition mt-4">
                Schedule Interview Training
              </button>
            </div>
          );
        case 'job-searching':
          return (
            <div>
              <h1 className="text-3xl font-bold mb-6">Job Searching</h1>
              <p className="mb-4">Our job search assistance helps students navigate the complex job market efficiently. We provide access to exclusive job listings, networking opportunities, and strategies to identify and pursue positions that align with your career goals and qualifications.</p>
              <h2 className="text-xl font-semibold mt-6 mb-3">Our Job Search Support Includes:</h2>
              <ul className="list-disc ml-6 mb-6">
                <li className="mb-2">Job market research and industry insights</li>
                <li className="mb-2">Access to our exclusive job database</li>
                <li className="mb-2">Application strategy development</li>
                <li className="mb-2">Networking event opportunities</li>
                <li className="mb-2">Social media and LinkedIn optimization</li>
              </ul>
              <button className="bg-primarythree text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition mt-4">
                Start Your Job Search
              </button>
            </div>
          );
        case 'job-placement':
          return (
            <div>
              <h1 className="text-3xl font-bold mb-6">Job Placement</h1>
              <p className="mb-4">Our job placement service connects qualified students with appropriate employment opportunities. We leverage our extensive network of employer relationships to help you secure positions that match your skills, experience, and career aspirations.</p>
              <h2 className="text-xl font-semibold mt-6 mb-3">Our Placement Services Include:</h2>
              <ul className="list-disc ml-6 mb-6">
                <li className="mb-2">Personalized job matching</li>
                <li className="mb-2">Direct employer introductions</li>
                <li className="mb-2">Interview arrangement and coordination</li>
                <li className="mb-2">Offer negotiation assistance</li>
                <li className="mb-2">Post-placement support and coaching</li>
              </ul>
              <button className="bg-primarythree text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition mt-4">
                Enroll in Placement Services
              </button>
            </div>
          );
        default:
          return <div>Please select a specific service</div>;
      }
    }
    
    // Business Services Content
    if (serviceType === 'business') {
      switch (service) {
        case 'event-planning':
          return (
            <div>
              <h1 className="text-3xl font-bold mb-6">Event Planning & Management</h1>
              <p className="mb-4">Our comprehensive event planning and management services help businesses create impactful professional events, from small team-building activities to large-scale conferences. We handle all aspects of event execution to ensure your objectives are met while you focus on your core business.</p>
              <h2 className="text-xl font-semibold mt-6 mb-3">Our Event Services Include:</h2>
              <ul className="list-disc ml-6 mb-6">
                <li className="mb-2">Strategic event conceptualization and design</li>
                <li className="mb-2">Venue selection and logistics coordination</li>
                <li className="mb-2">Speaker and talent acquisition</li>
                <li className="mb-2">Marketing and promotion management</li>
                <li className="mb-2">On-site coordination and post-event evaluation</li>
              </ul>
              <button className="bg-primarythree text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition mt-4">
                Plan Your Business Event
              </button>
            </div>
          );
        case 'project-planning':
          return (
            <div>
              <h1 className="text-3xl font-bold mb-6">Project Planning & Management</h1>
              <p className="mb-4">Our project planning and management expertise helps businesses execute complex initiatives efficiently and effectively. We provide structured methodologies, resource optimization, and monitoring systems to ensure projects are completed on time and within budget.</p>
              <h2 className="text-xl font-semibold mt-6 mb-3">Our Project Management Services Include:</h2>
              <ul className="list-disc ml-6 mb-6">
                <li className="mb-2">Comprehensive project planning and scope definition</li>
                <li className="mb-2">Resource allocation and management</li>
                <li className="mb-2">Risk assessment and mitigation strategies</li>
                <li className="mb-2">Progress tracking and reporting systems</li>
                <li className="mb-2">Quality assurance and stakeholder communication</li>
              </ul>
              <button className="bg-primarythree text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition mt-4">
                Consult on Project Management
              </button>
            </div>
          );
        case 'recruitment-planning':
          return (
            <div>
              <h1 className="text-3xl font-bold mb-6">Recruitment Planning & Consultation</h1>
              <p className="mb-4">Our recruitment planning and consultation services help businesses develop effective talent acquisition strategies. We provide guidance on creating efficient recruitment processes, employer branding, and candidate assessment methods to attract and retain top talent.</p>
              <h2 className="text-xl font-semibold mt-6 mb-3">Our Recruitment Services Include:</h2>
              <ul className="list-disc ml-6 mb-6">
                <li className="mb-2">Workforce planning and needs analysis</li>
                <li className="mb-2">Recruitment process optimization</li>
                <li className="mb-2">Job description and requirement development</li>
                <li className="mb-2">Candidate sourcing strategy consultation</li>
                <li className="mb-2">Interview and selection methodology design</li>
              </ul>
              <button className="bg-primarythree text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition mt-4">
                Improve Your Recruitment Process
              </button>
            </div>
          );
        case 'job-creation':
          return (
            <div>
              <h1 className="text-3xl font-bold mb-6">Job Creation & Consultation</h1>
              <p className="mb-4">Our job creation and consultation services assist businesses in identifying opportunities for organizational growth and workforce expansion. We provide insights on market trends, skill requirements, and organizational structures to support sustainable job creation initiatives.</p>
              <h2 className="text-xl font-semibold mt-6 mb-3">Our Job Creation Services Include:</h2>
              <ul className="list-disc ml-6 mb-6">
                <li className="mb-2">Organizational needs assessment and gap analysis</li>
                <li className="mb-2">Market and industry opportunity identification</li>
                <li className="mb-2">Role definition and job design consultation</li>
                <li className="mb-2">Workforce development planning</li>
                <li className="mb-2">Expansion and scaling strategy development</li>
              </ul>
              <button className="bg-primarythree text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition mt-4">
                Consult on Job Creation
              </button>
            </div>
          );
        default:
          return <div>Please select a specific service</div>;
      }
    }

    return <div>Please select a service from the menu</div>;
  };

  return (
    <div className="pt-[12vh] w-full min-h-screen pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-8 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Our Professional Services
          </h1>
          <p className="text-center max-w-3xl mx-auto text-gray-700">
            At Simms on Talent, we provide comprehensive services designed to help both students and businesses achieve their full potential. Explore our offerings and discover how we can support your success.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            {renderServicesNav()}
          </div>

          <div className="md:w-3/4">
            <div className={`bg-white p-6 rounded-lg shadow-sm transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
              {renderServiceContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;