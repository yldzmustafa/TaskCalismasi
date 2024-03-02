import TaskCreate from "./TaskCreate";
import { useState } from "react";

function TaskShow({ task, onDelete, onUpdate }) {
    const [showEdit, setShowEdit] = useState(false)

    const handleDelete = () => {
        onDelete(task.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleUpdate = (id, updatedTitle, updatedTaskDesc) => {
        setShowEdit(false)
        onUpdate(id, updatedTitle, updatedTaskDesc)
    }
    console.log(task)
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