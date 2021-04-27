const ToDo = function(){

    const [tasks, setTasks] = React.useState({
        list: [],
        html: '',
        button: null
    });

    const complete = function(event){
        if (event.target.classList.contains('complete') == true) {
            event.target.classList.remove('complete')
        } else {
            event.target.classList.add('complete');
        }
    };

    const save = function(event) {
        if (event.code != 'Enter') return;
        const inputValue = event.target.value;
        const task = event.target.closest('div');
        task.innerHTML = inputValue;
    };

    const edit = function(event) {
        const task = event.target.closest('li').querySelector('.task');
        const inputValue = task.innerHTML;
        task.innerHTML = '';
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', 'editTask');
        input.value = inputValue;
        task.appendChild(input);
        input.focus();
        input.addEventListener('keyup', save);
    }

    const clearAll = function(event) {
        setTasks({
            list: [],
            html: '',
            button: null
        });
    }

    const remove = function(event) {
        let index = event.target.dataset.index;

        let tasksArray = tasks.list;

        tasksArray.splice(index, 1);


        let tasksHtml = tasksArray.map(function(task, index) {
            return <li onClick={complete} key={index}><div className="task">{task}</div><button onClick={edit} className="edit_btn">edit</button><button data-index={index} onClick={remove} className="delete_btn">x</button></li>;
        });

        if (tasksArray.length == 0) {
            setTasks({
                list: tasksArray,
                html: tasksHtml,
                button: null
            });
        } else {
            setTasks({
                ...tasks,
                list: tasksArray,
                html: tasksHtml
            });
        }

    };

    const add = function(event){
        if (event.code != 'Enter') return;
        const inputValue = event.target.value;
        const tasksArray = tasks.list;
        tasksArray.push(inputValue);
        event.target.value = '';

        let tasksHtml = tasksArray.map(function(task, index) {
            return <li onClick={complete} key={index}><div className="task">{task}</div><button onClick={edit} className="edit_btn">edit</button><button data-index={index} onClick={remove} className="delete_btn">x</button></li>;
        });

        setTasks({
            list: tasksArray,
            html: tasksHtml,
            button: <button className="clear_all_btn" onClick={clearAll}>Clear All</button>
        });
    };

    return (
        <div className="todo">
            <div className="todo_title">ToDoList</div>
            <div className="todo_tasks">
                <input name="task" type="text" placeholder="Type your task" onKeyPress={add} />
                <ul className="todo_tasks_list">{tasks.html}</ul>
                {tasks.button}
            </div>
        </div>
    )
};

ReactDOM.render(
    <ToDo />,
    document.querySelector('#app')
);