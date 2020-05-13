import React from "react";


export const saveState = (key, value) => {
    let stateAsString = JSON.stringify(value)
    localStorage.setItem(key, stateAsString)
}

export const restoreState = (key, value) => {
    let stateAsString = localStorage.getItem(key)
    if (stateAsString) {
        value = JSON.parse(stateAsString)
    }
    return value
}

