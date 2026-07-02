import { Pool } from "pg";
import { config } from "dotenv";

config()

console.log(process.env);

const {PGHOST, PGDATABASE,PGPASSWORD,PGPORT, PGUSER} = process.env


const pool = new Pool({
  host: PGHOST,
  port: PGPORT,
  user: PGUSER,
  database: PGDATABASE,
  password: PGPASSWORD,
  ssl: { rejectUnauthorized: false },
});

/** select */
// const result = await pool.query(
//   "select * from products where id = $1 or id = $2",
//   [3, 1],
// );

/** insert */
const result = await pool.query(
    `insert into products 
        (name,price) 
    values ($1, $2), 
            ($3,$4) 
    returning *`,
    ['iphone', 1000, 'ipad', 777]
)

console.log(result.rows);
