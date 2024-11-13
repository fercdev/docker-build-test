const express = require('express')
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello world desde express')
})

app.listen(port, () => {
    console.log('servidor iniciado en el puerto:', port)
})

module.exports = app;