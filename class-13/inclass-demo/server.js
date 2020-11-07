'use strict';

// Bring in my dependencies
require('dotenv').config();
const express = require('express');
const pg = require('pg');
const methodOverride = require('method-override');

// Read my PORT variable
const PORT = process.env.PORT || 3000;

// Application Setup
const app = express();
app.set('view engine', 'ejs');

// Express middleware methods
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./www'));
app.use(methodOverride('_method'));

// Routes
app.get('/', getTasks);
app.get('/new', getForm);
app.post('/add', addTask);
app.get('/tasks/:task_id', displayTask);
app.put('/complete/:task_id', completeTask);
app.delete('/delete/:task_id', deleteTask);


// Function handlers
function getTasks(request, response) {
  const SQL = 'SELECT * FROM tasks;';

  client.query(SQL)
    .then(results => {
      response.status(200).render('index', {tasks: results.rows});
    });
}

function getForm(request, response) {
  response.render('new');
}

function addTask(request, response) {
  const SQL = 'INSERT INTO tasks (title, description, contact, status, category) VALUES ($1, $2, $3, $4, $5) RETURNING *';

  const params = [request.body.title, request.body.description, request.body.contact, request.body.status, request.body.category];

  client.query(SQL, params)
    .then(results => {
      console.log(results.rows);
      response.status(200).redirect('/');
    });

}
function displayTask(request, response) {
  const SQL = 'SELECT * FROM tasks WHERE id=$1;';
  const params = [request.params.task_id];

  client.query(SQL, params)
    .then(results => {
      response.render('detail', { task: results.rows[0] });
    })
}

function completeTask(request, response) {
  console.log(request.params.task_id);
  const SQL = 'UPDATE tasks SET status = $1 WHERE id = $2';
  const params = [request.body.status, request.params.task_id];

  client.query(SQL, params)
    .then(results => {
      response.status(200).redirect('/');
    });
}

function deleteTask(request, response) {
  const SQL = 'DELETE from tasks WHERE id = $1';
  const params = [request.params.task_id];

  client.query(SQL, params)
    .then(results =>  {
      response.status(200).redirect('/');
    });
}

// Connect to our database!
const client = new pg.Client(process.env.DATABASE_URL);
client.connect()
  .then( () => {
    // Listen on a port
    app.listen(PORT, () => {
      console.log(`Now listening on port ${PORT}`);
    });
  })
  .catch( err => console.error(err));
