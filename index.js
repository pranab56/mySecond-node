const express=require('express')
const app=express()
const port=process.env.PORT || 5000
const cors = require('cors')





const users=[
    {id:1,name:'pronab',email:'pronab@gmail.com'},
    {id:2,name:'roton',email:'roton@gmail.com'},
    {id:3,name:'emon',email:'emon@gmail.com'},
    {id:4,name:'gopal',email:'gopal@gmail.com'},
    {id:5,name:'jishan',email:'jishan@gmail.com'},
    {id:6,name:'krisno',email:'krishno@gmail.com'},
    {id:7,name:'sujon',email:'sujon@gmail.com'},
    {id:8,name:'tusar',email:'tusar@gmail.com'},
    {id:9,name:'jibon',email:'jibon@gmail.com'},
]
app.use(express.json())
app.use(cors())

app.get('/users/:userid',(req,res)=>{
    console.log(req.params);
    const id=parseInt(req.params.userid);
    const user=users.find(user=>user.id===id);


    res.send(user)
})

app.get('/',(req,res)=>{
    res.send('my name is pronab')
})

app.get('/user',(req,res)=>{
 if(req.query.name){
    
    const search=req.query.name.toLocaleLowerCase();
    const match=users.filter(user=>user.name.toLocaleLowerCase().includes(search));
    res.send(match)
 }
   else{
    res.send(users)
   }
})
app.post('/user',(req,res)=>{
    console.log(req.body);
    const user=req.body;
    user.id=users.length+1;
    users.push(user)
    res.send(user)
})


app.listen(port,()=>{
    console.log('listen with processor');
})