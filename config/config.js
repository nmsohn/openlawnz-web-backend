require('dotenv').config()
const { Pool } = require('pg')

const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_PORT = process.env.DB_PORT || 5432
const DB_NAME = process.env.DB_NAME || 'postgres'
const DB_USER = process.env.DB_USER || 'readonlyuser'
const DB_PASS = process.env.DB_PASS

const pool = new Pool({
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASS,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 3000
})

module.exports = pool
