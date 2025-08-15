import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
         <div className='text-gray-500/80 pt-8 px-6 mt-30 md:px-16 lg:px-24 xl:px-32 '>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                <div className='max-w-80'>
                    <img src={assets.logo} alt="logo" className='mb-4 h-8 md:h-9' />
                    <p className='text-sm'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    </p>
                    <div className='flex items-center gap-3 mt-6'>
                        <a href='#' > <img src={assets.facebook_logo} alt="" className='w-5 h-5'/></a>
                         <a href='#' > <img src={assets.instagram_logo} alt="" className='w-5 h-5'/></a>
                          <a href='#' > <img src={assets.twitter_logo} alt="" className='w-5 h-5'/></a>
                           <a href='#' > <img src={assets.gmail_logo} alt="" className='w-5 h-5'/></a>
                    </div>
                </div>

                <div>
                    <p className='text-lg text-gray-800'>Quick Links</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Browse Car</a></li>
                        <li><a href="#">List Your car</a></li>
                        <li><a href="#">About us</a></li>
                    </ul>
                </div>

                <div>
                    <p className='text-lg text-gray-800'>SUPPORT</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Safety Information</a></li>
                        <li><a href="#">Cancellation Options</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Accessibility</a></li>
                    </ul>
                </div>
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} <a href="#">CarRental</a>. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer