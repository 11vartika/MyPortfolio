import React from 'react'

function About() {
  return (
    <div name="about"
      className='w-full h-screen bg-gradient-to-b from-gray-800
    to-black text-white'>
      <div
        className='max-w-screen-lg p-4 mx-auto flex flex-col 
      justify-center w-full h-full '>
        <div className='pb-6'>
          <p
            className='text-4xl font-bold inline border-b-4 
           border-gray-500 '> About</p>

        </div>

        <p className='text-xl mt-20'>
          A highly motivated and skilled JavaScript developer with over 1.9 years of experience building web
          applications. Proficient in React.js, Node.js, and other popular frameworks and libraries.Strong
          understanding of front-end development principles and best practices. Good problem-solving skills
          and the ability to work collaboratively in a team environment.
        </p>



      </div>
    </div>
  )
}

export default About