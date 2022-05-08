import React from 'react';
import images from '../../assets';
import './Quotes.style.scss';

function Quotes() {
  return (
    <div className='quotes'>
        <img src={images.path_pink2} alt='path_pink' className='path-pink' />
        <img src={images.astronout} alt='astronout' className='img-astronout' />
        <img src={images.circle_blue} alt='circle_blue' className='circle-blue' />
        <div className='quotes-content'>
            <p>
                <span>Definition: </span>
                 a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.
            </p>
            <p>-weekend team</p>
        </div>
    </div>
  )
}

export default Quotes