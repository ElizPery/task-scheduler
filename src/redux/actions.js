import { nanoid } from "nanoid";

export const addTask = text => {
    return {
        type: 'tasks/addTask',
        payload: {
            id: nanoid(),
            completed: false,
            text,
        }
    }
}

export const deleteTask = id => {
    return {
        type: 'tasks/deleteTask',
        payload: id,
    }
}

export const toggleCompleted = id => {
    return {
        type: 'tasks/toggleCompleted',
        payload: id,
    }
}

export const setFilterStatus = value => {
    return {
        type: 'filters/setFilterStatus',
        payload: value,
    }
}