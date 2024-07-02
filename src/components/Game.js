import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Dino from './Dino';
import Obstacle from './Obstacle';

const GameContainer = styled.div`
  width: 800px;
  height: 400px;
  background: #f7f7f7;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #ccc;
  background-repeat: repeat-x;
`;

const Score = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 24px;
  color: #333;
`;

const GameOver = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 36px;
  color: #333;
`;

const Game = () => {
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [obstacles, setObstacles] = useState([]);
  const [dinoY, setDinoY] = useState(350); // Dino's vertical position

  // Function to spawn obstacles with a delay
  const spawnObstacle = (type) => {
    setObstacles((obstacles) => [
      ...obstacles,
      { id: Date.now(), type, position: 800 },
    ]);
  };

  // Effect to increment score every second
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isGameOver) {
        setScore((score) => score + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isGameOver]);

  // Effect to spawn obstacles at different intervals
  useEffect(() => {
    const spawnCactus = setInterval(() => {
      if (!isGameOver) {
        spawnObstacle('cactus');
      }
    }, 3000);

    const spawnBird = setInterval(() => {
      if (!isGameOver) {
        spawnObstacle('bird');
      }
    }, 6000);

    return () => {
      clearInterval(spawnCactus);
      clearInterval(spawnBird);
    };
  }, [isGameOver]);

  const checkCollision = useCallback(() => {
    const dinoRect = { x: 50, y: dinoY, width: 50, height: 50 };

    obstacles.forEach((obstacle) => {
      const obstacleRect = {
        x: obstacle.position,
        y: obstacle.type === 'bird' ? 200 : 350,
        width: 50,
        height: 50,
      };
      if (
        dinoRect.x < obstacleRect.x + obstacleRect.width &&
        dinoRect.x + dinoRect.width > obstacleRect.x &&
        dinoRect.y < obstacleRect.y + obstacleRect.height &&
        dinoRect.y + dinoRect.height > obstacleRect.y
      ) {
        setIsGameOver(true);
      }
    });
  }, [obstacles, dinoY]);

  // eslint-disable-next-line
  const handleJump = () => {
    if (!isGameOver && dinoY === 350) {
      setDinoY(200); // Move dino up
      setTimeout(() => setDinoY(350), 500); // Move dino back down after 500ms
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === ' ' || e.key === 'ArrowUp') {
        handleJump();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleJump]);

  useEffect(() => {
    const updateGame = () => {
      if (!isGameOver) {
        setObstacles((obstacles) =>
          obstacles.map((obs) => ({ ...obs, position: obs.position - 10 }))
        );
        checkCollision();
      }
    };

    const interval = setInterval(updateGame, 100);

    return () => clearInterval(interval);
  }, [checkCollision, isGameOver]);

  return (
    <GameContainer>
      <Score>Score: {score}</Score>
      {isGameOver && <GameOver>Game Over! Final Score: {score}</GameOver>}
      <Dino y={dinoY} />
      {obstacles.map((obstacle) => (
        <Obstacle key={obstacle.id} type={obstacle.type} position={obstacle.position} />
      ))}
    </GameContainer>
  );
};

export default Game;

