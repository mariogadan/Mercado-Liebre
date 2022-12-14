// requiero modulos y cargo express
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'./public')));

// levanto servidor y confirmo con mensaje
app.listen(process.env.PORT || 3000, function() {console.log('Servidor corriendo con éxito');}) 


// defino ruta de archivos estaticos y genero rutas
app.get('/home', function(req,res){
    res.sendFile(path.join(__dirname,'./views/home.html'));
});

app.get('/register', function(req,res){
    res.sendFile(path.join(__dirname,'./views/register.html'));
});

app.get('/login', function(req,res){
    res.sendFile(path.join(__dirname,'./views/login.html'));
});
