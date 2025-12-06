import React, { useState } from "react";
import styles from './TodoForm.module.css';

function TodoForm({onAddTodo}) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onAddTodo(input.trim());
            setInput('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            handleSubmit(e);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.todoForm}>
            <div className={styles.inputGroup}>
                <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Kegiatan apa yang ingin kamu lakukan hari ini?"
                className={styles.todoInput}
                autoFocus/>

                <button
                type="submit"
                className={styles.submitButton}
                disabled={!input.trim()}>

                <span className={styles.buttonText}>Tambah</span>
                <span className={styles.buttonIcon}>+</span>
                </button>
            </div>

            {input.trim() && (
                <p className={styles.inputHint}>Tekan Enter untuk menambahkan ke Daftar Tugas</p>
            )}
            </form>
    );
}

export default TodoForm;

