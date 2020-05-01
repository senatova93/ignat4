import React from 'react';
import './App.css';
import Navbar from "./Components/navbar";
import Monday from "./Components/monday";
import Tuesday from "./Components/tuesday";

import {BrowserRouter, Route} from "react-router-dom";

class App extends React.Component {
    state = {
        names: [
            {title: "Markusha"},
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
