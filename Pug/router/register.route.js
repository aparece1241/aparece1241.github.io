const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

let User = require('../model/user.model');
const { validationRule, validate } = require('../validator/register_validation');



router.get('/', (req, res) => {
    res.render('register', { title: "Register" });
});

router.post('/', validationRule(), validate,(req, res) => {

    User.find({name: req.body.name},async (err,result)=>{
        if(err){
            return res.status(500).send(err);
        }
        else{
            if(result == ""){
                
                try {
                    const hashedPassword = await bcrypt.hash(req.body.password, 10);
                    let userToAdd = new User();
                    userToAdd.name = req.body.name;
                    userToAdd.email = req.body.email;
                    userToAdd.password = hashedPassword;
            
                    userToAdd.save((err, result) => {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.redirect('/');
                        }
                    });
                } catch (error) {
                    res.status(500).send(err);
                }    

            }else{
                return res.status(400).send("Username already exists!");
            }
        }
    })

});

module.exports = router;