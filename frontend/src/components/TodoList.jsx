import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './Todo';
import { Link } from 'react-router-dom';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [description, setDescription] = useState('');

    const fetchTodos = async () => {
        const res = await axios.get('http://localhost:5000/todos');
        setTodos(res.data);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const addTodo = async () => {
        const res = await axios.post('http://localhost:5000/todos', { description });
        setTodos([...todos, res.data]);
        setDescription('');
    };

    const deleteTodo = async (id) => {
        await axios.delete(`http://localhost:5000/todos/${id}`);
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-3xl font-bold text-center mb-4">Todo List</h1>
            <div className="flex mb-4">
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border border-gray-300 rounded-l-md p-2 flex-grow"
                    placeholder="Add a new todo"
                />
                <button
                    onClick={addTodo}
                    className="bg-green-500 text-white px-4 py-2 rounded-r-md"
                >
                    Add
                </button>
            </div>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} editTodo={() => window.location.href=`/edit/${todo.id}`} />
            ))}
        </div>
    );
};

export default TodoList;
