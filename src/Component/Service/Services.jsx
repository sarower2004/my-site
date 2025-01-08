import React from 'react';
import "../Service/Service.css"
import { IoIosColorPalette } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGrav } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { ImMobile2 } from "react-icons/im";



const Services = () => {
  const services = [
    {
      title: 'UI/UX Design',
      description: 'Create visually appealing and user-friendly designs for websites and applications. Focused on delivering intuitive interfaces and seamless user experiences.',
      icon: <IoIosColorPalette />,
    },
    {
      title: 'Figma/Sketch to HTML & CSS',
      description: 'Transform Figma or Sketch designs into fully responsive, pixel-perfect HTML and CSS code optimized for all devices.',
      icon: <FaLaptopCode />,
    },
    {
      title: 'React.js Development',
      description: 'Build high-performance, scalable, and dynamic web applications with React.js. Perfect for startups and businesses looking for modern, component-driven UI.',
      icon: <FaReact /> ,
    },
    {
      title: 'Grav CMS Design and Development',
      description: 'Design and develop lightweight, fast, and customizable websites using Grav CMS. Perfect for creating blogs, portfolios, and small business websites.',
      icon: <FaGrav />
      ,
    },
    {
      title: 'Professional Email Signature Design',
      description: 'Design stylish and functional email signatures that represent your brand and create a lasting impression. Compatible with all major email clients.',
      icon: <MdAttachEmail />,
    },
    {
      title: 'Responsive Website Design',
      description: 'Deliver stunning, mobile-friendly websites that look great on all devices. Ensure accessibility and SEO optimization for maximum reach.',
      icon: <ImMobile2 />,
    },
  ];

  return (
    <section className="py-16 bg-gray-50 lg:ml-[320px] sm:p-[20px]">
      <div className="flex flex-col ">
        <div className="mb-12">
          <h2 className="text-[30px] font-Montserrat font-bold">Services</h2>
          <div className="single_line"></div>
          <p className="text-gray-600 mt-4 service_details">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
          </p>
        </div>
        <div className=" flex flex-wrap lg:justify-evenly  items-center gap-10 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="lg:w-[300px] h-[100px] lg:h-[200px] flex  gap-5"
            >
              <div className="w-[100px] h-full"><div className='text-4xl w-[60px] h-[60px] bg-blue-500 rounded-full flex justify-center items-center border-2 text-white'>{service.icon}</div></div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
