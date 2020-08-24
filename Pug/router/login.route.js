const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

let User = require('../model/user.model');

const {validationRule, validate} = require('../validator/login_validation');

router.get('/',(req,res)=>{
    res.render('login',{title: "Login"});
});


router.post('/',validationRule(),validate,(req,res)=>{
    //Somthing here
    User.findOne({name: req.body.name},async (err,user)=>{
        if(err){
            res.status(500).send(err);
        }else{
            console.log(user);
            if(user == null){
                res.send("No users found");        
            }else{
                try {
                    if(await bcrypt.compare(req.body.password, user.password)){
                        res.send("Success");
                    }else{
                        res.send("not allowed");
                    }
                } catch (error) {
                    res.status(500).send(error);
                }
            }
        }
    });
});


router.get('/get-users',(req,res)=>{
    User.find({},(err,result)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.json({data: result});
        }
    })
})

module.exports = router;