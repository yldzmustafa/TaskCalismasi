import {useState} from 'react'

function TaskCreate({onCreate, task, taskFormUpdate, onUpdate}) {

    const [title, setTitle]         = useState(task ? task.title : '')
    const [taskDesc, setTaskDesc]   = useState(task ? task.taskDesc : '')

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleTaskChange = (event) => {
        setTaskDesc(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(taskFormUpdate){
            onUpdate(task.id, title, taskDesc)
        }else{
            onCreate(title, taskDesc)

        }
        setTitle('')
        setTaskDesc('')
    }

    return (
        <div>{taskFormUpdate ? 
            // Task update edilmek isteniyor ise
            <div className="taskUpdateDiv">
                <h3>Lütfen Taskı Düzenleyiniz!</h3>
                <form className="taskForm">
                    <label className="taskLabel">Başlığı Düzenleyiniz</label>
                    <input value={title} onChange={handleChange} className="taskInput"/>
                    <label className="taskLabel">Task Düzenleyiniz!</label>
                    <textarea value={taskDesc} onChange={handleTaskChange} className="taskInput" rows={5}></textarea>
                    <button onClick={handleSubmit} className="taskButton update-button">Düzenle</button>
                </form>
            </div> 
            :       
            // task create edilmek istendiğinde
            <div className="taskCreateDiv">
                <h3>Lütfen Task Ekleyiniz!</h3>
                <form className="taskForm">
                    <label className="taskLabel">Başlık</label>
                    <input value={title} onChange={handleChange} className="taskInput"/>
                    <label className="taskLabel">Task Giriniz!</label>
                    <textarea value={taskDesc} onChange={handleTaskChange} className="taskInput" rows={5}></textarea>
                    <button onClick={handleSubmit} className="taskButton">Oluştur</button>
                </form>
            </div> 
        }</div>
        );
}

export default TaskCreate;