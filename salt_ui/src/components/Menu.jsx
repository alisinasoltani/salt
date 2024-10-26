import React from 'react'
import Image from 'next/image'
import shop_icon from "../../public/icons/shop.svg"
import gallery_icon from "../../public/icons/gallery.svg"
import us_icon from "../../public/icons/us.svg"
import impacts_icon from "../../public/icons/impacts.svg"


const Menu = () => {
  return (
    <div className='flex flex-row justify-around items-center gap-2 px-6 py-4 bg-red-400
    w-full nipb md:text-xl text-lg font-bold absolute bottom-0'>
      <div className='flex flex-col gap-2 justify-center items-center'>
        <Image src={shop_icon} alt="salt shop icon" />
        <h3>Shop</h3>
      </div>
      <div className='flex flex-col gap-2 justify-center items-center'>
        <Image src={gallery_icon} alt="salt shop icon" />
        <h3>Gallery</h3>
      </div>
      <div className='flex flex-col gap-2 justify-center items-center'>
        <Image src={us_icon} alt="salt shop icon" />
        <h3>Us</h3>
      </div>
      <div className='flex flex-col gap-2 justify-center items-center'>
        <Image src={impacts_icon} alt="salt shop icon" />
        <h3>Impacts</h3>
      </div>
    </div>
  )
}

export default Menu;