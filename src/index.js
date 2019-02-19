import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { Flex } from './Flex';
import './style.css';

const App = () => {
  const [ name ] = React.useState('React');

  return (
    <Flex container="row_center_center_nowrap" className="containerWithPadding">
      <Hello name={name} />
      <Flex tagName="p" item="0_0_30%" className="containerWithPadding">Please tell me why I am bad?</Flex>
    </Flex>
  );
};

render(<App />, document.getElementById('root'));
