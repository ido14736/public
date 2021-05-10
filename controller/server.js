const express = require("express")
const fileUpload = require("express-fileupload")

const app = express()
app.use(express.urlencoded({
    extended:false
}))
app.use(fileUpload())
app.use(express.static('../view'))

app.get('/', (req,res)=>{
    res.sendFile("index.html")
})

app.post("/search", (req,res)=>{
    res.write("hello")
    if(req.files){
        let file = req.files.text_file
        res.write("hello")

    }
    res.end()
})

app.listen(8080)