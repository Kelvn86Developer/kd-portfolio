import React from 'react';
import {BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa'; 

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div className='social'>
        <BsTwitter/>
      </div>
      <div className='social'>
        <BsInstagram/>
      </div>
      <div className='social'>
        <FaFacebookF/>
      </div>
      <div className='social'>
        <BsLinkedin/>
      </div>
    </div>
  )
}

export default SocialMedia