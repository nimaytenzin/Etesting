const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT =3000;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.render('index')
})

app.listen(PORT, ()=>{
    console.log(`Server Connected on Port ${PORT}`)
})
