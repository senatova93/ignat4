import React from 'react';
import s from './tuesday.module.css';


class TodoListHeader extends React.Component {
    state= {
        error: false,
        title: ""

    }
    onKeyPress =  (e) => {
        if (e.key === "Enter") {
            this.onAddTaskButtonClick()}
}

onTitleChanged = (e) => {
        this.setState({title:e.currentTarget.value})
}



    onAddTaskButtonClick = () => {
        let newText = this.state.title;
        // this.newTaskTitleRef.current.value = "";
        if (newText !== ""){
        this.props.addTask(newText)
        this.setState({error:false , title:""})}
        else { this.setState ({error:true})}
        ;
    }
    render = () => {
        const inputClassName = this.state.error ? "error": ""
        return (
            <div className="TodoListHeader">
                <div className= {s.todoList}>

                    <h3 className= {s.TuesdayHeaderTitle}>What to Learn</h3>
                    <div className={s.todoListNewTaskForm}>
                        <input value= {this.state.title}
                               onChange={this.onTitleChanged}
                               onKeyPress = {this.onKeyPress}
                               className= {inputClassName}
                               type="text" placeholder="New task name"
                            />
                        <button onClick={this.onAddTaskButtonClick}>Add</button>
                    </div>

                </div>
            </div>

        );
    }
}

export default TodoListHeader;

