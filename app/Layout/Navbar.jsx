import Image from "next/image"
import Link from "next/link"
import React from "react"

const Navbar = () => {
  return (
    <header className="w-full h-auto flex justify-center items-center">
      <div className="w-[90%] flex items-center justify-between py-5">
        <div className="flex items-center justify-center gap-3">
          <Image alt="Logo" src={'/Logo.png'} width={2000} height={2000} className="w-[50px] h-auto" />
          <h1 className="text-[30px] font-bold">Coffeo</h1>
        </div>
        <div className="lg:hidden flex text-[16px] justify-center items-center gap-7">
          <Link href={'/'}>Products</Link>
          <Link href={'/'}>About</Link>
          <Link href={'/'}>Process</Link>
          <Link href={'/'}>Offers</Link>
        </div>
        <button className="lg:hidden rounded-[40px] text-[16px] transition-all ease-linear duration-300 border hover:bg-white hover:border-[#723d29] hover:text-[#723d29] bg-[#723d29] p-4 text-white">Get Started Now!</button>
      </div>
    </header>
  )
}
export default Navbar