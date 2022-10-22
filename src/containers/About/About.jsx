import React from 'react'
import { AppWrapper } from '../../Wrappers';
import { views } from '../../constants';
import { motion } from 'framer-motion';

import './About.scss'



const About = () => {

  const bouts = [
    {
      title: 'Website developer', description: 'I am a good web developer', imgUrl: views.about04
    },
    {
      title: 'Back end development', description: 'I am a good back end developer', imgUrl: views.about05
    },
    {
      title: 'Front end development', description: 'I am a good front end developer', imgUrl: views.about03
    },
    {
      title: 'Website animations', description: 'I am a good web developer', imgUrl: views.about01
    },
  
    {
      title: 'Website design', description: 'I am a good web developer', imgUrl: views.about02
    },
    {
      title: 'UI/UX design', description: 'I am a good web developer', imgUrl: views.about06
    },
  
  ];

  

  return (
    <>
    <motion.div className="heading" whileInView={{opacity: [0,1]}} transition={{duration: 1, delayChildren:0.9}}>
    <p>About</p>
    <h2>I sleep at peace when i have no bugs</h2>
    <h3> I code for my brain and my heart</h3>
    </motion.div>


    <div className="App_profiles">
        {bouts.map((about,index) =>(
          <motion.div whileInView={{opacity: 1}} whileHover={{scale: 1.1}} transition={{duration: 0.9, type: 'tween'}}className='App_profile-item' key={about.title + index}>
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>

          <p className='p-text' style={{marginTop: 10}}>{about.description}</p>

           <span className="line"></span>
          </motion.div>
        ))}
        
      </div>

    </>
  )
}

export default AppWrapper(About, 'about', 'app__bg-1');