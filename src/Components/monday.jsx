import React from 'react';
import s from './monday.module.css';
import Header from "./header";
import NewAddNames from "./newAddNames";

const Monday = (props) => {

    return <div className={s.monday}>

        <Header addName = {props.addName} />
        <NewAddNames names = {props.names}/>

    </div>

    }


export default Monday;
