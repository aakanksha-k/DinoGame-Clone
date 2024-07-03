import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import dinoImage from '../public/images/dinosaur.png';

const DinoContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50px;
  width: 50px;
  height: 50px;
  background: url(${dinoImage}) no-repeat center/contain;
  transition: transform 0.2s;
`;

const Dino = () => {
  const [isJumping, setIsJumping] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === ' ' || e.key === 'ArrowUp') {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 500);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return <DinoContainer style={{ transform: isJumping ? 'translateY(-150px)' : 'translateY(0)' }} />;
};

export default Dino;


