import { CREATE_TODO, TODO_COMPLETED, REMOVE_TODO } from "./actions";

export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type){
        case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
                text,
                isComplete: false,
            };
            return state.concat(newTodo);
        }
        case REMOVE_TODO: {
            const { text } = payload;
            return state.filter(todo => todo.text !== text);
        }

        case TODO_COMPLETED: {
            const { text } = payload;
            return state.filter(todo => todo.text.style = 'text-decoration-line: line-through');
        }
        default: {
            return state;
        }
    }
}