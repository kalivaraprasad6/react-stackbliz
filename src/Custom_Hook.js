import React from 'react';
import { useState, useEffect } from 'react';
import axios from Axios;
const Custom_Hook = () => {
  const [data, setData] = useState([]);
  const baseURL = 'https://jsonplaceholder.typicode.com/todos';
  useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((json) => setData(json));

    // axios.get(baseURL).then((response)=>{
    //   setData(response.data)
    // })
  }, []);
  
  return (
    <div>
      <h1>Todos List</h1>
      {data.map((Element) => {
        return <li>{Element.title}</li>;
      })}
    </div>
  );
};
export default Custom_Hook;
