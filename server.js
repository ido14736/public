const express = require("express")
const fileUpload = require('express-fileupload')

const app = express()
app.use(express.urlencoded({
    extended: false
}))

app.use(fileUpload())

//app.use(express.static('../view'))
app.get("/", (req,res)=>{
    console.log("ok")
    res.sendFile("C:\\Users\\magshimim\\WebstormProjects\\csmilestone2\\view\\index.html")
})

app.post("/search", (req,res)=>{
    console.log("ok2")
    if(req.files){
        let file = req.files.text_file
        res.write("hello")
    }
    res.end()
})

app.listen(8080)