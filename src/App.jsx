import { useEffect, useState } from "react";
import "./App.css";
import { useData } from "./Components/dataProvider";
import TodoFooter from "./Components/TodoFooter/TodoFooter";
import TodoForm from "./Components/TodoForm/TodoForm";
import TodoList from "./Components/TodoList/TodoList";

function App() {
  // const { todos, add } = useData();
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
      <TodoFooter />
    </div>
  );
}

export default App;
