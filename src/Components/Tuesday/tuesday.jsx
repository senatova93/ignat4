import React from 'react';
import s from './tuesday.module.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

const Tuesday = (props) => {
    debugger
    return <div className={s.tuesday}>
        <h3 className={s.headerTitle}>All users names</h3>
        <TodoListHeader addTask={props.addTask}/>
        <TodoListTasks

            changeTitle={props.changeTitle}
            changeStatus={props.changeStatus}
            tasks={props.tasks.filter((tasks) => {
                switch (props.filterValue) {
                    case "All":
                        return true;
                    case "Completed":
                        return tasks.isDone;
                    case "Active":
                        return !tasks.isDone;
                    default:
                        return true
                }

            })}/>
        <TodoListFooter changeFilter={props.changeFilter}
            // filterValue={this.state.filterValue}
        />
    </div>

}

export default Tuesday;
