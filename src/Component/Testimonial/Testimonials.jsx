import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay for continuous sliding
import "swiper/css";
import "swiper/css/autoplay";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sara Wilsson",
      role: "Designer",
      image: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      quote:
        "I was blown away by the website [Your Name/Business] developed for my business. From the initial consultation to the final launch, the entire process was seamless. They understood exactly what I needed, provided expert advice, and delivered a beautiful, fast, and user-friendly site. Highly recommended for anyone looking for professional web development services!",
    },
    {
      name: "Jena Karlis",
      role: "Store Owner",
      image: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      quote:
        "I was blown away by the website [Your Name/Business] developed for my business. From the initial consultation to the final launch, the entire process was seamless. They understood exactly what I needed, provided expert advice, and delivered a beautiful, fast, and user-friendly site. Highly recommended for anyone looking for professional web development services!",
    },
    {
      name: "Matt Brandon",
      role: "Freelancer",
      image: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      quote:
        "I was blown away by the website [Your Name/Business] developed for my business. From the initial consultation to the final launch, the entire process was seamless. They understood exactly what I needed, provided expert advice, and delivered a beautiful, fast, and user-friendly site. Highly recommended for anyone looking for professional web development services!",
    },
    {
      name: "John Larson",
      role: "Entrepreneur",
      image: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      quote:
       "I was blown away by the website [Your Name/Business] developed for my business. From the initial consultation to the final launch, the entire process was seamless. They understood exactly what I needed, provided expert advice, and delivered a beautiful, fast, and user-friendly site. Highly recommended for anyone looking for professional web development services!",
    },
    {
      name: "Emily Parker",
      role: "Photographer",
      image: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      quote:
        "I was blown away by the website [Your Name/Business] developed for my business. From the initial consultation to the final launch, the entire process was seamless. They understood exactly what I needed, provided expert advice, and delivered a beautiful, fast, and user-friendly site. Highly recommended for anyone looking for professional web development services!",
    },
    {
      name: "Michael Doe",
      role: "Web Developer",
      image: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      quote:
        "I was blown away by the website [Your Name/Business] developed for my business. From the initial consultation to the final launch, the entire process was seamless. They understood exactly what I needed, provided expert advice, and delivered a beautiful, fast, and user-friendly site. Highly recommended for anyone looking for professional web development services!",
    },
    {
      name: "Sophia Adams",
      role: "Graphic Designer",
      image: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      quote:
       "I was blown away by the website [Your Name/Business] developed for my business. From the initial consultation to the final launch, the entire process was seamless. They understood exactly what I needed, provided expert advice, and delivered a beautiful, fast, and user-friendly site. Highly recommended for anyone looking for professional web development services!",
    },
    {
      name: "David Clark",
      role: "Content Writer",
      image: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      quote:
       "I was blown away by the website [Your Name/Business] developed for my business. From the initial consultation to the final launch, the entire process was seamless. They understood exactly what I needed, provided expert advice, and delivered a beautiful, fast, and user-friendly site. Highly recommended for anyone looking for professional web development services!",
    },
    {
      name: "Isabella Taylor",
      role: "Marketing Specialist",
      image: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      quote:
      "I was blown away by the website [Your Name/Business] developed for my business. From the initial consultation to the final launch, the entire process was seamless. They understood exactly what I needed, provided expert advice, and delivered a beautiful, fast, and user-friendly site. Highly recommended for anyone looking for professional web development services!",
    },
    {
      name: "Daniel Cooper",
      role: "SEO Analyst",
      image: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      quote:
      "I was blown away by the website [Your Name/Business] developed for my business. From the initial consultation to the final launch, the entire process was seamless. They understood exactly what I needed, provided expert advice, and delivered a beautiful, fast, and user-friendly site. Highly recommended for anyone looking for professional web development services!",
    },
    {
      name: "Olivia Scott",
      role: "Product Manager",
      image: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      quote:
        "I was blown away by the website [Your Name/Business] developed for my business. From the initial consultation to the final launch, the entire process was seamless. They understood exactly what I needed, provided expert advice, and delivered a beautiful, fast, and user-friendly site. Highly recommended for anyone looking for professional web development services!",
    },
    {
      name: "James Brown",
      role: "Software Engineer",
      image: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      quote:
       "I was blown away by the website [Your Name/Business] developed for my business. From the initial consultation to the final launch, the entire process was seamless. They understood exactly what I needed, provided expert advice, and delivered a beautiful, fast, and user-friendly site. Highly recommended for anyone looking for professional web development services!",
    },
    {
      name: "Ava Martinez",
      role: "HR Manager",
      image: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      quote:
       "I was blown away by the website [Your Name/Business] developed for my business. From the initial consultation to the final launch, the entire process was seamless. They understood exactly what I needed, provided expert advice, and delivered a beautiful, fast, and user-friendly site. Highly recommended for anyone looking for professional web development services!",
    },
    {
      name: "Lucas Miller",
      role: "Data Scientist",
      image: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      quote:
        "I was blown away by the website [Your Name/Business] developed for my business. From the initial consultation to the final launch, the entire process was seamless. They understood exactly what I needed, provided expert advice, and delivered a beautiful, fast, and user-friendly site. Highly recommended for anyone looking for professional web development services!",
    },
    {
      name: "Mia White",
      role: "UX Designer",
      image: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      quote:
        "I was blown away by the website [Your Name/Business] developed for my business. From the initial consultation to the final launch, the entire process was seamless. They understood exactly what I needed, provided expert advice, and delivered a beautiful, fast, and user-friendly site. Highly recommended for anyone looking for professional web development services!",
    },
  ];

  return (
<>
    <div className="lg:ml-[320px] sm:p-[20px]">
          <h2 className="text-[30px] font-Montserrat font-bold">Testimonials</h2>
          <div className="single_line"></div>
          <p className="text-gray-600 mt-4 service_details">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
          </p>
    </div>

    <div className="bg-blue-50 py-10 lg:ml-[320px]">
      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          speed={5000} // Adjust speed for smooth continuous sliding
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-gray-600 italic mb-4">
                  <span className="text-blue-500 text-xl">&ldquo;</span>
                  {testimonial.quote}
                  <span className="text-blue-500 text-xl">&rdquo;</span>
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-gray-900 font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </>
  );
};

export default Testimonials;
