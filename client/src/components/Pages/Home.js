import React from 'react';
import '../../App.css';
import Mainsection from '../mainSection/Mainsection';
import Posts from '../Posts/Posts';
import Footer from './Footer';
import './Home.css'


function Home() {
  return (
    <>
    
      <Mainsection/>
    
    <div className="talel">
      <Posts/>  
    </div>
    <div>
      <Footer/>   
    </div>
    </>
  );
}

export default Home;