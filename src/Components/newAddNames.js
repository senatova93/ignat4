import React from 'react';
import NewAddName from "./newAddName";
import s from './monday.module.css'


class NewAddNames extends React.Component {

    render = (props) => {

        let namesElements = this.props.names.map((name) => {

            return <NewAddName
                title={name.title}/>
        })


        return (
            <div className= {s.names}>
                <div className={s.name}>
                {namesElements}

                </div>
            </div>


        );
    }
}

export default NewAddNames;
