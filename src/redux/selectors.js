import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;
export const statusFilterSelector = (state) => state.filters.status;
export const priorityFilterSelector = (state) => state.filters.priority;
export const todoListSelector = (state) => state.todoList;

export const todoRemaining = createSelector(
  searchTextSelector,
  todoListSelector,
  statusFilterSelector,
  priorityFilterSelector,
  (searchText, todoList, statusFilter, priority) => {
    // console.log(statusFilter);
    return todoList.filter((todo) => {
      if (statusFilter === "All") {
        return priority.length
          ? todo.name.includes(searchText) && priority.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (statusFilter === "Completed" ? todo.completed : !todo.completed) &&
        (priority.length ? priority.includes(todo.priority) : true)
      );
    });
  }
);
