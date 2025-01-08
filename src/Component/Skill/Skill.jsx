import React from 'react'
import "./Skill.css"

const Skill = () => {
  return (
    <>
    
    <div className="skill_head">
        <p className='skill_text'>Skills</p>
        <div className="single_line"></div>
        <p className='skill_details'>Creative and detail-oriented web developer with expertise in designing responsive, user-friendly websites. Skilled in modern web technologies to bring innovative ideas to life."</p>

        <div className="skill_row">
            <div className="skill_left">
                <div className="html">
                    <div className="html_text">
                        <p>HTML</p>
                        <p>99%</p>
                    </div>
                    <div className="gray_line1">
                        <div className="blue_line1"></div>
                    </div>
                </div>

                <div className="html">
                    <div className="html_text">
                        <p>CSS</p>
                        <p>90%</p>
                    </div>
                    <div className="gray_line2">
                        <div className="blue_line2"></div>
                    </div>
                </div>

                <div className="html">
                    <div className="html_text">
                        <p>JAVASCRIPT</p>
                        <p>60%</p>
                    </div>
                    <div className="gray_line3">
                        <div className="blue_line3"></div>
                    </div>
                </div>
            
            </div>

            <div className="skill_left">
                <div className="html">
                    <div className="html_text">
                        <p>PHP</p>
                        <p>55%</p>
                    </div>
                    <div className="gray_line4">
                        <div className="blue_line4"></div>
                    </div>
                </div>

                <div className="html">
                    <div className="html_text">
                        <p>WORDPRESS/CMS</p>
                        <p>75%</p>
                    </div>
                    <div className="gray_line5">
                        <div className="blue_line5"></div>
                    </div>
                </div>

                <div className="html">
                    <div className="html_text">
                        <p>PHOTOSHOP/CANVA</p>
                        <p>85%</p>
                    </div>
                    <div className="gray_line6">
                        <div className="blue_line6"></div>
                    </div>
                </div>
            
            </div>

            

        </div>

    </div>
    
    </>
  )
}

export default Skill