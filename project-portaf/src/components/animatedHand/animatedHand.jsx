import React, { useState, useEffect } from 'react';

const animatedHand = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState('translateY(100%)');

  useEffect(() => {
    setTimeout(() => {
      setPosition('translateY(50%)');
    }, 1000); 

    setTimeout(() => {
      setPosition('translateY(100%)');
    }, 2000);
  }, []);

  return (
    <div style={{
      backgroundColor: 'black',
      height: "50%",
      width: "20%",
      alignSelf: 'center',
      position: 'absolute',
      bottom: 0,
      left: '40%',
      transform: position,
      transition: 'transform 1s ease-in-out' // Smooth transition for the animation
    }}>
    </div>
  );
}

export default animatedHand;
