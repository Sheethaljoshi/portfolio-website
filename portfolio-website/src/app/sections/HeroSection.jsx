import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center'>
                <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-6xl font-extrabold">Hi, I'm Sheethal</h1>
                <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
                I'm a tech-loving sophomore at CUSAT SOE. I'm all about Web Dev and ML, mixing innovation with creativity. When I'm not coding, I'm either lost in fantasy novels or enjoying mac and cheese with a rom-com.
                </p>
                <div className='mb-5'>
                    <button className='px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black '>Hire Me</button>
                    <button className='px-6 py-3 rounded-full bg bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>Download CV</button>
                </div>
            </div>
            <div className='col-span-5'>
                <div className="rounded-full mx-16 bg-[#181818] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] relative">
                    <Image
                    src="/images/hero-image.png"
                    alt='Sheethal'
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={250}
                    height={250}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
export default HeroSection