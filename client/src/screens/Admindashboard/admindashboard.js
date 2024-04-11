import React from 'react';
import '../Admindashboard/admin.css'
// import background from './banner.png'

const Admindashboard = () => {
  return (
    <div className='banner-bg'>
      <div style={{ flex: 1 }} className='text-box'>
      <h1 >Everything you need to build a great company</h1> 
  <p style={{}}>Core HR is your people enabler.  From automation of people processes to creating an engaged and driven culture, Core HR is all you need to build a good to great company.</p>
      </div>

      {/* Image  of the CoreHr on the right side */}
      <div style={{ flex: 1 }}>
        <img src='https://d2w2i7rp1a0wob.cloudfront.net/static/images/home/hero-home.svg' alt='banner'/>
      </div>
     
    </div>
  );
};

export default Admindashboard;
