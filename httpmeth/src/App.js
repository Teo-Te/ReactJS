import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([])

   const get = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log(await response.json())
  }
  const getAxios = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log(response.data); 
        setData(response.data)
      
  }).catch(error => console.log(error))
  }

  const titles = data.map((posts) => {
    return <p>{posts.id}, {posts.title}</p>
  })

  return (
    <div className="App">
      <h1>HTTP Methods</h1>
      <button onClick={get}>Get data from API</button>
      <button onClick={getAxios}>Get data from API with Axios</button>
      {titles}
    </div>
  );
}

export default App;

