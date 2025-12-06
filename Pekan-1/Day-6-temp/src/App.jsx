import React, {useState} from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {id: 1, text: 'Belajar React', completed: true},
    {id: 2, text: 'Mencuci piring',  completed: false},
    {id: 3, text: 'Menyapu kamar', completed: false}
  ]);

  // default filter all
const [filter, setFilter] = useState(['all']);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="app">
        <header className="app-header">
          <h1>Todo List App</h1>
        </header>

        <main className="app-main">
          <div className="todo-container">
            <TodoForm onAddTodo={addTodo} />
          
          <div className="todo-controls">
            <div className="stats">
              <span className="stat-item">
                Total: <strong>{todos.length}</strong>
              </span>
              <span className="stat-item">
                Aktif: <strong>{todos.filter(t => !t.completed).length}</strong>
              </span>

              <span className="stat-item">
                Selesai: <strong>{todos.filter(t => t.completed).length}</strong>
              </span>
            </div>

            <TodoFilter currentFilter={filter} onFilterChange={setFilter} />
          </div>

          <TodoList
          todos={filteredTodos}
          onToggleTodo={toggleTodo}
          onDeleteTodo={deleteTodo} />

          {filteredTodos.length === 0 && (
            <div className="empty-state">
              <p className="empty-message">
                {filter === 'all'
                ? "Belum ada tugas, Tambahkan tugas pertamamu!"
                : filter === 'active'
                  ? 'Tidak ada tugas aktif'
                  : 'Tidak ada tugas yang selesai'}
              </p>
            </div>
          )}
          </div>
        </main>

        <footer className="app-footer">
          <p>© 2024 Todo App</p>
        </footer>
        </div>
      );
    }

export default App;