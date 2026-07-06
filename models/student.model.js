const mongoose= require ("mongoose");



const studentSchema = mongoose.Schema(
    {
     name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  course: { type: String, required: true },
phone: { type: String, required: true },
role: {
  type: String,
  enum: ["admin", "user"],
  default: "user"
}

  
    }
)

const Student = mongoose.model("student",studentSchema);

module.exports = Student;