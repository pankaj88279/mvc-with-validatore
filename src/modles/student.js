
const{mongoose}=require('../config/db')

let Studentschema={ 
    name: String,
    surname:String,
    adress:String

}


const Student = mongoose.model('Student',Studentschema)



exports.Student = Student

