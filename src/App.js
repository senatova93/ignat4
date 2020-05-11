import React from 'react';
import './App.css';
import Navbar from "./Components/NavBar/navbar";
import Monday from "./Components/Monday/monday";
import Tuesday from "./Components/Tuesday/tuesday";

import {BrowserRouter, Route} from "react-router-dom";

class App extends React.Component {
    state = {
        names: [{title: "Markusha"}],
        tasks: [
            {id: 0, title: "JS", isDone: true, priority: "high"},
            {id: 1, title: "Angular", isDone: false, priority: "middle"},
            {id: 2, title: "HTML", isDone: true, priority: "low"},
            {id: 3, title: "CSS", isDone: true, priority: "low"},
            {id: 4, title: "Java", isDone: false, priority: "low"},
            {id: 5, title: "React", isDone: false, priority: "high"}
        ],
        filterValue: "All"
    }
    nextTaskId = 0;

    // saveState = () => {
    //     let stateAsString = JSON.stringify(this.state);
    //     localStorage.setItem("state", stateAsString)}
    //
    // restoreState = () => {
    //     let state = {
    //         tasks: [],
    //         filterValue: "All"
    //     }
    //     let stateAsString = localStorage.getItem("state");
    //     if (stateAsString) {
    //         state = JSON.parse(stateAsString);
    //     }
    //     this.setState(state, () => {this.state.tasks.forEach(t =>{
    //         if(t.id >= this.nextTaskId){
    //             this.nextTaskId= t.id + 1
    //         }
    //     })
    //     });
    // }
    // componentDidMount() {
    //     this.restoreState()
    // }
    //
    //
    // addTask = (newText) => {
    //
    //     let newTask = {
    //         title: newText,
    //         isDone: true,
    //         priority: "low",
    //         id: this.nextTaskId
    //     };
    //     this.nextTaskId++
    //     let newTasks = [...this.state.tasks, newTask]
    //     this.setState({tasks: newTasks}, this.saveState)
    // }
    // changeFilter = (newFilterValue) => {
    //     this.setState({filterValue: newFilterValue})
    // }
    // changeTask = (taskId, obj) => {
    //     let tasksCopy = this.state.tasks.map(t => {
    //         if (t.id === taskId) {
    //             return {...t, ...obj}
    //         }
    //         return t
    //     });
    //     this.setState(
    //         {tasks: tasksCopy}, this.saveState)}
    //
    //
    // changeStatus = (taskId, isDone) => {
    //     this.changeTask(taskId, {isDone: isDone})
    // }
    //
    // changeTitle = (taskId, title) => {
    //     this.changeTask(taskId, {title: title})
    // }


    addName = (newText) => {

        let newName = {title: newText}
        let newNames = [...this.state.names, newName]
        this.setState({
            names: newNames
        })

    }


    render = () => {
        return (
            <BrowserRouter>
                <div className="App-wrapper">
                    <Navbar/>
                    <div className="app-wrapper-content">

                        <Route path='/monday'
                               render={(props) => <Monday addName={this.addName} names={this.state.names}/>}/>
                        <Route path='/tuesday' render={(props) => <Tuesday addTask={this.addTask}
                                                                           changeFilter={this.changeFilter}
                                                                           filterValue={this.state.filterValue}
                                                                           changeTitle={this.changeTitle}
                                                                           changeStatus={this.changeStatus}
                                                                           tasks={this.state.tasks.filter((tasks) => {
                                                                               switch (this.state.filterValue) {
                                                                                   case "All":
                                                                                       return true;
                                                                                   case "Completed":
                                                                                       return tasks.isDone;
                                                                                   case "Active":
                                                                                       return !tasks.isDone;
                                                                                   default:
                                                                                       return true
                                                                               }


                                                                           })}


                        />}/>

                    </div>


                </div>
            </BrowserRouter>
        );
    }
}

export default App;