import express from "express"
import cors from "cors"
import bodyparser from "body-parser"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(bodyparser.urlencoded({ extended: true }));



app.get("/",(req,res)=>{
    res.send("hello")
})

export { app }