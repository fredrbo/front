import React from 'react';
import './App.css';
import { Text } from './components/Text/';
import { Number } from './components/Number/';
import { Body } from './components/Body/';
import { Main } from './pages/main/main';

function App() {
  return (
    <>
      <div className='center'>
        <Body>
          <Main></Main>
        </Body>
      </div>
    </>
  );
}

export default App;
