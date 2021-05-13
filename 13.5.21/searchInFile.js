const readline = require('readline');
const fs = require('fs')

function findAnomalies(){
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