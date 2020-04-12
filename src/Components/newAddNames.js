import React from 'react';
import NewAddName from "./newAddName";

class NewAddNames extends React.Component {

    render = (props) => {

        let namesElements = this.props.names.map((name) => {
            debugger
            return <NewAddName
                title={name.title}/>
        })


        return (
            <div className="Names">
                <div className="name">
                {namesElements}

                </div>
            </div>


        );
    }
}

export default NewAddNames;
