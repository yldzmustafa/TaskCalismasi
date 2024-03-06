import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import TasksContext from './context/task';
import { useEffect, useContext } from 'react';
function App() {

  // Contextten method çekiyorum
  const {fetchTasks} = useContext(TasksContext)

  // UseEffect ile kayıtlı tskalrımı çekiyor ve compenenti çalıştırıyorum
  useEffect(() => {
    fetchTasks();
  }, [])


  return (
    <div className="App">
      <TaskCreate />
      <h1>Görevler</h1>
      <TaskList/>
    </div>
  );
}

export default App;
