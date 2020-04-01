import React from 'react';

class Header extends React.Component {

    newNameTitleRef = React.createRef()


    onAddNameButtonClick = () => {
        let newText = this.newNameTitleRef.current.value
        this.newNameTitleRef.current.value = ""
        this.props.addName(newText)

    }

    render = () => {

        return (

            <div className="header">
                <h3 className="header__title">Entered Names</h3>
                <div className="todoList-newTaskForm">
                    <input type="text" placeholder="New  name" ref={this.newNameTitleRef}/>
                    <button onClick={this.onAddNameButtonClick}>Add</button>
                </div>
            </div>


        );
    }
}

export default Header;
