/* eslint-disable */
import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import s from './test.module.scss';
import { StyledEngineProvider } from '@mui/material/styles';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <StyledEngineProvider injectFirst>
        <p>You clicked {count} times</p>
        <Button className={s.warning} variant="contained" onClick={() => setCount(count + 1)}>
          Click me
        </Button>
        <button className={s.warning}>btn2</button>
      </StyledEngineProvider>
    </div>
  );
}

export default Counter;
