import "dotenv/config";
import { defineConfig  } from "drizzle-kit";

export default defineConfig({
    schema: "./db/schema.ts",
    out: "./db/drizzle/migrations",
    dialect: "postgresql",
    dbCredentials: {
        host: process.env.DB_HOST || 'postgres://postgres:postgres@localhost:5432/daapp_db',
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres',
        database: process.env.DB_NAME || 'daapp_db',
        ssl: false
    },
    verbose: true,
    strict: true
})