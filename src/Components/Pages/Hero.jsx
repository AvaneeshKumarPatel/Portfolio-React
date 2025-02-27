import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// Array of languages
const texts = ['Avaneesh', '阿瓦尼什', 'अवनीशः', 'Аваниш', 'اونیش']

const Hero = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % texts.length)
    }, 2000) // Change text every 2 seconds
    return () => clearInterval(interval)
  }, [])

  return (
   
      <div className=' w-[100%] max-md:w-[80%] max-sm:w-full  justify-center top-0 flex flex-col bg-[#0d0d0d] shadow-custom'>
        <div className='flex items-center gap-1'>
          <p className='text-5xl gap-2 text-darkgray font-bold'>I&apos;m</p>
          <section className=''>
            <div className='text-white'>
              <motion.h1
                key={texts[index]} // Key ensures animation triggers on text change
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className='text-5xl font-bold'
              >
                {texts[index]}
              </motion.h1>
            </div>
          </section>
        </div>

        <div>
          <p className='font-serif pt-8 text-darkgray'>
          A Frontend Developer builds responsive user interfaces using React.js, Tailwind CSS, 
          and JavaScript. They focus on performance,<br></br> accessibility, and a scalable codebase.
           With expertise in state management, they enhance user interactions and integrate with backend systems.
          </p>
          <button className=' w-[180px] h-[50px] bg-dark-gradient text-white  mt-9 ml-1 py-2 px-4 rounded'>
            See My Resume
          </button>
        </div>
      </div>
  
  )
}

export default Hero
