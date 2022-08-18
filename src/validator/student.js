
const{check}=require('express-validator')

let studentValidator =[

    check('name','first name is require' ).notEmpty(),
    check('surname','surname is require').notEmpty()
]
exports.studentValidator=studentValidator