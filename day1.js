const fs = require("fs")

// READING FILES
fs.readFile("./assets/blog1.txt", (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(`FIRST: ${data.toString()}`)
})

// WRITING FILES
fs.writeFile("./assets/blog1.txt", "hello this is not about food", (err) => {
    if (err) {
        console.log(err)
    }
    console.log("SECOND: file has changed")
})

// DIRECTORIES
if (!fs.existsSync("./model")) {
    fs.mkdir("./model", (err) => {
        if (err) {
            console.log(err)
        }
        console.log("THIRD: folder has been created")
    }
    )
} else {
    fs.rmdir("./model", (err) => {
        if (err) {
            console.log(err)
        }
        console.log("file has been deleted")
    })
}

// DELETING FILES
if (fs.existsSync("./model/deleteme.txt")) {
    fs.unlink("./model/deleteme.txt", err => {
        if (err) {
            console.log(err)
        }
        console.log("FOURTH: file has been deleted")
    })
} else {
    fs.writeFile("./model/deleteme.txt", "this is gonna be delete", () => {
        console.log(" FOURTH: file has been created")
    })
}