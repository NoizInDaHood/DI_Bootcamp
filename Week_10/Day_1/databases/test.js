import { Pool } from "pg";


const PGHOST='ep-curly-firefly-as6sbjx7-pooler.c-4.eu-central-1.aws.neon.tech'
const PGDATABASE='neondb'
const PGUSER='neondb_owner'
const PGPASSWORD='npg_fW2Yjye1LOpD'
const PGSSLMODE='require'
const PGCHANNELBINDING='require'
const PGPORT= "5432"

const pool = new Pool({
    host: PGHOST,
    port: PGPORT,
    user: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
    ssl: {rejectUnauthorized: false}
})

const result = await pool.query(
    "insert into products ( name ,price) values ($1, $2) returning * ",
    ["book5",555]
)

