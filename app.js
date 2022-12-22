require('dotenv').config({path:'./.env'});

const ProductRouter=require('./routes/productRoute');
const connectDB=require('./DB/connect');
const errorHandlerMiddleware=require('./middleware/errorHandlerMiddleware');
//async errors


const express=require('express');
const app=express();

// middleware

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/api/v1",ProductRouter);
app.use(errorHandlerMiddleware);
// app.use(notFoundMiddlewre);
// app.use(errorMiddleware);


const port=process.env.PORT||3000;

const start= async ()=>{
    try{
// ConnectDB
// rakesh

app.listen(port,console.log(`server is listening on port :${port}...`));
await connectDB(process.env.MONGO_URI);
console.log('db connected');
//process.exit(0);
    }catch(error){
       // process.exit(1);
        console.log(error);

    }
}

start();