import { createSelector } from "reselect";

export const tasksListSeletor = (state) => state.tasks.tasksList;

export const sortedTasksListSelector = createSelector(
    [tasksListSeletor],
    (tasksList) => {
        return tasksList.slice().sort((a, b) => a.done - b.done);
    }
);
