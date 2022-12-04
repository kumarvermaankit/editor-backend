const Mongoose = require('mongoose');
const { Schema } = Mongoose;


const FileSchema = new Schema({

    name:{
        type:String
    },
    language:{
        type:String
    },
    extension:{
        type:String
    },
    code:{
        type:String
    }



});

const UserSchema = new Schema({
    id:{
        type:String
    },
    files:[FileSchema]
});

module.exports = Mongoose.model('UserSchema',UserSchema);



