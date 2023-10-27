import express from "express"
import "dotenv/config"
import app from "./src/app.js"


const PORT = process.env.PORT_DE_CONNECTION;


app.listen(PORT,()=>{
    console.log("servidor escutando!")
})

