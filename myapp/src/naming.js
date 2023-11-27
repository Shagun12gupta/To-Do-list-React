import React, { useState } from 'react';

function Naming() {
  const [Name, setName] = useState('');
  const [Fname, setFname] = useState('');
  const [Bg, setBg] = useState('red');

  const changed = (event) => {
    setName(event.target.value);
  }

  const clicked = () => {
    setFname(Name);
  }

  const onMouseEnter = () => {
    setBg('purple');
  }

  const onMouseLeave = () => {
    setBg('red');
  }

  return (
    <div style={{ backgroundColor: Bg }}>
      <h1>Hello {Fname}</h1>
      <input type="text" placeholder="Enter Name" defaultValue="" onChange={changed} />
      <button onClick={clicked} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        Submit
      </button>
    </div>
  );
}

export default Naming;
