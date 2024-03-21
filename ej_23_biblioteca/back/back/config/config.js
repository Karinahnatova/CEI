import dotenv from 'dotenv';
dotenv.config()


console.log(process.env)

export const PORT= process.env.PORT || 8080
export const domain = process.env.DOMAIN || "http://localhost"

//DATOS DE DB
export const host= process.env.HOSTNAME 
export const user= process.env.DB_USER
export const pass= process.env.DB_PASS
export const database= process.env.DATA_BASE

export const fullDomain = `${domain}:${PORT}`

