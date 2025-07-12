import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div id="service" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">What I Offer</h4>
      <h2 className="text-center text-5xl font-ovo">My Services</h2>
      <p className="text-center mx-auto mt-5 mb-12 max-w-2xl font-ovo">
            I am a passionate full-stack developer with experience in building
            modern, responsive web and mobile applications. I enjoy solving
            complex problems, learning new technologies, and creating clean,
            maintainable code. My goal is to deliver high-quality software that
            provides a great user experience and helps businesses grow.
          </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10
'>
            {serviceData.map(({icon, title, description, link},index)=>(
                <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:-translate-y-1 duration-500 cursor-pointer bg-primary-hover '>
                    <Image src={icon} alt='' className='w-10'/>
                    <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                    <p className='text-sm text-gray-500 leading-5'>
                        {description}
                    </p>
                    <a href={link} className='text-sm mt-5 flex items-center gap-2'>
                        Read more <Image src={assets.right_arrow} alt='read more' className='w-4'/>
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services