import React, { useState } from "react";
import "../Portfolio/Filter.css"

const Filter = () => {
  const [filter, setFilter] = useState("All");

  const imageData = [
    // Web Design
    { id: 3, category: "Web Design", url: "https://cdn.dribbble.com/users/4543156/screenshots/14125478/media/cb000e6e6916abe4d76d3ad3d0cf3589.png?resize=400x0" },
    { id: 12, category: "App Design", url: "https://cdn.dribbble.com/userupload/7394556/file/original-e3054c15427f309a1bb3f1dca10c7a75.png?resize=400x0" },

  
    // UI/UX
    { id: 4, category: "UI/UX", url: "https://amadine.com/assets/img/articles/ux-vs-ui/ux-vs-ui-design@2x.png" },
    { id: 7, category: "E-commerce", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjyFDX1BFIp8OhhWyvjP-QpWZlt3U5XCAIJA&s" },

  
    // Landing Pages
    { id: 1, category: "Landing Pages", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pVbZyICO5UFthUJS2kQLc2uKZxK4xZb2Lw&s" },
    { id: 2, category: "Responsive", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUmrf9CsdrAV_MuxymqofVw5I33eTnaDnKoyEVteLSY52HmJQruOwqSCEa4POb-2banA&usqp=CAU" },

  
    // E-commerce
    { id: 6, category: "UI/UX", url: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/130928408/original/56f3e19ee6e148daf4ebd8b6aba7027874a8d5e3/create-unique-mobile-or-web-ui-ux-design.png" },

    { id: 16, category: "E-commerce", url: "https://storage.googleapis.com/mrkt-image-assets/22-08-15_Image6.png" },
  
    // Responsive
    { id: 5, category: "Landing Pages", url: "https://framerusercontent.com/images/8Ms9OlyDrrBR114I9iSesRHRMME.jpeg" },

    { id: 8, category: "Responsive", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamSLeXQ0eFfyylHlUaFHW48GoSuLAc8SsSg&s" },
  
    // App Design
    { id: 9, category: "App Design", url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/89413d141786591.625a8fc55babb.jpg" },
    { id: 10, category: "Figma", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMG-l3Si3Zvn36z-uNcqUPHFlwquyuhgOrfA&s" },

  
    // Photoshop
    { id: 11, category: "Photoshop", url: "https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/ce52d903-cf20-45ed-bb21-aac7766cb1d0/pagelayers-opt.png" },
    { id: 13, category: "Figma", url: "https://s3-alpha.figma.com/hub/file/1431718681/d531f5d8-9fc2-431f-b8bf-05313f2c09f2-cover.png" },
  
    // Figma
    { id: 14, category: "Photoshop", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpgXL2KlkqSbZj6UMpgHTJr_KDFZSDfpJXTQ&s" },

    { id: 15, category: "Web Design", url: "https://cdn.dribbble.com/users/6100135/screenshots/17684834/media/a10e06eb198ee1aae4299f7f48849ee6.jpg?resize=400x0" },

  ];
  

  const categories = [
    "All",
    "Web Design",
    "UI/UX",
    "Landing Pages",
    "E-commerce",
    "Responsive",
    "App Design",
    "Photoshop",
    "Figma",
  ];

  // Filter logic
  const filteredImages =
    filter === "All" ? imageData : imageData.filter((image) => image.category === filter);

  return (
<>
    <section className="lg:ml-[320px] sm:p-[20px] mt-[100px]">
    <p className='resume_text'>Portfolio</p>
        <div className="single_line"></div>
        <p className='resume_details'>Creative and detail-oriented web developer with expertise in designing responsive, user-friendly websites. Skilled in modern web technologies to bring innovative ideas to life."</p>
    </section>
    <div className="lg:ml-[300px] mb-[100px]">


        <div className="max-w-6xl mx-auto p-6 ">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
                {categories.map((category, index) => (
                <button
                    key={index}
                    onClick={() => setFilter(category)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition duration-300 ${
                    filter === category
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
                    }`}
                >
                    {category}
                </button>
                ))}
            </div>

            {/* Filtered Images */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                {filteredImages.map((image) => (
                <div key={image.id} className="overflow-hidden rounded-lg shadow-md">
                    <img
                    src={image.url}
                    alt={image.category}
                    className="w-full h-auto transition-transform duration-300 hover:scale-105"
                    />
                    <p className="text-center text-gray-700 mt-2 text-sm font-medium">
                    {image.category}
                    </p>
                </div>
                ))}
            </div>
            </div>
    </div>

    </>
  );
};

export default Filter;
