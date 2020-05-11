import React from 'react';
import s from './tuesday.module.css';

class TodoListFooter extends React.Component {

    onAllFilterClick = () => { this.props.changeFilter("All")}
    onCompletedFilterClick = () => {this.props.changeFilter ("Completed")}
    onActiveFilterClick = () => {this.props.changeFilter ("Active")}

    render = () => {

        let classForAll = this.props.filterValue ==="All" ? "filter-active":"";
        let classForCompleted = this.props.filterValue ==="Completed" ? "filter-active":"";
        let classForActive = this.props.filterValue ==="Active" ? "filter-active":"";

        return (
            <div className={s.todoListFooter}>
                    <button onClick= {this.onAllFilterClick} className={classForAll}>All</button>
                    <button onClick= {this.onCompletedFilterClick} className={classForCompleted} >Completed</button>
                    <button  onClick= {this.onActiveFilterClick} className={classForActive}>Active</button>
            </div>

        );
    }
}

export default TodoListFooter;

