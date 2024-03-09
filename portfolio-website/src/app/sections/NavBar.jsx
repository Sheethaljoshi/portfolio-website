import React from 'react'

const NavBar = () => {
  return (
    <nav>
        <div>
            <Link href={"/"} className="text-5xl text-white font-semibold">LOGO</Link>
        </div>
        <div className='menu'></div>
    </nav>
  )
}

export default NavBar