import React from 'react';
import s from './monday.module.css'

class Header extends React.Component {
    state = {
        error: false,
        title:""
    }
    onKeyPress =  (e) => {
        if (e.key === "Enter") {
            this.onAddNameButtonClick()}
    }
    onTitleChanged = (e) => {
        this.setState({title:e.currentTarget.value})
    }

    newNameTitleRef = React.createRef()


    onAddNameButtonClick = () => {

        let newText = this.state.title
        this.state.title = ""
        if (newText !==""){
        this.props.addName(newText)
            this.setState( {error:false, title: ""})}
        else { this.setState( {error:true})}

    }

    render = () => {
const inputClass = this.state.error ? "error" : ""


        return (

            <div className={s.header}>
                <h3 className={s.headerTitle}>All users names</h3>
                <div className="todoList-newTaskForm">
                    <input value = {this.state.title}
                           onChange = {this.onTitleChanged}
                           onKeyPress={this.onKeyPress}
                           className= {inputClass} type="text" placeholder= "New users name"
                           ref={this.newNameTitleRef}/>
                    <button className="button" onClick={this.onAddNameButtonClick}>Add </button>
                </div>
            </div>


        );
    }
}

export default Header;
