

const express = require("express");

const router = express.Router();

const contactController = require("../controllers/contact.Controller");

const verifyToken = require("../middleware/verifyToken");


router.get("/contact",verifyToken, contactController.getAllContacts);
router.post("/contact", verifyToken, contactController.createContact);

router.get("/contact/:id", verifyToken, contactController.getContactById);

router.put("/contact/:id", verifyToken, contactController.updateContact);

router.delete("/contact/:id", verifyToken, contactController.deleteContact);
// router.get("/contact", contact.Controller.searchStudents);

// router.get("/contact", contact.Controller.sortStudents);




module.exports = router;