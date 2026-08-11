import { env } from "cloudflare:workers";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

let waitlistSchemaReady: Promise<void> | undefined;

function getD1() {
  if (!env.DB) {
    throw new Error("Le stockage de la liste d’attente est indisponible.");
  }

  return env.DB;
}

export function getDb() {
  return drizzle(getD1(), { schema });
}

export async function ensureWaitlistSchema() {
  if (!waitlistSchemaReady) {
    const d1 = getD1();
    waitlistSchemaReady = d1
      .batch([
        d1.prepare(`
          CREATE TABLE IF NOT EXISTS waitlist_entries (
            id TEXT PRIMARY KEY NOT NULL,
            email TEXT NOT NULL,
            full_name TEXT NOT NULL,
            profile TEXT NOT NULL,
            country TEXT NOT NULL,
            portfolio_size TEXT NOT NULL,
            source TEXT DEFAULT 'landing' NOT NULL,
            status TEXT DEFAULT 'pending' NOT NULL,
            consent_at TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL
          )
        `),
        d1.prepare(`
          CREATE UNIQUE INDEX IF NOT EXISTS waitlist_entries_email_unique
          ON waitlist_entries (email)
        `),
      ])
      .then(() => undefined)
      .catch((error) => {
        waitlistSchemaReady = undefined;
        throw error;
      });
  }

  await waitlistSchemaReady;
}
