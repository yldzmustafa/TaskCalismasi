function TaskCreate() {
    return ( 
        <div className="taskCreateDiv">
            <h3>Lütfen Task Ekleyiniz</h3>
            <form className="taskForm">
                <label className="taskLabel">Başlık</label>
                <input className="taskInput"/>
                <label className="taskLabel">Task Giriniz!</label>
                <textarea className="taskInput" rows={5}></textarea>
                <button className="taskButton">Oluştur</button>
            </form>
        </div> );
}

export default TaskCreate;