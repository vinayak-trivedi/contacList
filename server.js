const express = require('express')
const path = require('path') // required for path manupulation
const port = 9000

const app = express() // to start the server
app.set('view engine', 'ejs') // settting the view engine as ejs
// app.set('view', path.join(__dirname,'views')) // telling the engine which file to look at

let contactList = [
    {
        "name" : "vinayak",
        "contact" : "9343576543"
    },
    {
        "name" : "Pallab",
        "contact" : "7458437543"
    }
]
app.get('/',function(req,res) {
   return res.render('home')
})
app.get('/contact',function(req,res) {
    return res.render('contact', {
        "contact-list" : contactList
    })
})
app.post('/create-contact',function(req,res) {

})


app.listen(port ,error => { // running the server
    if(error) {
        console.log("There is an error", error)
        return
    }
    console.log("The server is running on",port)
})
