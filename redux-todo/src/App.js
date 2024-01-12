import React from 'react';
import './App.css';
import Navbar from './Navbar';
import AddTask from './AddTask';
import TodoList from './TodoList';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tasksReducer from './TaskReducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {PersistGate} from 'redux-persist/es/integration/react';

const App = () => {

  const persistConfig = {
    key: 'root',
    storage

  }

  const persistedReducer = persistReducer(persistConfig, tasksReducer);
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  return (
    <div className="App">
      <h1>Redux Todo App</h1>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navbar />
          <AddTask />
          <TodoList />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
