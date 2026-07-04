

const User = require("../models/contact.model");
// const logger = require("../config/logger");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const transporter = require("../config/mail");
// const nodemailer = require("nodemailer");

const authValidator = require("../validators/contact.validator");

module.exports = {
  
    createContact:async (req, res) => {
      try {
    const value = await authValidator.validateAsync(req.body);
    const user = await User.create(req.body);


 
    res.status(200).json({ message: user, status: "Contact created successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "error",
      message: err.details ? err.details[0].message : err.message
    });
  }
    },


getAllContacts:async (req, res) => {
      const user = await User.find();
     
       res.status(200).json({ message: user });
    },

getContactById:async (req, res) => {
      const user = await User.findById(req.params.id)
     
       res.status(200).json({ message: user });
    },

updateContact:async (req, res) => {
      const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json({ message: user });
    },

deleteContact:async (req, res) => {
       const user = await User.findByIdAndDelete(req.params.id);
         res.status(200).json({ message: "contact deleted" });
      
    },

// searchContacts:async (req, res) => {
//       const user = await req.query.search;
     
//        res.status(200).json({ message: user });
//     },

// sortContacts:async (req, res) => {
//       const user = await User.find();
     
//        res.status(200).json({ message: user });
//     },
    
}