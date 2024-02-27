import React, { useEffect, useState } from 'react'
import List from './components/List';
import axios from 'axios';
import { baseURL } from './utils/constant';

const App = () => {

  const [input, setInput] = useState(" ");
  const [tasks, setTasks] = useState([]);
  const [updateUi, setUpdateUI] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/get`)
      .then((response) => { 
        console.log(response.data);
        setTasks(response.data);
      })
      .catch((error) => { console.log(error) })
  }, [updateUi]);

  const addTask = () => {
    axios.post(`${baseURL}/save`, {task: input})
      .then((response) => { 
        console.log(response.data) 
        setInput("");
        setUpdateUI((prevState) => !prevState);
      })
      .catch((error) => { console.log(error) 
    })
  };

  const updateMode = (id, text) => {
    setInput(text);
    setUpdateId(id);
  };

  const updateTask = () => {
    axios.put(`${baseURL}/update/${updateId}`, {task: input})
      .then((response) => {
        console.log(response.data);
        setUpdateUI((prevState) => !prevState);
        setUpdateId(null);
        setInput("");
    });
  };

  return (
    <div className='main-container'>
      <main>
        <h1>CRUD Operations</h1>

      <div className="input">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" onClick={updateId ? updateTask : addTask}>
          {updateId ? "Update Task" : "Add Task" }
        </button>
      </div>

      <ul>
        {tasks.map(task => 
          <List key={task._id} id={task._id} task={task.task} setUpdateUI={setUpdateUI} updateMode={updateMode} />
        )}
      </ul>
    </main>
  </div>
    
  )
}

export default App