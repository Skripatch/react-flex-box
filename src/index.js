import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { Flex } from './Flex';
import './style.css';

const App = () => {
  const [ name ] = React.useState('React');

  return (
    <Flex container="row-center-center-nowrap" className="containerWithPadding">
      <Hello name={name} />
      <Flex tagName="p" item="0-0-30%" className="containerWithPadding">Please tell me why I am bad?</Flex>
    </Flex>
  );
};

render(<App />, document.getElementById('root'));
