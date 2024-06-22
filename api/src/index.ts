import express from 'express'
import cors from 'cors'
dotenv.config()


const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(PORT);
})

app.get('/', (req, res) => {
    res.send('Hello World ');


})