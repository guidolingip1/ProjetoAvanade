import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import user from './src/database/dbUsers.js';
import posts from './src/database/dbPosts.js';


//app config
const app = express();
const port = process.env.PORT || 3333;
const connection_url = 'mongodb+srv://<seuUsuario>:<suaSenha>@cluster0.pdd50.mongodb.net/avanadedb?retryWrites=true&w=majority';

//middlewares
app.use(express.json());
app.use(cors());

//db config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//api endpoints
//Criando usuário
app.post('/criaUsuario', (req, res) => {
  const newUser = req.body;

  user.create(newUser, (err, data) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});


//Cria post
app.post('/criaPostagens', (req, res) => {
  const newPosts = req.body;

  console.log(JSON.stringify(newPosts, null, 4));

  posts.create(newPosts, (err, data) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});


//Lista Postagens
app.get('/listaPostagens', (req, res) => {
  posts.find((err, data) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//listener
app.listen(port, () => {
  console.log(`listening on localhost:${port}`);
});

