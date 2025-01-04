const express = require('express');
const { StatusCodes } = require('http-status-codes');
const app = express();
app.use(express.json());

app.get('/home', (req, res) => {
    var name = "Charles Owuala"
    res.send(`Hello ${name},
         This is the Server Entry for the RevInventory Application, 
         and Changes will be made gradually till it all works!`);
});

app.post('/add', (req, res)=> {
    const data = [];
    data.push(req.body);
    res.status(StatusCodes.CREATED).send({
        status: 'success',
        data,
    });
})

const port = 8818;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});