import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRuter.js'
const app = express()
const port =process.env.PORT || 3000 
app.use(cors())
app.use(express.json());
// db connection 
connectDB()
// middleware 

// routes connections 
app.use('/api/user',userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})