import React from "react";
import { FaLocationDot } from "react-icons/fa6"; 
import { MdAddCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
  <div id="contact">
        <div className="lg:ml-[320px] sm:p-[20px]">
          <h2 className="text-[30px] font-Montserrat font-bold">
            Contacts Us
          </h2>
          <div className="single_line"></div>
          <p className="text-gray-600 mt-4 service_details">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
          </p>
       </div>

    <div className="lg:ml-[320px] bg-blue-50 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Section - Contact Info */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 text-white rounded-full p-3 mr-4">
                <i className="fas fa-map-marker-alt"><FaLocationDot /></i>
              </div>
              <div>
                <h3 className="text-gray-700 font-medium">Address</h3>
                <p className="text-gray-600">Rangpur Sadar, Rangpur, Bangladesh</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 text-white rounded-full p-3 mr-4">
                <i className="fas fa-phone-alt"><MdAddCall /></i>
              </div>
              <div>
                <h3 className="text-gray-700 font-medium">Call Us</h3>
                <p className="text-gray-600">01828783414</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-500 text-white rounded-full p-3 mr-4">
                <i className="fas fa-envelope"><MdOutlineEmail /></i>
              </div>
              <div>
                <h3 className="text-gray-700 font-medium">Email Us</h3>
                <p className="text-gray-600">eng.sarowerjahan2004@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            {/* Google Map Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.3732234947614!2d-74.0060156842892!3d40.71277577933007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa647bdf0b621b7f6!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1643130676713!5m2!1sen!2sus"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>

        </div>
    </>
  );
};

export default Contact;
