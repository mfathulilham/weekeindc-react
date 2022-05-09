import React, { useEffect, useState } from 'react'
import SimpleSlider from '../Slider/SimpleSlider';
import images from '../../assets/index';
import './Content.style.scss';

const TESTIMONIAL_API = 'https://wknd-take-home-challenge-api.herokuapp.com/testimonial';
const HELP_API = 'https://wknd-take-home-challenge-api.herokuapp.com/help-tips';


function Content() {
  const [testimonials, setTestimonials] = useState([]);
  const [helps, setHelps] = useState([]);

  useEffect(() => {
    getTestimonial(TESTIMONIAL_API);
    getHelpAndTips(HELP_API);
  }, []);

  const getTestimonial = (API) => {
    fetch(API)
        .then(res => res.json())
        .then(data => {
          setTestimonials(data);
        });
  }
  const getHelpAndTips = (API) => {
    fetch(API)
        .then(res => res.json())
        .then(data => {
          setHelps(data);
        });
  }

  return (
    <div className='content'>
      <img data-aos="fade-up-right" src={images.path_pink4} alt='path_pink' className='path-pink4' />
      <img data-aos="fade-up-right" src={images.astronout} alt='astronout' className='astronout'/>
      
      <div data-aos="fade-right" className='testimonial'>
        <h1 className='title'>Testimonial</h1>
        <div className='card-wrapper'>
          <SimpleSlider>
            { testimonials?.map((testimonial) => (
              <div key={testimonial.id} className='card'>
                <h1>{testimonial.by}</h1>
                <p>{testimonial.testimony}</p>
              </div>
            ))}
          </SimpleSlider>      
        </div>
      </div>

      <div data-aos="fade-up-left" className='pov'>
        <h1>POV</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      
      <div data-aos="fade-up-right" className='resource'>
        <h1>Resource</h1>
        <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best</p>
      </div>
      
      <div data-aos="fade-left" className='help'>
          <h1>Help &amp; Tips</h1>
          <img data-aos="fade-up-right" src={images.path_pink3} alt='path_pink' className='path-pink3' />
          
          <div className='card-wrapper'>
              { helps?.map((help) => (
                <div key={help.id} className='card' style={{ backgroundImage: `url(${help.image})`, backgroundSize: 'cover'}}>
                  <div className='link-container'>
                      <h5>{help.title}</h5>
                      <img src={images.icon_arrow_circle} alt={help.slug} className='icon-link' />
                  </div>
              </div>
              ))}              
          </div>
      </div>

      <div data-aos="fade-down-right" className='set'>
          <h1>You're all set.</h1>
          <p>The wise man therefore always holds in these matters to this principle of selection.</p>
      </div>
    </div>
  )
}

export default Content;