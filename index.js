const http = require('http');
const express = require('express');

const app = express();
const PORT = 3000;

const server = http.createServer(app);

const pets = require('./models/pets');


// See all pets!
app.get('/pets', async (req, res) => {
    const thePets = await pets.all();
    // res.send('you want /pets');
    res.json(thePets);

    // Here's what `res.json()` is doing:
    // res.writeHead(200, {
    //     'Content-Type': 'application/json'
    // })
    // const jsonString = JSON.stringify(thePets);
    // res.write(jsonString);
    // res.end();
});

app.get('/pets/:id')

// Create
app.get('/pets/create')
app.post('/pets/create')

// Update
app.get('/pets/:id/edit')
app.post('/pets/:id/edit')

// Delete
app.get('/pets/:id/delete')
app.post('/pets/:id/delete')

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});