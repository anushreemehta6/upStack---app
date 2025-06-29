import jwt from "jsonwebtoken";
import config from "../config.js";

function adminMiddleware(req, res, next) {
  console.log("Request Headers:", req.headers); // log everything

  const authHeader = req.headers.authorization;
  console.log("Authorization Header:", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ errors: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, config.JWT_ADMIN_PASSWORD);
    console.log("Decoded JWT:", decoded);
    req.adminId = decoded.id;
    next();
  } catch (error) {
    console.log("JWT Error:", error);
    return res.status(401).json({ errors: "Invalid token or expired" });
  }
}
export default adminMiddleware