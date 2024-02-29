function TaskShow({task, onDelete}) {

    const handleDelete = () => {
        onDelete(task.id);
    }

    console.log(task)
    return ( <div className="task-show">
        <h3 className="task-title">Göreviniz</h3>
        <p>{task.title}</p>
        <h3>Yapılacaklar</h3>
        <p>{task.taskDesc}</p>
        <div>
            <button className="task-delete-btn" onClick={handleDelete}>Sil</button>
            <button className="task-edit-btn">Güncelle</button>
        </div>
    </div> );
}

export default TaskShow;