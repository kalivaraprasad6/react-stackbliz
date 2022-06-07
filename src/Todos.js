import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Todos = () => {
  const [todos, setTodos] = useState([]);

  const url = 'https://jsonplaceholder.typicode.com/todos';

  useEffect(() => {
    // axios.get(url).then((response) => {
    //   setTodos(response.data);
    // });

    fetch(url)
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  return (
    <div>
      <h1>Todos List</h1>

      {todos.map((Element) => {
        return (
          <div>
            
            <li>{Element.title}</li>
          </div>
        );
      })}
    </div>
  );
};
export default Todos;
