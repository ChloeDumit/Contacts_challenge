const express = require('express');
const cors = require('cors');
const contacts = require('./routes/contacts')

const app = express();

app.use(express.json())
app.use(cors({origin: true, credentials: true}));

app.use('/contacts', contacts);


app.listen(4000, () => console.log('App listening in url http://localhost:' + 4000))

module.exports = app;