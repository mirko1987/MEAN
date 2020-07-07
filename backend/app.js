const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose.connect("mongodb+srv://mirko:focus.800a@cluster0.jbs1g.mongodb.net/<dbname>?retryWrites=true&w=majority",{useUnifiedTopology: true,useNewUrlParser: true})
.then(()=>{
  console.log("connect to database");
})
.catch(()=>{
  console.log("Connection fail!");
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  post.save().then(createdPost=>{
    console.log(createdPost)
    res.status(201).json({
      message: 'ciao',
      postId:createdPost._id
    });
  });
});

app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "fadf12421l",
      title: "First server-side post",
      content: "This is coming from the server"
    },
    {
      id: "ksajflaj132",
      title: "Second server-side post",
      content: "This is coming from the server!"
    }
  ];
  Post.find().then((documents)=>{
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
    console.log(documents);
  });

});

app.delete("/api/posts/:id",(req,res,next)=>{
  Post.deleteOne({_id:req.params.id}).then(result=>{
    console.log(result);
    console.log(req.params.id);
  res.status(200).json({message:'Post delted'});
  });
  });

module.exports = app;
