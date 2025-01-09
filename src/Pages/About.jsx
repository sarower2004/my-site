import React from 'react'
import "./About.css"
import { IoIosArrowForward } from "react-icons/io";
import Counter from '../Component/Counter';
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { GrDocumentVerified } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import Skill from '../Component/Skill/Skill';






const About = () => {
  return (
    <>
     <div className="about_row">
        <p className='about_text'>About</p>
        <div className="single_line"></div>

        <div className="about_heading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem possimus eius at incidunt dolores veniam animi quo ipsam necessitatibus natus voluptate quod obcaecati qui, facere ut libero eaque aut. Ullam, iusto. Ducimus dignissimos porro ratione? Ipsum consequatur autem, magni qui minima omnis non aliquam animi, reiciendis, odio atque. Neque, cupiditate? 
        </div>
        <div className="owner_details">
          <div className="details_left">
            <img src="images/banner2.jpg" alt="owner third images" />
          </div>
          <div className="details_right">
            <p className='details_head'>UI/UX Designer & Web Developer.</p>
            <p className='details_text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum assumenda tempore, facere ab laboriosam consequatur sint ullam illum tempora totam aliquam, nam voluptas. Debitis nulla vitae temporibus magnam? Officia at eos ullam voluptatum, nemo sunt dolores blanditiis ratione natus s rerum inventore erendis dolorem. Dignissimos aliquid praesentium ratione tempore.</p>

              <div className="bio">
                <div className="bio_left">
                  <ul>
                    <li><span><IoIosArrowForward className='details_icon'/>  Birthday:</span> 18 November 2004</li>
                    <li><span><IoIosArrowForward className='details_icon' />  Website:</span> www.sarower.dev.org</li>
                    <li><span><IoIosArrowForward className='details_icon'/>  Phone:</span> 01828783414</li>
                    <li><span><IoIosArrowForward className='details_icon' />  City:</span> Panchagarh,Bangladesh.</li>
                  </ul>
                </div>
                <div className="bio_right">
                  <ul>
                    <li><span><IoIosArrowForward className='details_icon'/>  Age:</span> 20</li>
                    <li><span><IoIosArrowForward className='details_icon' />  Degree:</span> Diploma in Engineering</li>
                    <li><span><IoIosArrowForward className='details_icon' />  Email:</span> eng.sarowerjahan@gmail.com</li>
                    <li><span><IoIosArrowForward className='details_icon'/>  Freelance:</span> Available</li>
                  </ul>
                </div>
              </div>
              <p className='details_btm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit facere ullam cum alias dolores, corrupti, totam repellat voluptate molestiae minima, pariatur in itaque voluptates numquam aspernatur illum nemo accusamus. Fugit.</p>
          </div>
        </div>
        <div className="countUp">
                  <div className="single_counter">
                    <p><HiOutlineEmojiHappy className='counter_icon' />
                    </p>
                    <div className="counter_right">
                      <Counter />
                      <p className="happy_clients">Happy Clients</p>
                    </div>
                  </div>
                  <div className="single_counter">
                    <p><GrDocumentVerified
                    className='counter_icon' />
                    </p>
                    <div className="counter_right">
                      <Counter start={0} end={149} />
                      <p className="happy_clients">Projects</p>
                    </div>
                  </div>
                  <div className="single_counter">
                    <p><BiSupport className='counter_icon' />
                    </p>
                    <div className="counter_right">
                      <Counter start={0} end={99} />
                      <p className="happy_clients"> Hours Support</p>
                    </div>
                  </div>
                  <div className="single_counter">
                    <p><MdOutlinePeopleAlt className='counter_icon' />
                    </p>
                    <div className="counter_right">
                      <Counter start={0} end={69} />
                      <p className="happy_clients">Workers</p>
                    </div>
                  </div>
                </div>
                </div>

        <Skill/>

    </>
  )
}

export default About