import React from 'react'
import { FaGithub, FaLinkedin,FaSkype } from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import pdfFile from '../pdf/Vartika_Resume.pdf'
function SocialLink() {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkdIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/vartika-bhatnagar/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GithHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/11vartika',

        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:bvartika09@gmail.com',

        },
        {
            id: 4,
            child: (
                <>
                    Skype <FaSkype size={30} />
                </>
            ),
            href: 'https://skype.com/profile',

        },
        {
            id: 5,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            
            href: pdfFile,
            style: 'rounded-br-md',
            download: true,

        },


    ]
    return (
        <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>


                {
                    links.map(({ id, child, href, style, download }) => (
                        <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + style}>


                            <a
                                href={href}
                                className='flex justify-between items-center w-full text-white'

                                download={download}
                                target='_blank'
                                rel="noreferrer"
                                >
                                    {child}
                            </a>

                        </li>

                    ))
                }




            </ul>



        </div>
    )
}

export default SocialLink