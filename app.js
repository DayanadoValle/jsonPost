const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Lista de tarefas (inicialmente vazia)
let tasks = [];

// Endpoint para receber tarefas via POST
app.post('/api/tasks', (req, res) => {
  const newTask = req.body;

  if (!newTask || !newTask.title) {
    return res.status(400).json({ error: 'A tarefa deve ter um título.' });
  }

  tasks.push(newTask);
  res.json({ message: 'Tarefa adicionada com sucesso.', task: newTask });
});

// Endpoint para listar todas as tarefas
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.get('/api', (req, res) => {
    const data = {
      message: "Olá, essa é uma resposta em JSON da Day! =D Para ver a lista de tarefas completa, utilize o método GET com o endpoint /api/tasks, e para adicionar novas tarefas, use o método POST."
      

    };
    res.json(data);
  });




