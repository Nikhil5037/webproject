let mongoose = require("mongoose")

let Schema = mongoose.Schema

let SurveySchema = new Schema({
    surveyName: {
        type:String, 
        required:true
    },
    option1: {
        type:String, 
        required: true
    },
    option2: {
        type:String, 
        required: true
    },
    token:{
        type: String,
        required:true
    }

})

module.exports = mongoose.model("surveyModel", SurveySchema,"surveys")