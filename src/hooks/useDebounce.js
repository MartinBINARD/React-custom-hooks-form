import { useEffect, useState } from 'react';

function useDebounce(value, delay = null) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
    console.log('useDebounce', value, delay);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
