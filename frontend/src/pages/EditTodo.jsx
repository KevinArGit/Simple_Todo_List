import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const EditTodo = () => {
    const { id } = useParams();
    const navigate = useNavigate(); 
    const [description, setDescription] = useState('');

    useEffect(() => {
        const fetchTodo = async () => {
            const res = await axios.get(`http://localhost:5000/todos/${id}`);
            setDescription(res.data.description);
        };
        fetchTodo();
    }, [id]);

    const updateTodo = async () => {
        await axios.put(`http://localhost:5000/todos/${id}`, { description });
        navigate('/'); 
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-3xl font-bold text-center mb-4">Edit Todo</h1>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full mb-4"
            />
            <button
                onClick={updateTodo}
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
            >
                Update Todo
            </button>
        </div>
    );
};

export default EditTodo;
