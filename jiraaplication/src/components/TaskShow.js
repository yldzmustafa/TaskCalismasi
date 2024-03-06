import TaskCreate from "./TaskCreate";
import { useState, useContext } from "react";
import TasksContext from '../context/task';

function TaskShow({ task }) {

    // Contextten value ve method çekiyorum
    const { tasks, deleteTaskByID, updateTaskByID } = useContext(TasksContext)

    const [showEdit, setShowEdit] = useState(false)

    const handleDelete = () => {
        // onDelete(task.id);
        deleteTaskByID(task.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleUpdate = (id, updatedTitle, updatedTaskDesc) => {
        setShowEdit(false)
        // onUpdate(id, updatedTitle, updatedTaskDesc)
        updateTaskByID(id, updatedTitle, updatedTaskDesc)
    }
    // console.log(task)
    return (

        <div className="task-show">
            {showEdit ?
                <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleUpdate}/>
                :
                <div>
                    <h3 className="task-title">Göreviniz</h3>
                    <p>{task.title}</p>
                    <h3>Yapılacaklar</h3>
                    <p>{task.taskDesc}</p>
                    <div>
                        <button className="task-delete-btn" onClick={handleDelete}>Sil</button>
                        <button className="task-edit-btn" onClick={handleEditClick}>Güncelle</button>
                    </div>
                </div>
            }

        </div>
    );
}

export default TaskShow;