const User = require("../model/User");
const verifyToken = require("./verifyToken");

const adminMiddleware = (req, res, next) => {
  verifyToken(req, res, async () => {
    try {
      const user = req.user;

      const isAdmin =
        user?.isAdmin === true ||
        user?.role === "admin" ||
        user?.role === "ADMIN";

      if (isAdmin) {
        return next();
      }

      const dbUser = await User.findById(user?.id).select("role isAdmin");
      const isDbAdmin =
        dbUser?.isAdmin === true ||
        dbUser?.role === "admin" ||
        dbUser?.role === "ADMIN";

      if (isDbAdmin) {
        return next();
      }

      return res.status(403).json({ message: "Access denied. Admin only." });
    } catch (error) {
      return res.status(500).json({ message: "Failed to verify admin privileges." });
    }
  });
};

module.exports = adminMiddleware;
