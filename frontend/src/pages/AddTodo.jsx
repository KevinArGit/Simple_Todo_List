import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddTodo = () => {
    const navigate = useNavigate();
    const [description, setDescription] = useState('');

    const addTodo = async () => {
        await axios.post('http://localhost:5000/todos', { description });
        navigate('/');
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-3xl font-bold text-center mb-4">Add Todo</h1>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full mb-4"
                placeholder="Enter todo description"
            />
            <button
                onClick={addTodo}
                className="bg-green-500 text-white px-4 py-2 rounded-md w-full"
            >
                Add Todo
            </button>
        </div>
    );
};

export default AddTodo;
