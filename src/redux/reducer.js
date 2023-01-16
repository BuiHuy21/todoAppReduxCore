// const rootReducer = (state = {}, action) => {
//   console.log(state, action);
//   switch (action.type) {
//     case "todoList/addTodo":
//       return {
//         ...state,
//         todoList: [...state.todoList, action.payload],
//       };
//     case "filters/searchFilterChange":
//       return {
//         ...state,
//         filters: { ...state.filters, search: action.payload },
//       };
//     default:
//       return state;
//   }
// };

import { combineReducers } from "redux";
import filterReducer from "../components/Filters/filterSlice";
import todoListReducer from "../components/TodoList/todoListSlice";

const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoListReducer,
});
export default rootReducer;
