import { useState, useCallback, useEffect, useRef } from 'react';

export const useFocusTrap = (
  size: number,
  initialFocus: number = -1
): [number, React.Dispatch<React.SetStateAction<number>>] => {
  const [currentFocus, setCurrentFocus] = useState(initialFocus);

  const handleKeyDown = useCallback(
    (e) => {
      const keyUp = e.keyCode === 38;
      const keyDown = e.keyCode === 40;

      if (size) {
        if (keyDown) {
          // Down arrow
          e.preventDefault();
          setCurrentFocus((currentFocus) => (currentFocus === size - 1 ? 0 : currentFocus + 1));
        } else if (keyUp) {
          // Up arrow
          e.preventDefault();
          setCurrentFocus((currentFocus) => (currentFocus === 0 ? size - 1 : currentFocus - 1));
        }
      }
    },
    [currentFocus, setCurrentFocus]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [handleKeyDown]);

  return [currentFocus, setCurrentFocus];
};
