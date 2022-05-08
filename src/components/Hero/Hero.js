import React from 'react';
import images from '../../assets';
import './Hero.style.scss';

function Hero() {
  return (
    <div className='hero'>
        <img src={images.wave_black} alt='wave_black' className='main-bg'/>
        <div className='decor-1'>
          <img src={images.wave_blue} alt='wave_blue' />
          <img src={images.circle_blue} alt='circle_blue' />
        </div>
        <img src={images.path_pink} alt='path_pink' className='decor-2' />

        <div className='hero-wrapper'>
          <h1>WEEKEND FROM HOME</h1>
          <h5>Stay active with a litle workout.</h5>
          <div className='hero-bottom'>
            <img src={images.astronout} alt='astronout'/>
            <button type='button' className='button'>Let's Go</button>
          </div>
        </div>
        
    </div>
  )
}

export default Hero