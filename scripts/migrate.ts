import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/neon-http';
import { migrate } from 'drizzle-orm/neon-http/migrator';
import path from 'path'; // Import the path module

config({ path: '.env.local' });

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const main = async () => {
  try {
    const migrationsFolder = path.resolve(__dirname, 'drizzle'); // Resolve the absolute path
    console.log('Migrations Folder:', migrationsFolder); // Debug the path
    await migrate(db, { migrationsFolder });
  } catch (error) {
    console.error('Error during Migration:', error);
    process.exit(1);
  }
};

main();
