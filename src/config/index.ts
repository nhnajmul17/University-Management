import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.MONGODB_URL,
  default_student_pass: process.env.DEFAULT_STUDENT_PASS,
  default_faculty_pass: process.env.DEFAULT_FACULTY_PASS,
  bcrypt_salt_round: process.env.BCRYPT_SALT_ROUND,

  jwt: {
    secret: process.env.JWT_SECRET,
    jwt_expires_in: process.env.JWT_EXPIRES_IN,
    refresh_secret: process.env.JWT_REFRESH_SECRET,
    jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  },
};
