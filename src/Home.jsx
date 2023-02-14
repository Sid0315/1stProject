import React from 'react';
import web from '../src/Images/img1.png';
import Common from './Common';


const Home = () => {
  return (
    <>
    <Common
      text="Grow your business with"
      btn= "Get Started"
      srcimg={web}
      visit = '/service'

    />
    </>
  );
}
export default Home;