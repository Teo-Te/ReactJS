import React from 'react';
import './App.css';
import B from './B';
import A from './A';
import C from './C';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './Reducer';

function App() {

  const store = createStore(Reducer);

  return (
    <div className="App">
      <h1>Payload</h1>
      <Provider store={store}>
        <A />
        <B />
        <C />
      </Provider>
    </div>
  );
}

export default App;
