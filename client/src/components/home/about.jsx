import React from 'react';

const About = () => {
  const AboutContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyConent: 'space-evenly',
    width: '60%',
    flexWrap: 'wrap',
    height: '100vh'
  };

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyConent: 'space-evenly',
    width: '60%',
    flexWrap: 'wrap',
    paddingBottom: '32px',
  };

  const aboutHeadingStyles = {
    paddingTop: '16px',
    paddingBottom: '16px',
  };

  const aboutTextStyles = {
    paddingTop: '5px',
    paddingBottom: '5px'
  };

  return (
    <div style={AboutContainerStyles}>
      <div style={containerStyles}>
        <h1 style={aboutHeadingStyles}>Have you ever tried to cancel a gym membership?</h1>
        <h3 style={aboutTextStyles}>Health Clubs and many other wellness related businesses have become notorious for their complex and nearly impossible cancellation process that ends up costing consumers hundreds, if not thousands of dollars each year. In fact, only an average of 3% of paid health club memberships are used on a consistant bases.</h3>
      </div>

      <div style={containerStyles}>
        <h1 style={aboutHeadingStyles}>Can you imagine what it's like for Personal Training sessions and other wellness related sessions?</h1>
        <h3 style={aboutTextStyles}>Hundreds of thousands of dollars (if not millions of dollars) of purchased and unused sessions linger in the wind, while the consumer is out of their money for their unused purchases.</h3>
      </div>

      <div style={containerStyles}>
        <h1 style={aboutHeadingStyles}>Sessions is the solution!</h1>
        <h3 style={aboutTextStyles}>Many consumers are not aware, that they maintain the ability to transfer their purchased sessions and in some cases even memberships to someone else. Sessions provides a marketplace for people to list their unused wellness related sessions and for others to find sessions they might be interested in purchasing, often times for a lower rate of what they would pay. </h3>
      </div>
    </div>
  );
};

export default About;