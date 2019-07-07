const express = require('express')
const app     = express()
const path    = require('path')
const port    = 3000


app.use('/css', express.static(__dirname +'/css'));
app.use(express.static('src'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))

app.listen(process.env.PORT || port, () => console.log(`App listening on port ${port}!`));
