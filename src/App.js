import React from 'react';
import './App.css';
import Header from "./Components/header";
import NewAddNames from "./Components/newAddNames";

class App extends React.Component {

    addName = (newText) => {

        let newName = {title: newText}
        let newNames = [...this.state.names, newName]
        this.setState({
            names: newNames
        })

    }

    state = {
        names: [
            {title: ""},
        ]
    }


    render = () => {
        return (
            <div className="App">
                <Header addName={this.addName}/>
                <NewAddNames names={this.state.names}/>

            </div>
        );
    }
}

export default App;
