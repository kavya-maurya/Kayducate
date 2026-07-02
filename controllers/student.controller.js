const User= require("../models/student.model")
module.exports = {
  
    createStudent:async (req, res) => {
      try {
    const value = await authValidator.validateAsync(req.body);
    const user = await User.create(req.body);


 
    res.status(200).json({ message: user, status: "you have been logged in" });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "error",
      message: err.details ? err.details[0].message : err.message
    });
  }
    },


getAllStudents:async (req, res) => {
      const user = await User.find();
     
       res.status(200).json({ message: user });
    },

getStudentById:async (req, res) => {
      const user = await User.findById(req.params.id)
     
       res.status(200).json({ message: user });
    },

updateStudent:async (req, res) => {
      const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json({ message: user });
    },

deleteStudent:async (req, res) => {
       const user = await User.findByIdAndDelete(req.params.id);
         res.status(200).json({ message: "student deleted" });
      
    },

// searchStudents:async (req, res) => {
//       const user = await req.query.search;
     
//        res.status(200).json({ message: user });
//     },

// sortStudents:async (req, res) => {
//       const user = await User.find();
     
//        res.status(200).json({ message: user });
//     },
    
}