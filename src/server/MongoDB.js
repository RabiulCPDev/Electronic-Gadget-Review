const mongoose = require("mongoose");
const express =require("express");
const db="mongodb+srv://rabiul:rabiulwpl@wpl.7dy7dit.mongodb.net/?retryWrites=true&w=majority";
const cors=require("cors");
// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect(db,{
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedToplogy: true,
//     useFindAndModify:false
// }).then(()=> {
//     console.log("connected");
// }).catch ((error)=> {
//     console.log("error");
// });
// }



mongoose.connect(db);

// mongoose.connect(db,{
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useUnifiedToplogy: true,
//         useFindAndModify:false
//     });
const UpProducts = require('./Schema');
const Products= require('./Schema2');




const app = express();
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=> {
    res.send('Server is running')
})

app.listen(5000,()=>{
    console.log("Server listening on 5000");
})

app.get('/data', (req, res)=>{
    Products.find().then(result=>{
        res.status(200).json(result);
    })
    .catch(err=>{
        console.error(err);
    });
})
app.get('/updata', (req, res)=>{
    UpProducts.find().then(result=>{
        res.status(200).json(result);
    })
    .catch(err=>{
        console.error(err);
    });
})