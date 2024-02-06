import React from 'react';
import { Link } from 'react-scroll';

const HeroLinkElement = () => {
    const scrollOptions = {
        duration: 100, // Scroll duration in milliseconds
        offset: -100, // Scroll offset (positive or negative) from the top of the target element
        smooth: true, // Enable smooth scrolling
        spy: true, // Enable active state on navigation based on scroll position
        hashSpy: true, // Enable active state on navigation based on hash changes
      };
    return (
        <Link to="targetElement" {...scrollOptions}
        className="bg-[#4355FF] text-center lg:mt-6 block w-48 pl-9 lg:pl-0 lg:w-48 2xl:w-56 p-[9px] lg:p-3 
        text-sm lg:text-base 
        rounded-[25px] cursor-pointer
         hover:bg-blue-700 text-white transition-all ease-in duration-200">
         مشاوره رایگان
        </Link>
    );
};

export default HeroLinkElement;