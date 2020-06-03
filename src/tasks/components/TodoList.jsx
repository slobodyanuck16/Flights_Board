import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as tasksActions from "../tasks.actions";
import TasksList from "./TasksList";
import { sortedTasksListSelector } from "../tasks.selectors";

class TodoList extends Component {
    componentDidMount() {
        this.props.getTaskList();
    }

    render() {
        return (
            <>
                <h1 className="title">Todo List</h1>
                <TasksList
                    tasks={this.props.tasks}
                    onCreate={this.props.createTask}
                    onDelete={this.props.deleteTask}
                    onChange={this.props.updateTask}
                />
            </>
        );
    }
}
TodoList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape()),
    getTaskList: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    createTask: PropTypes.func.isRequired,
};
const mapDispatch = {
    getTaskList: tasksActions.getTaskList,
    updateTask: tasksActions.updateTask,
    deleteTask: tasksActions.deleteTask,
    createTask: tasksActions.createTask,
};
const mapState = (state) => {
    return {
        tasks: sortedTasksListSelector(state),
    };
};
export default connect(mapState, mapDispatch)(TodoList);
