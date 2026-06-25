const express = require("express");

const router = express.Router();
const User = require("../models/student.model")


const nodemailer = require("nodemailer");
const authValidator = require("../validators/student.validator");


// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.SMPT_USER,
    pass: process.env.SMPT_PW,
  },
});

router.post("/student", async (req, res) => {
  try {
    const value = await authValidator.validateAsync(req.body);
    const user = await User.create(req.body);

    const info = await transporter.sendMail({
    from: 'kavyamaurya269@gmail.com', // sender address
    to: "kavyamaurya264@gmail.com", // list of recipients
    subject: "register to kayducate", // subject line
    text: "Hello! congratulation on being part of kayducate community !", // plain text body
    html: "<b>Kayducate</b>", // HTML body
  });

  console.log("you have been registered with kayducate community: %s", info.messageId);

    res.status(200).json({ message: user, status: "you have been logged in" });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "error",
      message: err.details ? err.details[0].message : err.message
    });
  }


});


router.get("/student", async (req, res) => {
  const user = await User.find();
   res.status(200).json({ message: user });
});


router.put("/student/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
   res.status(200).json({ message: user });
});

router.delete("/student/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
   res.status(200).json({ message: "student deleted" });
});
module.exports = router;