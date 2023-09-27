import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';

import useWatch from '../../hooks/useWatch';
import useWatchDebounce from '../../hooks/useWatchDebounce';
import useDebounce from '../../hooks/useDebounce';

function Form() {
  const [name, setName] = useState<string>('');
  const debounce = useDebounce(name);
  console.log('debounce', debounce);

  useWatch(() => {
    console.log('watcher name', name);
  }, [name]);

  // Fetch API (optional)
  // useEffect(() => {
  //   // Do fetch here...
  //   // Triggers when "debouncedValue" changes
  // }, [debouncedValue]);

  // Render name 1s after user stop typing
  // useWatchDebounce(() => {
  //   console.log('debounce name', name);
  // }, [name]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    event.stopPropagation();
    setName(event.target.value);
  }

  return (
    <form className="form">
      <input
        value={name}
        onChange={handleChange}
        className="form-name"
        type="text"
        name="name"
        placeholder="Your name"
      />
      <p className="form-display">My name is {name}</p>
      <button className="form-button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
