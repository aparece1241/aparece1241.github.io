const express = require('express');
const router = express.Router();

//bring in the article model
let Articles = require('../model/articles.model');

//get the article by id
router.get('/:id',(req,res)=>{
    Articles.findById(req.params.id,(err,article)=>{
        if(err){
            res.status(500).send(err);
        }
        res.render('article_details',{title: "Article details",article: article});
    })
})


// get one article to edit
router.get('/:id/update',(req,res)=>{
    Articles.findById(req.params.id,(err,article)=>{
        if(err){
            res.status(500).send(err);
        }
        res.render('update_article',{title: "Update Article",article: article});
    })
})



//render the form
router.get('/', (req, res) => {
    res.render('add_article', { title: " Add article" })
});

//deletes one article
router.delete('/delete/:id',(req,res)=>{
    Articles.findByIdAndDelete(req.params.id,(err,result)=>{
        if(err){
            res.status(500).send()
        }
        res.send("Success");
    });
});

// post the values inside the form
router.post('/add', (req, res) => {
    let today = new Date().toString();
    let newArticletoAdd = new Articles(
        {
            title: req.body.title,
            author: req.body.author,
            date: (req.body.date=="")? today : req.body.date,
            body: req.body.body
        }
    )
    try {
        newArticletoAdd.save((err) => {

            if (err) {
                res.status(500).send(err);
            }
            res.redirect('/');
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("something went wrong")
        
    }
   
})

//update one article
router.post('/:id/update',(req,res)=>{
    let updatedArticle = {
        title: req.body.title,
        author: req.body.author,
        date: (req.body.date=="")? new Date().toString() : req.body.date,
        body: req.body.body
    }
    Articles.findByIdAndUpdate(req.params.id,updatedArticle,{new: true},(err,result)=>{
        if(err){
            res.status(500).send(err);
        }
        res.redirect("/");
    })
})

// /sdfsfsd
module.exports = router;