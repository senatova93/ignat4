 let state = {
    names: [{title: "Markusha"}],
    tasks: [
        // {id: 0, title: "JS", isDone: true, priority: "high"},
        // {id: 1, title: "Angular", isDone: false, priority: "middle"},
        // {id: 2, title: "HTML", isDone: true, priority: "low"},
        // {id: 3, title: "CSS", isDone: true, priority: "low"},
        // {id: 4, title: "Java", isDone: false, priority: "low"},
        // {id: 5, title: "React", isDone: false, priority: "high"}
    ],
    filterValue: "All"

}


export const  saveState = () => {
        let stateAsString = JSON.stringify(this.state)
        localStorage.setItem('state', stateAsString)}

     export const   restoreState = () => {
            let stateAsString = localStorage.getItem('state')
            if (stateAsString) {
                let state = JSON.parse(stateAsString)
                this.setState(state)
            }
        }

export default state