import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTI1YmU0MGFkZGE2ODRjZjEyNGJjZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzExMDc5OSwiZXhwIjoxNjMzMzY5OTk5fQ.bamrYeGMug9Q230NDNtjwvW6fm9wSOgv8vO4Dx-x_hE"

export const publickRequest = axios.create(
   { baseURL: BASE_URL}
)

export const userRequest = axios.create(
   { 
    baseURL: BASE_URL,
   header: { token: `Bearer ${TOKEN}` },

}
)