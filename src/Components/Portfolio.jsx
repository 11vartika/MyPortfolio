import React from 'react'

import weather from '../assests/weather.jpg'
import crud from '../assests/crud.jpg'
import bitcoin from '../assests/bitcoin.jpg'
import dashboard from '../assests/dashboard.jpg'

function Portfolio() {
    const data=[
        {
            id:1,
            src:crud,
            href:'https://github.com/11vartika/CRUD--PROJECT'

            
        },
        {
            id:2,
            src:weather,
            href:'https://github.com/11vartika/Weather'

            
        } ,
         {
            id:3,
            src:bitcoin ,
            href:'https://github.com/11vartika/bitcoin'

            
        } ,
         {
            id:4,
            src:dashboard,
            href:'https://github.com/11vartika/Dashboard-React-Js'}

            
        // } ,
        //  {
        //     id:5,
        //     src:lazy,
        //     link:''

            
        // }  ,
        // {
        //     id:6,
        //     src:lazy,
        //     link:''

            
        // } 
         
    ]
    return (
       <div name="portfolio" 
       className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:w-full '>

         <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'> Check out some of my work right here </p>
            </div>
             <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-14 mb-10 sm:px-0'>
                   
                   {
                    data.map(({id,src,href})=>(
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt=""  className='rounded-md duration-200 hover:scale-105 h-17 w-200 '/>
                        <div className='flex items-center justify-center'>
                            {/* <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button> */}
                            <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a  href={href}  target='_blank'> Code </a></button>
                        </div>
                    </div>

                    ))
                   }
                   
                </div>
         </div>
       </div>
    )
}

export default Portfolio