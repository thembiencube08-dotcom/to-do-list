import React from 'react';
import ToDoList from './components/ToDoList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div className="App">

      <div className="top-bar">
        <h2>Thembelihle Hazel's Todo List</h2>

        <FontAwesomeIcon 
          icon={faListCheck} 
          className="todo-icon" 
        />
      </div>

      <ToDoList />
    </div>
  );
}

export default App;