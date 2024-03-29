import dotenv from 'dotenv';
dotenv.config()

console.log(process.env)

export const PORT= process.env.PORT || 8080
export const domain = process.env.DOMAIN || "http://localhost"

export const fullDomain = `${domain}:${PORT}`
