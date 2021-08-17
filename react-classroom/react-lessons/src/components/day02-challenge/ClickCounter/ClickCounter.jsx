import React, { useState } from 'react';

const ClickCounter = (props) => {
  //   let count = 0;
  const [count, setCount] = useState(0);
  const [isDisabled, setisDisabled] = useState(false);

  function handleClick(e) {
    console.log('Button was clicked');
    setCount(count + 1);
    if (count + 1 === 10) {
      setisDisabled(true);
    }
    console.log(count); //note that the count is always delayed in updating
  }
  return (
    <di>
      {/* {count < 10 ? <button onClick={handleClick}>CLICK ME</button> : null} */}
      <button onClick={handleClick} disabled={isDisabled}>
        CLICK ME
      </button>
      <p>Current Count: {count}</p>
      {count > 9 ? <p>you clicked too maby times</p> : null}
    </di>
  );
};

export default ClickCounter;
