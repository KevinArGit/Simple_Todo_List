import React from 'react';

const Todo = ({ todo, deleteTodo, editTodo }) => {
    return (
        <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 my-2">
            <h3 className="text-xl">{todo.description}</h3>
            <div>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                    onClick={() => editTodo(todo.id)}
                >
                    Edit
                </button>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                    onClick={() => deleteTodo(todo.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Todo;
