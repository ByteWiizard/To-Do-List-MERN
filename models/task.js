// const mongoose = require('mongoose');
// const TaskSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:[true,'must provide a name of task to add in the list'],
//         trim:true, // this will remove any leading and trailing empty spaces.
//         maxlength:[20,'Keep it short , not more than 20  characters']
//         /* validations in this way we can add validations you
//         can required field has 2 args, which is one described that this is important field to proceed further second describes if that
//         name is not provided so that is will throw an error stating the line we desribed in the argv */
//     }, 
//     completed:{
//         type:Boolean,
//         default:false, // to set default value to the parameter

//     }, 
    
//     /* STRUCTURE OF DATA: as while adding task to the to do list there will be two options whether the task with name 
//     will be completed or not , which will be decided thorugh completed value (boolean), name will hold the task name which has to be done */
//     // remember that we added string and boolean as are accepted values , if i wished to add amount (num) will  give error.
//     // this will not be registered in db (ignored) sorry not an error.
// });





// module.exports = mongoose.model('Task',TaskSchema) /* two parameter are required here first is 'Task' which i will
// describe, and second is TaskSchema name of our model definition */


const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Task', TaskSchema)
