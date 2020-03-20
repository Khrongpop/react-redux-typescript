import React from "react";
import "./App.css";

import Todo from "./components/CreateTodo";
import TodoTable from "./components/TodoTable";

const App = () => {
	return (
		<div>
			<Todo />
			<TodoTable />
		</div>
	);
};

export default App;
