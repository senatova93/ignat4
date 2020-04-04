import React from 'react';

class Header extends React.Component {
    state = {
        error: false
    }
    onKeyPress =  (e) => {
        if (e.key === "Enter") {
            this.onAddNameButtonClick()}
    }

    newNameTitleRef = React.createRef()


    onAddNameButtonClick = () => {
        let newText = this.newNameTitleRef.current.value
        this.newNameTitleRef.current.value = ""
        if (newText !==""){
        this.props.addName(newText)
            this.setState( {error:false})}
        else { this.setState( {error:true})}

    }

    render = () => {
const inputClass = this.state.error ? "error" : ""

        return (

            <div className="header">
                <h3 className="header__title">Entered Names</h3>
                <div className="todoList-newTaskForm">
                    <input onKeyPress={this.onKeyPress} className= {inputClass} type="text" placeholder="New  name" ref={this.newNameTitleRef}/>
                    <button className="button" onClick={this.onAddNameButtonClick}>Add</button>
                </div>
            </div>


        );
    }
}

export default Header;
