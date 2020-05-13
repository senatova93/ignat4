//  let state = {
//     names: [{title: "Markusha"}],
//     tasks: [
//         // {id: 0, title: "JS", isDone: true, priority: "high"},
//         // {id: 1, title: "Angular", isDone: false, priority: "middle"},
//         // {id: 2, title: "HTML", isDone: true, priority: "low"},
//         // {id: 3, title: "CSS", isDone: true, priority: "low"},
//         // {id: 4, title: "Java", isDone: false, priority: "low"},
//         // {id: 5, title: "React", isDone: false, priority: "high"}
//     ],
//     filterValue: "All"
//
// }


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

