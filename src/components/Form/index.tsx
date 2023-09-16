import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import useWatch from '../../hooks/useWatch';

import './style.scss';

function Form() {
  const [name, setName] = useState<string>('');

  useWatch(() => {
    console.log('name', name);
  }, [name]);

  // function handleSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();

  //   console.log('event', event);
  // }

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
