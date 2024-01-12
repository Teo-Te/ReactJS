import React from 'react';
import './App.css';
import Context from './Context';
import Firstcomponent from './Firstcomponent';
import Secondcomponent from './Secondcomponent'; 

const App = () => {
  return (
    <div className="App">
      <Context>
        <Firstcomponent />
        <Secondcomponent />
      </Context>
    </div>
  );
}

export default App;
