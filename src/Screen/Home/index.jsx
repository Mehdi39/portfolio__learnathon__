import React from 'react';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Encryption from './Components/Encryption';
import Projects from './Components/Projects';

const Home = () => {
  return (
    <div className='h-full w-full'>
        <div className='flex flex-col gap-20'>
            <Hero />
            <Skills />
            <Encryption />
            <Projects />  
        </div>
    </div>
  )
}

export default Home