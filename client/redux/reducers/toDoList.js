
const initState = [{
    id: 0,
    text: '',
    completed: false 
}];

export default function reducer(state = initState, action = {}) {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state, 
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'REMOVE_TODO':
            return  state.map(todos => {
                if(action.id !== todos.id){
                    return todos;
                }
            })
        case 'TOGGLE_TODO':
            return  state.map(todos => {
                if(action.id !== todos.id){
                    return todos;
                }
                return {
                    ...todos,
                    completed: !todos.completed
                }
            })
            
        default:
            return state;
    }
}


export function addToDoList(data) {
    return{
        type: 'ADD_TODO',
        text: data.text,
        id: data.id
    };
}

export function removeToDoList() {
    return{
        type: 'REMOVE_TODO'
    };
}

export function toggle(data) {
    return{
        type: 'TOGGLE_TODO',
        id: data
    };
}