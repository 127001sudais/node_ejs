const express = require("express")
const app = express()

// setting up view engine
app.set("view engine", "ejs")


app.listen(3000)


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