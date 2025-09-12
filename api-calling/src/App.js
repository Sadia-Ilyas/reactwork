import {useState, useEffect } from 'react';
import { GetPosts } from './api';
import './App.css';

function App() {

  const [data, setData]= useState(null);

  useEffect(() =>{
    GetPosts().then(posts => setData(posts)) ;
  }, []);
  return (
    <div className="App">
    {
       data ? data.map((e) => <li>{e.title}</li>): <p>No Data</p>
    }
    </div>
  );
};

export default App;
