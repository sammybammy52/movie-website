import React from 'react'
import Desktop from '../assets/desktop.png'
import Tab from '../assets/tab.png';
import Mobile from '../assets/mobile.png';

const Hero = () => {
  return (
    <div className='hero-img'>
        <img src={Desktop} alt="" className='desktop-img' />
        <img src={Tab} alt=""  className='tab-img'/>
        <img src={Mobile} alt="" className='mobile-img'/>
        <div className='hero-text '>
            <h3 className='text1 text-white'>Watch something incredible</h3>

    
        </div>
        
    </div>
  )
}

export default Hero