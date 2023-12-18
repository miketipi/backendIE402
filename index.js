import  express  from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import route from './routes/index.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const connect  = () => {
try{
    mongoose.connect(process.env.MONGODB);
    console.log('Connect to MongoDB sucessfully');
}catch(err){
    console.log('Connect to MongoDB unsucessfully');
}
}
connect();
route(app);
const port = process.env.PORT;
app.get('', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`App đang chạy trên cổng ${port}`)
  })