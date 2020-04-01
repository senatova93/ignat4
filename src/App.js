import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/header";
import NewAddNames from "./Components/newAddNames";

class App extends React.Component {

    addName = (newText) => {

        let newName = {title: newText}
        let newNames = [...this.state.names,newName]
        this.setState( {
            names:newNames
        })

    }

    state = {
        names: [
            {title: ""},
       ]
    }



// addTask = (newText) => {
//
//     let newTask = {
//         names: newText,
//     };
//     let newTasks = [...this.state.namesArr, newTask]
//     this.setState( {
//         names: newTasks
//     })}


render = () => {
    return (
        <div className="App">
            <Header addName = {this.addName}/>
            {/*<div className="header">*/}
            {/*    <h3 className="header__title">Entered Names</h3>*/}
            {/*    <div className="todoList-newTaskForm">*/}
            {/*        <input type="text" placeholder="New  name" ref={this.newNameTitleRef}/>*/}
            {/*        <button onClick={this.onAddNameClick}>Add</button>*/}
            {/*    </div>*/}
            {/*</div>*/}


            <NewAddNames names={this.state.names}/>

        </div>
    );
}}

export default App;
