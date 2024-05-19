import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EditTodo from './pages/EditTodo';
import AddTodo from './pages/AddTodo'; // Import AddTodo

const App = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/edit/:id" element={<EditTodo />} />
                <Route path="/add" element={<AddTodo />} /> 
            </Routes>
        </div>
    );
};

export default App;
