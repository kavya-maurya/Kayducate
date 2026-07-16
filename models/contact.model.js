const mongoose= require ("mongoose");



const studentContactSchema = mongoose.Schema(
    {
     name: { type: String, required: true },
  email: { type: String, required: true, },
phone: { type: String, required: true },
 subject: { type: String, required: true },
  message: { type: String, required: true },
  role: {
  type: String,
  enum: ["admin", "user"],
  default: "user"
}
  



  
    }
)

const studentContact = mongoose.model("studentContact",studentContactSchema);

module.exports = studentContact;