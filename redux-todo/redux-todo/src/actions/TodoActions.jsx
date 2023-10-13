export const AddTodoAction = (todo) => (dispatch, getState) => {
    // its gonna take todo from our application and its gonna add it to our state
    // getState to access the state inside of the action
    const {
        Todo: { todos },
        // todos is the whole redux state
    } = getState();

    const hasTodo = todos.find((i) => i.todo === todo);

if(!hasTodo && todo !== '') {
    dispatch({
        type: "ADD_TODO",
        payload:[{ id: todo, todo }, ...todos]
    })
}

}

export const RemoveTodoAction = (todo) => (dispatch, getState) => {
    const {
        Todo: { todos}
    } = getState();

    dispatch({
        type:"REMOVE_TODO" ,
        payload: todos.filter((t) => t.id !== todo.id),
    })
}

