import React from 'react';
import s from './monday.module.css'

class newAddName extends React.Component {

    render = () => {

        return (
            <div className={s.names}>
                <div className={s.name}>
                    <span> {this.props.title}</span>
                </div>
            </div>


        );
    }
}

export default newAddName;
