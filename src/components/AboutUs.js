import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>Welcome to <span className="charity-name">Shirki Donation Platform</span>! We are a dedicated team working towards <span className="charity-mission">providing sanitary towels to as many women as we can</span>. Our mission is to <span className="mission-statement">create positive, lasting change in the lives of individuals and communities</span>.</p>
      <p>At shiriki, we believe in the power of <span className="cause">showing kindness</span> and its impact on the world. Our team of passionate volunteers and professionals are committed to making a difference <span className="charity-approach">[Charity approach goes here]</span>.</p>
      <p className="values-heading">Our Values:</p>
      <ul className="values-list">
        <li><span className="value">Dependability:</span> At Shiriki, dependability is at the heart of everything we do. We understand the importance of trust when it comes to making a positive impact on the lives of those we serve. Our donors, partners, and beneficiaries can rely on us to consistently deliver on our promises and commitments. We operate with transparency and accountability, ensuring that resources are used efficiently and effectively. Dependability is not just a word for us; it's a value that guides our actions and decisions every step of the way.</li>
        <li><span className="value">Sustainability:</span> Sustainability is a fundamental pillar of our charity's mission. We recognize that our efforts should not only address immediate needs but also create lasting change. Our initiatives are designed with the long-term well-being of communities and the environment in mind. We work towards sustainable solutions that empower individuals and communities to thrive on their terms. Through careful planning, responsible resource management, and collaboration, we aim to leave a positive legacy that endures for generations to come.</li>
        <li><span className="value">Improvement:</span> At Shiriki, we are dedicated to continuous improvement in all aspects of our work. We believe that there is always room to grow and enhance our impact. We regularly evaluate our programs, projects, and processes to identify areas for refinement and innovation. Feedback from our beneficiaries, volunteers, and partners is invaluable in shaping our strategies for the better. By embracing change and learning from our experiences, we ensure that our charity remains relevant, effective, and adaptable to the evolving needs of the communities we serve.</li>
      </ul>
      <p className="what-we-do-heading">What We Do:</p>
      <p className="what-we-do-description">We bring together people from all walks of life in the hope of making a difference in the world. We aim to relieve poverty, improve healthcare, and advance arts and culture.</p>
      <p className="get-involved-heading">Get Involved:</p>
      <p>If you're as passionate about <span className="cause">menstrual healthcare</span> as we are, we invite you to join us on this journey. Whether you want to volunteer, donate, or spread the word, your support makes a real impact.</p>
      <div>
        {/* PayPal Donate Button */}
        <div id="donate-button-container">
          <div id="donate-button"></div>
          <script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" charset="UTF-8"></script>
          <script>
            {`
              PayPal.Donation.Button({
                env: 'production',
                hosted_button_id: 'WWPW4MDKB68ZU',
                image: {
                  src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
                  alt: 'Donate with PayPal button',
                  title: 'PayPal - The safer, easier way to pay online!',
                },
              }).render('#donate-button');
            `}
          </script>
        </div>

        {/* React Donate Button */}
        <a href="https://www.paypal.com/donate/?hosted_button_id=WWPW4MDKB68ZU" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-primary">Donate Now</button>
        </a>
      </div>
    </div>
  );
}

export default AboutUs;
