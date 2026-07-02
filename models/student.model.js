const mongoose= require ("mongoose");
const authValidator = require("../validators/student.validator");


const studentSchema = mongoose.Schema(
    {
     name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  course: { type: String, required: true },
phone: { type: String, required: true },


  
    }
)

const Student = mongoose.model("student",studentSchema);

module.exports = Student;