import React from "react";
import "../Component/Resume/Resume.css"

const Resume = () => {
  return (

    <>
    <section className="lg:ml-[320px] sm:p-[20px]">
    <p className='resume_text'>Resume</p>
        <div className="single_line"></div>
        <p className='resume_details'>Creative and detail-oriented web developer with expertise in designing responsive, user-friendly websites. Skilled in modern web technologies to bring innovative ideas to life."</p>
    </section>
   
    <div className="max-w-5xl mx-auto p-8 lg:ml-[300px] lg:flex">
      {/* Summary Section */}
        <div className="resume_left ">

            <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <div className="border-l-2 border-blue-500 pl-4 relative">
            <div className="absolute -left-2.5 top-0 w-5 h-5 bg-white border-2 border-blue-500 rounded-full"></div>

              <h3 className="text-lg font-semibold">Sarower Jahan</h3>
              <p className="italic text-gray-700 mb-2 w-[500px]">
              "Enthusiastic React.js Developer with 3+ years of experience building responsive and user-friendly web applications. Skilled in React, JavaScript (ES6+), Tailwind CSS, and RESTful APIs, with a focus on writing clean, efficient code. Passionate about delivering seamless user experiences and optimizing application performance. Continuously learning and staying up-to-date with modern front-end technologies.".
              </p>
              <ul className="text-gray-600">
                <li>Panchgarh, Rangpur, Bangladesh.</li>
                <li>(+88) 01828783414</li>
                <li>eng.sarowerjahan@gmail.com</li>
              </ul>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="space-y-6">
              {/* Education Item */}
              <div className="border-l-2 border-blue-500 pl-4 relative">
                <div className="absolute -left-2.5 top-0 w-5 h-5 bg-white border-2 border-blue-500 rounded-full"></div>
                <h3 className="text-lg font-semibold">DIPLOMA IN ENGINEERING</h3>
                <p className="text-gray-600">2022 – 2026</p>
                <p className=" text-gray-500">
                  ELECTIRCAL TECHNOLOGY.
                </p>
                <p className="italic text-gray-500">
                  Rangpur Polytechnic Institute, Rangpur.
                </p>
    
              </div>

              {/* Education Item */}
              <div className="border-l-2 border-blue-500 pl-4 relative">
                <div className="absolute -left-2.5 top-0 w-5 h-5 bg-white border-2 border-blue-500 rounded-full"></div>
                <h3 className="text-lg font-semibold">SECONDARY SCHOOL CERTIFICATE</h3>
                <p className="text-gray-600">Passing Year – 2022</p>
                <p className=" text-gray-500">
                  Subject - Science.
                </p>
                <p className="italic text-gray-500">
                  Sakowa High School, Panchagarh.
                </p>
              
              </div>
            </div>
          </section>
        </div>

      <div className="resume_right">
                  {/* Professional Experience Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
              <div className="space-y-6">
                {/* Experience Item */}
                <div className="border-l-2 border-blue-500 pl-4 relative">
                  <div className="absolute -left-2.5 top-0 w-5 h-5 bg-white border-2 border-blue-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold">SENIOR WEB-DESIGN & DEVELOPMANT SPECIALIST</h3>
                  <p className="text-gray-600">2023 – Present</p>
                  <p className="italic text-gray-500">ABC COMPANY, CANADA.</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>
                      Lead in the design, development, and implementation of the Website, and
                      production communication materials.
                    </li>
                    <li>
                      Delegate tasks to the 7 members of the design team and provide counsel on all
                      aspects of the project.
                    </li>
                    <li>
                      Supervise the assessment of all web materials to ensure quality and accuracy.
                    </li>
                    <li>
                      Oversee the efficient use of production project budgets ranging from $2,000 -
                      $25,000.
                    </li>
                  </ul>
                </div>

                {/* Experience Item */}
                <div className="border-l-2 border-blue-500 pl-4 relative">
                  <div className="absolute -left-2.5 top-0 w-5 h-5 bg-white border-2 border-blue-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold">UI/UX DESIGN SPECIALIST</h3>
                  <p className="text-gray-600">2020 – 2022</p>
                  <p className="italic text-gray-500">XYZ COMPANY, US.</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>
                    Led a team of 6 designers to successfully deliver multiple user-centered design projects, ensuring high-quality outcomes and adherence to timelines.
                    </li>
                    <li>
                    Collaborated with cross-functional teams  to create intuitive and engaging user interfaces that  satisfaction.
                    </li>
                    <li>
                    Mentored and guided junior designers, fostering a collaborative and growth-focused team environmen
                    </li>
            
                  </ul>
                </div>
              </div>
            </section>
      </div>
    </div>

    </>
  );
};

export default Resume;
