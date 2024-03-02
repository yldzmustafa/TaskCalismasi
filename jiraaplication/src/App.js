import { useState } from 'react';
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';

function App() {

  const [tasks, setTasks] = useState([]);


  const updateTaskByID = (id, updatedTitle, updatedTaskDesc) => {
    
    const updatedTask = tasks.map((task) => {
      if(task.id === id){
        return {
          id,
          title:updatedTitle, 
          taskDesc:updatedTaskDesc}
      }else{
        return task;
      }

    })

    setTasks(updatedTask)
  }

  const deleteTaskByID = (id) => {
    console.log(id);

    const afterDeleteTasks = tasks.filter((task) => {
      return task.id !== id
    })

    setTasks(afterDeleteTasks)
  }


  const createTask = (title, taskDesc) => {
    // console.log(title, taskDesc)

    const createdTasks = [
      ...tasks, {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc
      }
    ]
    setTasks(createdTasks)
    // setTasks([...tasks, {
    //   id: Math.round(Math.random() * 999999),
    //   title,
    //   taskDesc
    // }])
  }


  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskByID} onUpdate={updateTaskByID}/>
    </div>
  );
}

export default App;
