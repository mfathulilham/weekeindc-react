import React from 'react';
import './Header.style.scss';
import images from '../../assets/index'

function Header() {
  return (
    <header>
        <div className='header-wrapper'>
            <img src={images.ava} width='33' alt='ava'/>
            <span className='header-content'>
                <h5 className='header-title'>Good Morning</h5>
                <h5 className='header-desc'>Fellas</h5>
            </span>
        </div>
    </header>
  )
}

export default Header