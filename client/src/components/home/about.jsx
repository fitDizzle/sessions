import React from 'react';

const About = () => {
  const AboutContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '60%',
    flexWrap: 'wrap'
  };
  return (
    <div style={AboutContainerStyles}>
      <h1>About Sessions</h1>

      <h2>Interlude</h2>
      <p style={{ flexWrap: 'wrap' }}>Health Clubs around the world sell personal training sessions. Many of which, are purchased with high hopes and good intentions. However, hundreds of thousands of dollars (if not millions) go unused and often expire. That leaves thousands of club goers and fellow gymthusiasts in the red.</p>
      <h3>But wait!</h3>
      <p>Did you </p>
      <h2>What We Do</h2>
      <p></p>
    </div>
  );
};

export default About;