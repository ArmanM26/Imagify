import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "framer-motion"

const Testimonals = () => {
  return (
    <motion.div 
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center my-24 py-12'> 
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Customer Terminals</h1>
      <p className='text-gray-500 mb-8'>Whats Our Users Are Saying</p>

      <div className='flex flex-wrap gap-6 '>
        {testimonialsData.map((testimonals, index) => (
          <div key={index} className='bg-white/20 p-12 rounded-lg shadow-md order w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all'>
            <div>
              <img src={testimonals.image} alt="" className='rounded-full w-14'/>
              <h2 className='text-xl font-semibold mt-3'>{testimonals.name}</h2>
              <p className='text-gray-500 mb-4'>{testimonals.role}</p>
              <div className='flex mb-4'>
                {Array(testimonals.stars).fill().map((item, index) => (
                  <img key={index} src={assets.rating_star} alt="" />
                ))}
              </div>
              <p className='text-center text-sm text-gray-600'>{testimonals.text}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonals
