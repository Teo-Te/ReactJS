import React from 'react';
import Navvbar from './Navvbar';
import Body from './Body';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <div className="text-center">
      <BrowserRouter>
        <Navvbar />
        
          <Routes>
            <Route path='/' exact element={<Body/>}/>
            <Route path="/dashboard" exact element={<Dashboard/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
