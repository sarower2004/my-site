import React, { useState, useEffect } from "react";

const Banner = () => {
  const roles = ["I'm a Developer!","I'm a Designer!", "I'm a Photographer!" ];
  const [text, setText] = useState(""); // Current displayed text
  const [isDeleting, setIsDeleting] = useState(false); // Tracks typing or deleting
  const [roleIndex, setRoleIndex] = useState(0); // Tracks current role
  const [typingSpeed, setTypingSpeed] = useState(100); // Typing speed in ms

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      
      if (!isDeleting) {
        // Typing mode
        setText((prev) => currentRole.substring(0, prev.length + 1));
        setTypingSpeed(100); // Typing speed
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }
      } else {
        // Deleting mode
        setText((prev) => currentRole.substring(0, prev.length - 1));
        setTypingSpeed(50); // Faster deleting speed
        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length); // Move to next role
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer); // Clear timeout on unmount
  }, [text, isDeleting, roles, roleIndex, typingSpeed]);

  return (
    <div className="w-full lg:w-[calc(100%-300px)] h-screen bg-[url('/images/banner4.png')] bg-cover bg-center lg:ml-[300px] relative">
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold uppercase">
          Md Sarower Jahan
        </h1>
        <p className="mt-4 text-sm sm:text-base lg:text-xl font-semibold">
          {text}
          <span className="text-white font-bold blink-cursor">|</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
