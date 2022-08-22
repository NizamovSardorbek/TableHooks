export default (state, action)=>{
switch (action.type) {
    case "add":
        return [ ...state, {id:Date.now(), title :action.payload}]

    case "remove":
    return state.filter((value)=>value.id !==action.payload)
    default:
       return state
}


}
