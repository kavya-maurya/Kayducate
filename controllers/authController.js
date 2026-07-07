const User = require("../models/user");
const logger = require("../config/logger");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const transporter = require("../config/mail");
const nodemailer = require("nodemailer");
const verifyAdmin = require("../middleware/verifyAdmin");



module.exports = {
  Login: async (req, res) => {
    try {
      const { email, password } = req.body;
      logger.info(`Login attempt for email: ${email}`);
//       await transporter.sendMail({
//     from: process.env.EMAIL_USER,
//     to: email,
//     subject: "Registration Successful",
//     text: `Hello , your registration was successful!`
// });


      const user = await User.findOne({ email: email });
      if (!user) {
        logger.warn(`Login failed: user not found for email ${email}`);
        return res.status(400).json({ message: "User not found" });
      }

      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        logger.warn(`Login failed: incorrect password for email ${email}`);
        return res.status(400).json({ message: "Credentials are not correct" });
      }

      const token = jwt.sign({ id: user._id, email: user.email,role: user.role }, process.env.JWT_SECRET, { expiresIn: "24h" });
      logger.info(`Login successful for user: ${user.email}`);

      return res.status(200).json({ message: "Login successful", token: token, user: user });
    } catch (err) {
      logger.error(`Login error: ${err.message}`);
      return res.status(500).json({ message: "An error occurred during login", error: err.message });
    }
  },

  Register: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      logger.info(`Registration attempt for email: ${email}`);

      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        logger.warn(`Registration failed: email already exists ${email}`);
        return res.status(400).json({ message: "Email already exists" });
      }

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      const user = await User.create({
        name: name,
        email: email,
        password: hash,
      });
      logger.info(`User registered successfully: ${user.email}`);
      return res.status(201).json({ message: "User registered successfully", status: user });
    } catch (err) {
      logger.error(`Registration error: ${err.message}`);
      return res.status(500).json({ message: "An error occurred during registration", error: err.message });
    }
  },
};
 