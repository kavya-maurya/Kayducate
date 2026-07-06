const express = require("express");

const router = express.Router();

const studentController = require("../controllers/student.controller");

const verifyToken = require("../middleware/verifyToken");

const authValidator = require("../validators/student.validator");
const verifyAdmin = require("../middleware/verifyAdmin");

router.get("/student",verifyToken,verifyAdmin, studentController.getAllStudents);
router.post("/student", verifyToken, studentController.createStudent);

router.get("/student/:id", verifyToken, studentController.getStudentById);

router.put("/student/:id", verifyToken, studentController.updateStudent);

router.delete("/student/:id", verifyToken, studentController.deleteStudent);
// router.get("/student", studentController.searchStudents);

// router.get("/student", studentController.sortStudents);




module.exports = router;