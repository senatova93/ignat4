import React from 'react';
import s from './tuesday.module.css';
class TodoListTask extends React.Component {
    state = {
        isEditMode: false
    };
    activatedEditMode = () => {
        this.setState({isEditMode: true})
    };
    deactivatedEditMode = () => {
        this.setState({isEditMode: false})
    };
    onIsDoneChanged = (e) => {
        this.props.changeStatus(e.currentTarget.checked, this.props.task.id)
    }


    onIsTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value)
    }

    deleteTask = () => {
        this.props.deleteTask(this.props.task.id)
    }

    render = (props) => {
        const taskClassName = this.props.task.isDone
            ? "todoList-task done "
            : "todoList-task"
        return (
            <div className={taskClassName}>
                <button onClick={this.deleteTask}> Del </button>
                <input type="checkbox"
                       checked={this.props.task.isDone}
                       onChange={this.onIsDoneChanged}/>
                {this.state.isEditMode
                    ? <input className={s.smallInput} value={this.props.task.title}
                             autoFocus={true}
                             onBlur={this.deactivatedEditMode}
                             onChange={this.onIsTitleChanged}/>
                    : <span onClick={this.activatedEditMode}>{this.props.task.id}:{this.props.task.title}</span>

                }

                <span> priority: {this.props.task.priority} </span>

            </div>

        );
    }
}

export default TodoListTask;

