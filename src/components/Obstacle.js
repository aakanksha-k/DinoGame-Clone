import React from 'react';
import styled from 'styled-components';
import cactusImage from '../Assets/cactus.png';
import birdImage from '../Assets/bird.png';

const ObstacleContainer = styled.div`
  position: absolute;
  bottom: ${props => (props.type === 'bird' ? '200px' : '0')};
  left: ${props => props.position}px;
  width: 50px;
  height: 50px;
  background: ${props => (props.type === 'cactus' ? `url(${cactusImage})` : `url(${birdImage})`)} no-repeat center/contain;
  transition: right 0.2s linear;
`;

const Obstacle = ({ type, position }) => {
  return <ObstacleContainer type={type} position={position} />;
};

export default Obstacle;



