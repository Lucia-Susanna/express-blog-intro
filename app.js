const express = require('express');
const posts = require('./data/posts')
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res)=>{
 res.send('Server del mio blog')
})

app.get('/bacheca', (req, res)=>{
  
  const post = {
    conteggio : posts.length,
    posts
  }
  res.json(post)
})

app.listen(port, ()=>{
  console.log('Sono in ascolto')
})