import { useState } from 'react';
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (title, taskDesc) => {
    // console.log(title, taskDesc)

    const createdTasks =[
      ...tasks,{
        id:Math.round(Math.random()*999999),
        title,
        taskDesc
      }
    ]

    setTasks(createdTasks)
    // setTasks(...tasks, {
    //   id:Math.round(Math.random()*999999),
    //   title,
    //   taskDesc
    // })
  }
  return (
    <div className="App">
      <TaskCreate onCreate={createTask}/>
      <h1>Görevler</h1>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
