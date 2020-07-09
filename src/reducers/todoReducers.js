export default (state=[], action) => {
    switch (action.type) {
        case 'GET_TODO_SUCCESS':
            return action.todo;
        case 'ADD_TODO_SUCCESS':
            return [...state,
                Object.assign({}, action.todo),
            ];
        default:
            return state;
    }
};
