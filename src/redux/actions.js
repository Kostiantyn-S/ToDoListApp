import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, RESET_FILTERS, TOGGLE_COMPLETED, TOGGLE_UNCOMPLETED, UNCOMPLETE_TASK } from "./types";

export function newTask(text) {
    return {
        type: ADD_TASK,
        task: text
    }
}

export function complete(currentTask) {
    return {
        type: COMPLETE_TASK,
        task: currentTask
    }
}

export function uncomplete(currentTask) {
    return {
        type: UNCOMPLETE_TASK,
        task: currentTask
    }
}

export function deleteTask(currentTask) {
    return {
        type: DELETE_TASK,
        task: currentTask
    }
}

export function togCompleted() {
    return {
        type: TOGGLE_COMPLETED
    }
}

export function togUnompleted() {
    return {
        type: TOGGLE_UNCOMPLETED
    }
}

export function resetFilters() {
    return {
        type: RESET_FILTERS
    }
}