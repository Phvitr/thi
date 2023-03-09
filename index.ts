import express, {Router} from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose"
import StudentRouter from "./src/routers/student.router";


const PORT = 8000;
const app = express();


app.set('view engine', 'ejs');
app.set('views', './src/views');

const DB_URL ='mongodb://127.0.0.1:27017/codegym';
mongoose.connect(DB_URL).then(()=>{
    console.log("Connect DB success")
}).catch(err=>{
    console.log(err.message)
});
app.use(bodyParser.json());


app.use('/student', StudentRouter);

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:8000/student ');
})
