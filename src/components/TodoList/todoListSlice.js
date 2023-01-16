const initState = [
  { id: 1, name: "Learn Redux", completed: false, priority: "Medium" },
  { id: 2, name: "Learn React", completed: false, priority: "Hight" },
  { id: 3, name: "Learn Antd", completed: false, priority: "Low" },
  { id: 4, name: "Learn Formik", completed: true, priority: "Medium" },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleTodo":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default todoListReducer;
