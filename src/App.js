import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodo, setFilteredTodo] = useState([]);

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    handleFilter();
    saveLocalStorage();
  }, [status, todos]);

  const handleFilter = () => {
    switch (status) {
      case "uncompleted":
        setFilteredTodo(todos.filter((todo) => todo.completed === false));
        break;
      case "completed":
        setFilteredTodo(todos.filter((todo) => todo.completed === true));
        break;
      default:
        setFilteredTodo(todos);
    }
  };

  // Save to local storage
  const saveLocalStorage = () => {
    localStorage.setItem("todos",JSON.stringify(todos));
  };

  // Get from local storage
  const getLocalStorage = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodo = JSON.parse(localStorage.getItem("todos")); 
      setTodos(localTodo);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Luci Grace Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodo ={filteredTodo} />
    </div>
  );
}

export default App;
