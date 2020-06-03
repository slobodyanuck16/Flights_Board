import * as tasksGateway from "./tasks.gateway";
import { tasksListSeletor } from "./tasks.selectors";

export const TASKS_LIST_RECEIVED = "TASKS/TASKS_LIST_RECEIVED";

export const tasksListReceived = (tasksList) => {
    const action = {
        type: TASKS_LIST_RECEIVED,
        payload: {
            tasksList,
        },
    };

    return action;
};

export const getTaskList = () => {
    const thunkAction = function (dispatch) {
        tasksGateway
            .fetchTasksList()
            .then((tasksList) => dispatch(tasksListReceived(tasksList)));
    };

    return thunkAction;
};

export const updateTask = (taskId) => {
    const thunkAction = function (dispatch, getState) {
        const state = getState();
        const tasksList = tasksListSeletor(state);
        const taskItem = tasksList.find((task) => task.id === taskId);
        const updatedTask = {
            ...taskItem,
            done: !taskItem.done,
        };

        tasksGateway
            .updateTask(taskId, updatedTask)
            .then(() => dispatch(getTaskList()));
    };

    return thunkAction;
};

export const deleteTask = (taskId) => {
    const thunkAction = function (dispatch) {
        tasksGateway.deleteTask(taskId).then(() => dispatch(getTaskList()));
    };

    return thunkAction;
};

export const createTask = (text) => {
    const thunkAction = function (dispatch) {
        const newTask = {
            text,
            done: false,
            createdAt: new Date().toISOString(),
        };
        tasksGateway.createTask(newTask).then(() => dispatch(getTaskList()));
    };

    return thunkAction;
};
