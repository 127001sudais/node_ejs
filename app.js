const express = require("express")
const morgan = require("morgan")

const app = express()

// setting up view engine
app.set("view engine", "ejs")

app.listen(3000)

// serving static files
app.use(express.static("public"))

// middleware
app.use((req, res, next) => {
    console.log("###$$$%%%%")
    console.log("new request made: ")
    console.log("host: ", req.hostname)
    console.log("path: ", req.path)
    console.log("method: ", req.method)
    next()
})

app.use(morgan("dev"))

// another middleware
app.use((req, res, next) => {
    console.log("SECOND MIDDLEWARE")
    res.locals.path = req.path
    console.log(res.locals.path)
    next()
})

/** // for sending html files
app.get("/", (req, res) => {
    res.sendFile("./views/index.html", { root: __dirname })
})

app.get("/about", (req, res) => {
    res.sendFile("./views/about.html", { root: __dirname })
})

// redirecting page
app.get("/about-us", (req, res) => {
    res.redirect("/about")
})

// page not found
app.use((req, res) => {
    res.status(404).sendFile("./views/404.html", { root: __dirname })
})
 */

// for sending ejs files
app.get("/", (req, res) => {
    let blogs = [
        { title: "why you need to code", snippet: "lorem ipmsum dolor sit amet" },
        { title: "why you need to have abs", snippet: "lorem ipmsum dolor sit amet" },
        { title: "why you need to eat clean", snippet: "lorem ipmsum dolor sit amet" },
        { title: "why you need to game", snippet: "lorem ipmsum dolor sit amet" },

    ]
    res.render("index", { title: "Home", blogs })
})

app.get("/about", (req, res) => {
    res.render("about", { title: "about" })
})

app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "CREATE A NEW BLOG" })
})

app.use((req, res) => {
    res.status(404).render("404", { title: "404" })
})