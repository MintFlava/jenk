const express = require("express")
//import

const app = express()

app.get('/', (req, res) => {
    res.send({bye: 'FILIP'})
})

const port = 5000;
app.listen(port)