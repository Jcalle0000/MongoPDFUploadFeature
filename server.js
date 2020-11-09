var express= require('express')
var app= express()
const port = 1111;
// var bodyParser=require('body-parser')
var cors = require('cors')

const indexRouter=require('./routes/index') 


app.use(express.json() ); // allows you to send post requests
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use( '/', indexRouter )
// // needed for post and put (req.body)
// app.use(bodyParser.json() )    
// app.use(bodyParser.urlencoded({extended:true}))
// https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded/51844327

app.use('/assets', express.static('assets')) // assets folder holds our css

app.set('view engine', 'ejs')



app.listen(port, ()=>{
    console.log(`app istening at localhost:${port}`)
})