import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>Welcome to <span className="charity-name">[Charity Name]</span>! We are a dedicated team working towards <span className="charity-mission">[Charity Mission]</span>. Our mission is to <span className="mission-statement">[Mission Statement]</span>.</p>
      <p>At <span className="charity-name">[Charity Name]</span>, we believe in the power of <span className="cause">[Cause]</span> and its impact on the world. Our team of passionate volunteers and professionals are committed to making a difference and <span className="charity-approach">[Charity's Unique Approach]</span>.</p>
      <p className="values-heading">Our Values:</p>
      <ul className="values-list">
        <li><span className="value">[Value 1]:</span> [Description]</li>
        <li><span className="value">[Value 2]:</span> [Description]</li>
        <li><span className="value">[Value 3]:</span> [Description]</li>
      </ul>
      <p className="what-we-do-heading">What We Do:</p>
      <p className="what-we-do-description">[Brief description of the charity's projects, initiatives, and activities]</p>
      <p className="get-involved-heading">Get Involved:</p>
      <p>If you're as passionate about <span className="cause">[Cause]</span> as we are, we invite you to join us on this journey. Whether you want to volunteer, donate, or spread the word, your support makes a real impact.</p>
      <button className="btn btn-primary">Donate Now</button>
      <button className="btn btn-secondary">Volunteer With Us</button>
    </div>
  );
}

export default AboutUs;
