const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true }))

require("dotenv").config()
    const { Sequelize } = require('sequelize');
    const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DRIVER
});

sequelize
    .authenticate()
    .then(() => {
        console.log("Database connected...")
    })
    .catch(err => {
        console.log("Error: " + err)
    })

const articleRouter = require("./routes/article")
app.use("/", articleRouter)

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
} )