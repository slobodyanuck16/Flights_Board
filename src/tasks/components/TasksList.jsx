import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";

const TasksList = ({ tasks, onCreate, onDelete, onChange }) => {
    return (
        <main className="todo-list">
            <CreateTaskInput onCreate={onCreate} />
            <ul className="list">
                {tasks.map((task) => {
                    return (
                        <Task
                            key={task.id}
                            {...task}
                            onDelete={onDelete}
                            onChange={onChange}
                        />
                    );
                })}
            </ul>
        </main>
    );
};

TasksList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            done: PropTypes.bool,
            id: PropTypes.string,
        })
    ).isRequired,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default TasksList;
