import React from "react";

function Form({ inputText, setInputText, todos, setTodos ,setStatus}) {
  const handleInputText = (e) => {
    setInputText(e.target.value);
    };
    
    const handleSubmitForm = e => {
        e.preventDefault()
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id : Math.random() * 1000
            }
        ])
        setInputText('')
    }
    
    const handleStatus = (e) => {
        setStatus(e.target.value)
        console.log(e.target.value)
    }

  return (
    <form>
          <input type="text" className="todo-input" value={inputText} onChange={ handleInputText} />
      <button className="todo-button" type="submit" onClick={handleSubmitForm}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={handleStatus}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
