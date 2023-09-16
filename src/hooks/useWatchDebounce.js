import { useRef } from 'react';
import useWatch from './useWatch';

export default function useWatchDebounce(callback, deps, delay = 1000) {
  const timeoutHandler = useRef(null);

  useWatch(() => {
    if (timeoutHandler.current) {
      clearTimeout(timeoutHandler.current);
    }

    timeoutHandler.current = setTimeout(() => {
      callback();
    }, delay);
  }, deps);
}
