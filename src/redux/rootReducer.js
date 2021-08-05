import { ADD_TASK, COMPLETE_TASK,DELETE_TASK, RESET_FILTERS, TOGGLE_COMPLETED, TOGGLE_UNCOMPLETED, UNCOMPLETE_TASK} from "./types";

export function rootReducer(state, action) {
    switch (action.type) {
        case ADD_TASK:
            state.tasks.push({
                text: action.task,
                completed: false
            });
            return state;

        case COMPLETE_TASK:
            state.tasks.map(element => {if(element.text === action.task) element.completed = true;
                                        return element});
            return state;

        case UNCOMPLETE_TASK:
            state.tasks.map(element => {if(element.text === action.task) element.completed = false;
                                        return element});
            return state;    

        case DELETE_TASK:
            state.tasks.forEach((element, index) => {
                if(element.text === action.task) state.tasks.splice(index, 1);
            });
            return state;

        case TOGGLE_COMPLETED:
            state.completed = !state.completed;
            return state;

        case TOGGLE_UNCOMPLETED:
            state.uncompleted = !state.uncompleted;
            return state;

        case RESET_FILTERS:
            state.completed = true;
            state.uncompleted = true;
            return state;
    
        default:
            return state;
    }
}