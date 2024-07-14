
export const todoListSelector = (state) => {
    const todoRemaining = state.todoList.filter(todo =>{
        return todo.name.toLowerCase().includes(state.filters.search);
    }
    )
    return todoRemaining
}



