const initState = {
    filters: {
        search: ''
    },
    todoList: [ // Hiển thị thông tin ra
        { id: 1, name: "Learn React" },
        { id: 2, name: "Learn Redux" },
        { id: 3, name: "Learn .Net" },
        { id: 4, name: "Learn English" },
        { id: 5, name: "Learn Fe" },
    ]
};
//Khởi tạo rootReducer với 2 đối số state và action
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo': // Nếu được gọi bởi action addTodo
            return {
                ...state,
                todoList: [...state.todoList, action.payload] // Thực hiện xử lý thêm dữ liệu vào state
            };
        case 'filters/searchTodo':
             return {
                ...state,
                filters:{
                    ...state.filters,
                    search: action.payload 
                }
            }
        default:
            return state;
    }
};

export default rootReducer;
