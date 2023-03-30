import React, { useState } from 'react';
import { GlobalStyle } from './styles';
import { Button } from './components/Button';

const api = window.electron;

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleCounter = (): void => {
    setCount(count + 1);
    api.send('counter', { message: `Yout count: ${count}` });
  };

  return (
    <>
      <GlobalStyle />
      <h1>Welcome to Pixelino!</h1>
      <Button action={handleCounter} text={`Increment: ${count}`} />
    </>
  );
};

export default App;
