import React from 'react';
import html from '../assests/html.jpg';
import javascript from '../assests/javascript.jpg';
import  es6 from '../assests/es6.jpg';
import css from '../assests/css.jpg';
import react from '../assests/react.jpg';
import node from '../assests/node.jpg'
import express from '../assests/express.jpg'
import Bootstarp from '../assests/bootstrap.jpg'
import  redux from '../assests/redux.jpg'
import mysql from '../assests/mysql.jpg'


function Experience() {
  const tech=[
    {
      id:1,
      src:javascript,
      title:'Javascript',
      style:'shadow-yellow-500'
    },
    {
      id:2,
      src:es6,
      title:'ES6+',
         style:'shadow-yellow-500'
    }, 
    {
      id:3,
      src:html,
      title:' HTML',
         style:'shadow-orange-500'
    }, 
    {
      id:4,
      src:css,
      title:'CSS ',
         style:'shadow-blue-500'
    },
     {
      id:5,
      src:react,
      title:' React JS',
         style:'shadow-blue-500'
    }, 
    {
      id:6,
      src:redux,
      title:'Redux ',
         style:'shadow-purple-500'
    },
     {
      id:7,
      src:express,
      title:'Express JS ',
         style:'shadow-yellow-500'
    },
     {
      id:8,
      src:node,
      title:'Node JS ',
         style:'shadow-green-500'
    },  {
      id:10,
      src:mysql,
      title:'MySql ',
         style:'shadow-orange-500'
    }
  ]
  return (
    <div name='experience'   className='bg-gradient-to-b from-gray-800
    to-black w-full  h-screen '>
      <div className='max-w-screen-lg mx-auto  p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold  border-b-4 border-gray-500 p-2 inline' >
          Experience
          </p>
          <p className='py-6'>These are  the technologies I've worked with </p>
        </div>
        <div className='w-full grid grid-cols-2 
            sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
              {
                tech.map(({id,src,title,style})=>(
                  <div  key={id}className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                  <img src={src} alt='' className='w-20 mx-auto'/>
                  <p className='mt-4'>{title}</p>
                </div>

                ))
              }
           
              </div>
      </div>
        </div>

  )
}

export default Experience