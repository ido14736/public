const readline = require('readline');
const fs = require('fs')
const ffi = require('ffi-napi')

const circleAnom = new ffi.Library('../model/circlealgodll.dll', {
    "findAnomalies": [
        "void", []
    ]
});


const lineAnom = new ffi.Library('../model/linealgodll.dll', {
    "findAnomalies": [
        "void", []
    ]
});

async function circleWrap(){
    circleAnom.findAnomalies();
}

async function lineWrap(){
    lineAnom.findAnomalies();
}


function findAnomalies(trainCSV, testCSV/*, algoChoice*/){
   // var file = request.files.text_file
   /* var result = trainCSV.data.toString()
    //var file2 = request.files.text_file2
    var result2 = testCSV.data.toString()
    fs.writeFileSync("./input.txt", "1\n")
    fs.appendFileSync("./input.txt", result)
    fs.appendFileSync("./input.txt", "done\n")
    fs.appendFileSync("./input.txt", result2)
    fs.appendFileSync("./input.txt", "done\n2\n0.5\n3\n4\n6\n")

    //if(algoChoice === "")
    lineAnom();*/

    let retValue = ""
    let words = []
    let fields = []
    let withoutTab = []
    const readInterface = readline.createInterface({
        input: fs.createReadStream('../model/out.txt')
    });

    readInterface.on('line', function(line) {
        //JSON.stringify()
        //console.log(line);

        words = line.split(' ')
        withoutTab = line.split('\t')
        if(words.length > 1)
        {
            fields = words[1].split('$')
            //console.log(fields[0])

            retValue = retValue + JSON.stringify({ line: withoutTab[0], field1: fields[0], field2: fields[1]}) + "\n"
        }
    });

    readInterface.on('close', function () {
        console.log(retValue)
        return retValue
    });
}

module.exports.findAnomalies = findAnomalies