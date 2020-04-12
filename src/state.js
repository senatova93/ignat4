export const addName = (newText) => {

    let newName = {title: newText}
    let newNames = [...state.names, newName]
    this.setState({
        names: newNames
    })

}

 let state = {
    names: [
        {title: "oooo"},
    ]}
//      addName: (newText) => {
//          let newName = {title: newText}
//          let newNames = [...state.names, newName]
//              state.names.push(newNames)
//
//      }
// }
//
// window.state = state
export default state;
