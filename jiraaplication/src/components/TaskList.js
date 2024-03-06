import TaskShow from "./TaskShow";
import TasksContext from '../context/task';
import { useContext } from 'react';


function TaskList() {

    // Contexten listeleyeceğim taskları çekiyorum
    const { tasks } = useContext(TasksContext)

    return (<div className="tasks">
        {
            tasks.map((task, index) => {
                return <TaskShow key={index} task={task} />
            })
        }
    </div>);
}

export default TaskList;