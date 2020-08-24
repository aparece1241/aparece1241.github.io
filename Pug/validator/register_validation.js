const {body, validationResult} = require('express-validator');

const validationRule = () =>{
    return [
        body("name").isAlpha(),
        body("email").isEmail(),
        body("password").isAlphanumeric()
    ];
}

const validate = (req,res,next) =>{
    const errors = validationResult(req);

    if(errors.isEmpty()){
        return next();
    }

    let extractedErrors = [];

    errors.array().map(err => extractedErrors.push({[err.param]:err.msg}));

    res.status(500).json(
        {
            errors: extractedErrors
        }
    );
}

module.exports = {validationRule,validate}