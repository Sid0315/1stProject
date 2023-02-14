import React from 'react';
import Common from './Common';
import web2 from '../src/Images/img2.png';

const About = () => {
  return (
    <>
     <Common
      text="Welcome to About Page"
      btn= "Contact Now"
      srcimg= {web2}
      visit = '/contact'
    />
    </>
  );
}
export default About;