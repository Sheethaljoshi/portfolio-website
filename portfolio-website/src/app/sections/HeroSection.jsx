"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'>Hi, I'm {" "}</span><br/>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Sheethal Joshi',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'a Web Developer',
                            1000,
                            'an ML Engineer',
                            1000,
                            'a Content Writer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        /></h1>
                <p className="text-[#ADB7BE] text-small sm:text-lg  mb-6 lg:text-xl">
                I'm a tech-loving sophomore at CUSAT SOE. I'm all about Web Dev and ML, mixing innovation with creativity. When I'm not coding, I'm either lost in fantasy novels or enjoying mac and cheese with a rom-com.
                </p>
                <div>
                    <button className='px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white '>Hire Me</button>
                    <button className='px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span
                        ></button>
                </div>
            </div>
            <div className='col-span-5'>
                <div className="rounded-full mx-auto mt-6 bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                    src="/images/hero-image.png"
                    alt='Sheethal'
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={300}
                    height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
export default HeroSection