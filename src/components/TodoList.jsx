import React from "react";
import Todo from "./Todo";

function TodoList({ todos , setTodos, filteredTodo }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodo.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
