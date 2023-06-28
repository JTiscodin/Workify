const express = require("express")



const ejs = require("ejs")
const bodyParser = require("body-parser")

const app = express()

const list = ["Your to-do-list"]



app.set("view engine" , "ejs")

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static("public"))

app.get("/", function(req,res){
    res.render("Home")
    
    
})

app.get("/dashboard", function(req,res){
 
    res.render("dashboard", {work: list})
})

app.post("/dashboard" ,function(req,res){
    const value = req.body.value
    list.push(value)
    res.redirect("/dashboard")
})

app.get("/:whatever" ,function(req, res) {
    const temp = req.params.whatever
    res.render(temp)
})
















app.listen("3000", function(){
    console.log("Server is running on port 3000")
})