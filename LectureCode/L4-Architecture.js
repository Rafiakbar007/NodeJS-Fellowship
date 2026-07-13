

const fs = require("fs")
//const os = require("os")


//  sync...blocking

//fs.writeFileSync("./ArchitectureFile.txt" , "hello sync")


//  async...non blocking

// fs.writeFile("./ArchitectureFile.txt" , "hello async" , (err) => {
//     if (err) {
//         console.log(err)
//     }
// })

// console.log("1")

// // //      blocking

// const result = fs.readFileSync("./ArchitectureFile.txt" , "utf-8")

// console.log(result)

// console.log("2")


//----------------------------------
// console.log("1")

//      Non - blocking

const result = fs.readFile("./ArchitectureFile.txt" , "utf-8" , (err, result) => {
    if(err) {
        console.log(err)
    }
    else{
        console.log(result)
    }
})


console.log("2")

//console.log(os.cpus().length)