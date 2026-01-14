import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='fixed flex items-center justify-between w-full py-6 px-5 lg:px-8 xl:px-[8%] z-50'>
            <Link href="#top">
                {/* <Image src={assets.logo} alt="logo" width={50} height={50}
                className='w-28 cursor-pointer mr-14'/> */}
                <h3 className='cursor-pointer font-bold uppercase mr-10 text-2xl'>Omar Khaled</h3>
            </Link>

            <ul className='hidden md:flex items-center gap-6 lg:gap-8 font-medium px-12 py-3 rounded-full'>
                <li><Link href="#top">Home</Link></li>
                <li><Link href="#about">About me</Link></li>
                <li><Link href="#services">Services</Link></li>
                <li><Link href="#myWork">My Work</Link></li>
                <li><Link href="#contact">Contact me</Link></li>
            </ul>

            <div >
                <Link href="#contact" className='hidden lg:flex items-center gap-2 px-10 bg-black text-white font-medium py-3 rounded-full border hover:bg-transparent hover:text-black hover:border hover:border-black transition-colors'>
                    Contact
                    <Image src={assets.arrow_icon} alt="arrow up right" width={15} height={15}
                    className='w-3 '/>
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar