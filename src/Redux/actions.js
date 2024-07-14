export const addTodo = (data) =>{
    return{
        type: 'todoList/addTodo',
        payload: data
    }
}

export const searchTodo = (text) =>{
    return{
        type: 'filters/searchTodo',
        payload: text
    }
}