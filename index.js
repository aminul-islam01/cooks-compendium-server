const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');


app.use(cors())

app.get('/', (req, res) => {
    res.send('Home Page Route')
});

app.get('/chefs', (req, res) => {
    res.send(chefs)
})
app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));