const express = require('express');
const pool = require('./db/db');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Create
app.post('/todos', async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            'INSERT INTO todo (description) VALUES($1) RETURNING *',
            [description]
        );
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Read
app.get('/todos', async (req, res) => {
    try {
        const allTodos = await pool.query('SELECT * FROM todo');
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// Update
app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        await pool.query(
            'UPDATE todo SET description = $1 WHERE id = $2',
            [description, id]
        );
        res.json('Todo was updated!');
    } catch (err) {
        console.error(err.message);
    }
});

// Delete
app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM todo WHERE id = $1', [id]);
        res.json('Todo was deleted!');
    } catch (err) {
        console.error(err.message);
    }
});



app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});
