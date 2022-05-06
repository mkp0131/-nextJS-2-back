const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 4065;
const db = require('./models');
db.sequelize
  .sync()
  .then(() => {
    console.log('😀 db 연결 성공');
  })
  .catch(console.error);

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.get('/post', (req, res) => {
  res.json({ id: 123, txt: '123' });
});

app.post('/post', (req, res) => {
  res.json({ id: 123, txt: '123' });
});

app.delete('/post', (req, res) => {
  res.json({ id: 123, txt: '123' });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
