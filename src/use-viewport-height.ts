// This hook adds a CSS custom property --vh with the value of 1% of innerHeight
// .container {
//    height: calc(var(--vh, 1vh) * 100);
// }
import { useEffect } from 'react';

const VH_VARIABLE_NAME = '--vh';

export const useViewportHeight = (): number => {
  const currentViewportHeight = window.innerHeight * 0.01;

  useEffect(() => {
    document.documentElement.style.setProperty(VH_VARIABLE_NAME, `${currentViewportHeight}px`);

    return () => {
      document.documentElement.style.removeProperty(VH_VARIABLE_NAME);
    };
  }, []);

  return currentViewportHeight;
};
