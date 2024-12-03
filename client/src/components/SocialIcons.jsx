import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const linkData = [
    {
        icon: <FaFacebook />,
        href:"https://www.facebook.com/ashiq1711" ,
    },
    {
        icon: <FaInstagramSquare />,
        href: "https://www.instagram.com/ashiq_11.17/",
    },
    {
        icon: <FaGithub />,
        href: "https://github.com/Ashiq1711",
    },
    {
        icon: <FaLinkedin />,
        href: "https://www.linkedin.com/in/robiul-islam-ashiq-5081b2194/",
    },
]
const SocialIcons = () => {
  return (
    <div className='flex gap-4'>
        {linkData?.map((item, index) => (
            <a className='text-2xl p-2 rounded-full border hover:border-white hover:text-white duration-300' key={index} href={item?.href} target="_blank" rel="noopener noreferrer">{item?.icon}</a>
        ))}
    </div>
  )
}

export default SocialIcons