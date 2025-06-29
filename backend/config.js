import dotenv from 'dotenv'
dotenv.config()
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD 
if (!JWT_USER_PASSWORD) {
  console.warn("⚠️ JWT_USER_PASSWORD is not defined in .env");
}


const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD 
if (!JWT_ADMIN_PASSWORD) {
  console.warn("⚠️ JWT_USER_PASSWORD is not defined in .env");
}
export default {JWT_ADMIN_PASSWORD,JWT_ADMIN_PASSWORD}