const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');

const connectDB=require('./config/database.js')

const Signup=require('./Routes/Signup.js');
const logindata=require('./Routes/Logindata.js')
const BlogData=require('./Routes/Blogdata.js')
const getBlog=require('./Routes/getBlog.js')
const category=require('./Routes/Category.js')
const getcategory=require('./Routes/getCategory.js')
const authorDetail=require('./Routes/createAuthor.js')
const getauthorpost=require('./Routes/getAuthorpost.js')
const createblog=require('./Routes/Blogdata.js')
const getblogcategory=require('./Routes/getBolgCategory.js')
const getdata=require('./Routes/getData.js')
const changeblog=require('./Routes/changeValue.js')

const port=3003; //port no
const app=express();

app.use(bodyparser.json());
app.use(cors());
app.use(express.json());

connectDB();

app.use('/',Signup);
app.use('/',BlogData);
app.use('/',getBlog);
app.use('/',category);
app.use('/',getcategory);
app.use('/',authorDetail)
app.use('/',getauthorpost);
app.use('/',createblog);
app.use('/',getblogcategory);
app.use('/',getdata);
app.use('/',changeblog)
app.use('/',logindata)

 app.use('/hi',(req,res)=>{
    console.log(req.body);
    res.send("hello");
 })
app.use('/', (req, res) => {
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>My Page</title>
    </head>
    <body>
        <h1>Welcome to my page! kkkk</h1>
    </body>
    </html>
    `;
    res.send(html);
});

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});