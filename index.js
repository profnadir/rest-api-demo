const express = require('express');
const app = express();

//middleware
app.use(express.json());

const equipes = require('./equipes.json');

app.listen(82, ()=>{
    console.log('REST API via Express');
})

app.get('/equipes',(req,res)=>{
    //res.send("hi dev201")
    res.status(200).json(equipes);
})

app.get('/equipes/:id',(req,res)=>{
    const id = parseInt(req.params.id);

    const equipe = equipes.find(e=>e.id === id);
    res.status(200).json(equipe);
})

app.post('/equipes',(req,res) => {
    equipes.push(req.body)
    res.status(200).json(equipes);
})

app.put('/equipes/:id',(req,res) => {
    const id = parseInt(req.params.id);

    let equipe = equipes.find(e=>e.id === id);

    equipe.name = req.body.name
    equipe.country = req.body.country

    res.status(200).json(equipe);
})

app.delete('/equipes/:id',(req,res) => {

    const id = parseInt(req.params.id);

    let equipe = equipes.find(e=>e.id === id);

   /*  equipes.splice(equipes.indexOf(equipe),1); */

    //console.log(equipes.indexOf(equipe));

    if(equipe){
        equipes.splice(equipes.indexOf(equipe),1);
    } 
    
    res.status(200).json(equipes);
})