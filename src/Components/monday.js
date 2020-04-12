import React from 'react';
import s from './navbar.module.css';
import newAddName from "./newAddName";
import Header from "./header";
import NewAddNames from "./newAddNames";

const Monday = (props) => {

    return <div>
        Monday
        <Header addName = {props.addName} />
        <NewAddNames names = {props.names}/>

    </div>

    }


export default Monday;
