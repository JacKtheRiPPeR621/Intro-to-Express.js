const express = require('express')

const app = express()

app.use(express.urlencoded({extended:true}))

app.get('/' , (req , res) => {
    res.send("<h1>Hello World</h1>")
})

app.get('/greet' , (req , res) => {
    let person = 'Guest'
    if(req.query.person) {
        person = req.query.person
    }
    res.send(`<h2 style="color:green">Good Morning ${person}</h2>`)
})

app.post('/greet' , (req , res) => {
    let person = 'Guest'
    if(req.body.person) {
        person = req.body.person
    }
    res.send(`<h2 style="color:blue">Good Evening ${person}</h2>`)
})

app.get('/form' , (req , res) => {
    res.sendFile(__dirname + "/file/index.html")
})

app.get('/:city/:greeting' , (req , res) => {
    res.send(req.params.greeting + " to " + req.params.city)
})

app.listen(4444 , ()=> {
    console.log('server started on http://localhost:4444')
})