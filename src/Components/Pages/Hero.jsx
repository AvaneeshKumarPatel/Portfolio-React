import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import profileImage from '../../assets/geist.png';
import avtar   from '../../assets/Neutral Minimal Simple Elegant Quote Instagram Post.png';

// Array of languages
const texts = ['Avaneesh', '阿瓦尼什', 'अवनीशः', 'Аваниш',];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000); // Change text every 2 seconds
    return () => clearInterval(interval);   
  }, []);

  return (
    <div className=' w-[100%] max-md:w-[80%] max-sm:w-full  justify-center top-0 flex flex-row bg-[#0d0d0d] p-10 md:p-20  shadow-custom'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-3'>
          <p className='text-5xl text-gray-400 font-extrabold'>I&apos;m</p>
          <motion.h1
            key={texts[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className='text-5xl font-bold text-white'
          >
            {texts[index]}
          </motion.h1>
        </div>
        <p className='text-gray-400 text-lg leading-relaxed max-w-lg'>
          A Frontend Developer skilled in React.js, Tailwind CSS, and JavaScript, specializing in building 
          responsive and high-performance web applications. Focused on seamless user interactions and
          scalable architecture.
        </p>
        <div className='flex gap-4 mt-6'>
          <button className='px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition'>
            See my resume
          </button>
          <button className='px-6 py-3 bg-transparent border border-gray-600 text-white rounded-lg hover:bg-gray-700 transition'>
            Get in touch
          </button>
        </div>
      </div>
      <div className='mt-10 md:mt-0'>
        <img 
          src={profileImage} 
          alt='profile' 
          className='w-[288px] h-[344px] object-cover rounded-lg opacity-90'
         
        />
        <img 
          src={avtar} 
          alt='profile' 
          className='w-[288px] h-[344px]  object-cover  absolute top-[340px]'
          />
      </div>
    </div>
  );
};

export default Hero;

