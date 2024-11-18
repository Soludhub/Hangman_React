import React, { useState, useEffect } from 'react';
import "./Gallow.css";

export default function AnimatedGallow() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isForward, setIsForward] = useState(true);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setCurrentFrame((prevFrame) => {
        if (isForward) {
          if (prevFrame >= 3) {
            setIsForward(false);
            return prevFrame - 1;
          }
          return prevFrame + 1;
        } else {
          if (prevFrame <= 0) {
            setIsForward(true);
            return prevFrame + 1;
          }
          return prevFrame - 1;
        }
      });
    }, 150);
    return () => clearInterval(animationInterval);
  }, [isForward]);

  return (
    <div className="gallow-div">
      <img 
        src={require(`../img/a${currentFrame}.png`)} 
        className="gallow-img" 
        alt={`Frame ${currentFrame}`} 
      />
    </div>
  );
}
