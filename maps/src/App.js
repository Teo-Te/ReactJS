import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';
import './App.css';

const App = () => {
  const [num, setNum] = useState([1,2,3,4,5,6,7,8,9,10])
  const [string, setString] = useState(['a','b','c','d','e','f','g','h','i','j'])
  const [cunat, setCunat] = useState([{name: 'TEO', age: 19},{name: 'Arteo', age: 19},{name: 'Teo', age: 20}])
  const [input, setInput] = useState('')
 
  const listcunat = cunat.map((cunat) => {
    return <div>
      <h1>{cunat.name}</h1>
      <h2>{cunat.age}</h2>
    </div>
  })

  const nums = num.map((num) => {
    return <h1>{num}</h1>
  })
  const strings = string.map((string) => {
    return <h1>{string}</h1>
  })

  const add = () => {
    const inputs = JSON.parse(localStorage.getItem('inputs') || '[]')
    const inputing = {
      input: input
    }
    inputs.push(inputing)
    
    localStorage.setItem('inputs', JSON.stringify(inputs))
  }
  return (
    <div className="App">
     {nums}
     {strings}
     {listcunat}
     {
      (() => {
        if (cunat.length > 1) {
          return <h1>More than 1</h1>
        } else {
          return <h1>Less than 1</h1>
        }
      })()
     }
     <input type="text" placeholder='test' value={input} onChange={(e) => {setInput(e.target.value)}}/>
     <button onClick={add}>Add</button>
    </div>
  );
}

export default App
