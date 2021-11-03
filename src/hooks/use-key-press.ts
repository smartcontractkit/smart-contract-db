import { useState, useEffect } from 'react';

/**
 * Hook for detecting a which specific keys were pressed.
 * @param targetKey - key pressed
 * @returns {boolean}
 * @link source: https://usehooks.com/useKeyPress/
 */
export const useKeyPress = (targetKey: string) => {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState<boolean>(false);

  // If pressed key is our target key then set to true
  const downHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  };

  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
};
