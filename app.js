const express = require("express")
const expressLayouts = require("express-ejs-layouts")

const app = express()
const PORT = 5000

app.use(express.static("public"))
app.use("/css", express.static(__dirname + "public/css"))
app.use("/img", express.static(__dirname + "public/img"))

app.use(expressLayouts)
app.set("view engine", "ejs")
app.set("layout", "/index")

app.get("", (req, res) => {
    res.render("index", {title : "Autó Fajták", layout : "index"})
})

app.get("/retro", (req, res) => {
    res.render("retrocars", {title: "Retró autók", layout: "retrocars"})
})

app.get("/super", (req, res) => {
    res.render("supercars", {title:"Szuper autók", layout: "supercars"})
})

app.listen(PORT, () => {
    console.log(`autofajtak run on ${PORT}`)
})