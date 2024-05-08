import express from 'express'; // import express
import cors from 'cors'; // allow cross origin requests
import cookieParser from 'cookie-parser'; // parse cookie header


const app = express() // create express app

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())




//Routes
import userRouter from './routes/user.routes.js'


//routes declaration
app.use("/api/v1/users", userRouter)



export  {app}