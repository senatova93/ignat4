import React from 'react';
import './App.css';
import Header from "./Components/header";
import NewAddNames from "./Components/newAddNames";
import Navbar from "./Components/navbar";
import Monday from "./Components/monday";
import Tuesday from "./Components/tuesday";
import Route from "react-router-dom/es/Route";

import {BrowserRouter} from "react-router-dom";
import state from "./state";
class App extends React.Component {
    state = {
        names: [
            {title: "oooo"},
        ]
    }
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
                        {/*<Header addName={addName}/>*/}
                        {/*<NewAddNames names={state.names/>*/}
                        <Route path = '/monday' render={(props) => <Monday  addName={this.addName}  names={this.state.names}/>}></Route>
                        <Route path = '/tuesday' component={Tuesday}></Route>

                    </div>


                </div>
            </BrowserRouter>
        );
    }
}

export default App;
