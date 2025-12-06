import React from 'react';
import TodoItem from "./TodoItem";
import './TodoList.css';

function TodoList({todos, onToggleTodo, onDeleteTodo}) {
    if (todos.length === 0) {
        return null;
    }

    return (
        <div className="todo-list">
            <h2 className='todo-list-title'>Daftar Tugas</h2>
            <ul className="todo-items">
            {todos.map(todo => (
                <TodoItem
                key={todo.id}
                todo={todo}
                onToggleTodo={onToggleTodo}
                onDelete={onDeleteTodo}
                />
            ))}
        </ul>
        </div>
    );
}

export default TodoList