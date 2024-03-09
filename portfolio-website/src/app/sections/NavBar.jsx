"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const navLinks=[{
    title: "About",
    path: "#about"
},
{
    title: "Projects",
    path: "#projects"
},
{
    title: "Contact Me",
    path: "#contact"
}]

const NavBar = () => {
const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    
    <nav className='fixed right-0 left-0 top-0 bg-[#121212] opacity-100 z-10'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-6 py-6'>
            <Link href={"/"} className="text-2xl md:text-4xl text-white font-semibold">Sheethal's Portfolio</Link>
            <div className='block md:hidden mobile-menu'>
            {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
            </div>
        <div className='menu hidden md:block md:w-auto id="navbar"'>
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default NavBar