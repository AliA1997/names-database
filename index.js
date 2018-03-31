require('dotenv').config();
const express = require('express');
const massive = require('massive');
const cors = require('cors');
const bodyParser = require('body-parser');
const ctrl = require('./controller');
const PORT = 5000;
const app = express();

app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(database => app.set('db', database));

app.get('/api/names', ctrl.getNames);
app.get('/api/names/:id', ctrl.getName);
app.post('/api/names', ctrl.createNames);
app.put('/api/names/:id', ctrl.updateNames);
app.delete('/api/names/:id', ctrl.deleteName);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));