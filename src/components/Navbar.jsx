import React from 'react'
import LogoTab from '../assets/logo-tab.png';
import LogoMobile from '../assets/logo-mobile.png';

const Navbar = () => {
  return (
    <div className='navbar max-h-[140px] w-[1440px] bg-[#292929] py-[40px] '>
        <div className='text-box  '>
            <img src={LogoTab} alt="" className='logo-tab' width='193px' height='60px'/>
            <img src={LogoMobile} alt=""  className='logo-mobile'/>
        </div>
    </div>
  )
}

export default Navbar