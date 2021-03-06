import React from 'react';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = () => {

        let taskElements = this.props.tasks.map((t) => {
            return <TodoListTask
                deleteTask={this.props.deleteTask}
                task={t}
                changeStatus={this.props.changeStatus}
                changeTitle={this.props.changeTitle}/>
        })


        return (
            <div className="todoList-tasks">

                {taskElements}


            </div>
        );
    }
}

export default TodoListTasks;

