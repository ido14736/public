const express = require("express")
const fileUpload = require('express-fileupload')
const path = require('path')
const multer = require('multer')
const model = require('../model/searchInFile')

const app = express()
app.use(express.urlencoded({
    extended: false
}))

app.use(express.json())

app.use(fileUpload())

//app.use(express.static('../view'))
app.get("/", (req,res)=>{
    res.sendFile("C:\\Users\\magshimim\\WebstormProjects\\csmilestone2\\view\\index.html")
})

const upload = multer()
app.post("/search" ,(req,res)=>{
    //console.log(req.file)
    //console.log(/*Object.prototype.toString.call(*/req.files.text_file/*)*/)
    //console.log(req.body)
    if(req.files){
        let trainCSV = req.files.train_file
        let testCSV = req.files.test_file
       // let fileContent = file.data.toString()
        //console.log(fileContent)
        //send data to the algorithms
        //console.log(model.findAnomalies())
        //console.log(req.body.algoChoice)
        let str = model.findAnomalies(trainCSV, testCSV/*, req.body.algoChoice*/)
        res.write(str)
    }
    //console.log(req.body.text_file.name)
    res.end()
})

app.listen(8080)