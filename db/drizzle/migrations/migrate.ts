import "dotenv/config"
import { migrate } from "drizzle-orm/node-postgres/migrator"
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres"
import { Pool } from "pg"

async function main() {
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL});
    const db:NodePgDatabase = drizzle(pool);

    console.log('[migrate] Running migrations...');

    await migrate(db, {migrationsFolder: '../drizzle/migrations'});

    console.log('[migrate] All migration have run, exiting...');

    await pool.end();
}

main(); 