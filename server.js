
const express = require('express');
const path = require('path');

const app = express();

console.log(__dirname);
console.log( path.join(__dirname, 'public'));

app.use( express.static(path.join(__dirname, 'public')));


app.get('/about', (req, res)=>{
    res.send({
        name : 'User',
        phone : '12234'
    })
})


let userOne = "User One";
let userTwo = "User Two"
app.get('/user', (req, res)=>{
    res.send( `<h1> Heading </h1>
                <ul> 
                    <li>${userOne} </li>
                    <li>${userTwo} </li>
                 </ul>
            `
    )
})

//app.post()


app.listen(3000, ()=>{
    console.log("server up and running on 3000 port!")
})

