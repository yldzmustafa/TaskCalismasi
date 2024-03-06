import { createContext } from "react";
import { useState } from 'react';
import axios from 'axios'

const TasksContext = createContext()

function Provider({children}){

    const [tasks, setTasks] = useState([]);

  const updateTaskByID = async(id, updatedTitle, updatedTaskDesc) => {

    const response = await axios.put(`http://localhost:3004/tasks/${id}`,{
      title:updatedTitle,
      taskDesc:updatedTaskDesc
    });
    // güncelleme yapıldıktan sonra güncel veriler fetchTasks fonksiyonu ile çekilebilir
    // fetchTasks();

    // yada güncellenmek istenen task bir diziye atılır ve set edilir.
    const updatedTask = tasks.map((task) => {
      if(task.id === id){
        return {
          id,
          title:updatedTitle, 
          taskDesc:updatedTaskDesc
        }
      }else{
        return task;
      }

    })
    setTasks(updatedTask)
    
  }

  const deleteTaskByID = async (id) => {
    console.log(id);
    const response = await axios.delete(`http://localhost:3004/tasks/${id}`);
    // sildikten sonra fetchTasks fonksiyonunu çağırıp güncel datayı render edebiliriz
    // fetchTasks();

    // yada manuel olarak eşleşme yöntemiyle dizi oluşturup render edebiliriz
    const afterDeleteTasks = tasks.filter((task) => {
      return task.id !== id
    })
    setTasks(afterDeleteTasks);
    
  }


  const createTask = async (title, taskDesc) => {
    // console.log(title, taskDesc)

    const response = await axios.post('http://localhost:3004/tasks',{
      title,
      taskDesc
    })

    console.log(response.data)

    // const createdTasks = [
    //   ...tasks, {
    //     id: Math.round(Math.random() * 999999),
    //     title,
    //     taskDesc
    //   }
    // ]

    const createdTasks = [
      ...tasks, 
      response.data
    ]
    setTasks(createdTasks)
    // setTasks([...tasks, {
    //   id: Math.round(Math.random() * 999999),
    //   title,
    //   taskDesc
    // }])
  }

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:3004/tasks');
    debugger;
    console.log(response);
    setTasks(response.data)
  }

  const sharedValuesandMethods={
    tasks,
    createTask,
    updateTaskByID,
    deleteTaskByID,
    fetchTasks
  }

    return <TasksContext.Provider value={sharedValuesandMethods}>
        {children}
    </TasksContext.Provider>

}

export {Provider}
export default TasksContext