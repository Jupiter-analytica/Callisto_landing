import { sql } from "drizzle-orm";
import { integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const waitlistEntries = sqliteTable(
  "waitlist_entries",
  {
    id: text("id").primaryKey(),
    email: text("email").notNull(),
    fullName: text("full_name").notNull(),
    profile: text("profile").notNull(),
    country: text("country").notNull(),
    portfolioSize: text("portfolio_size").notNull(),
    source: text("source").notNull().default("landing"),
    status: text("status").notNull().default("pending"),
    consentAt: text("consent_at").notNull().default(sql`CURRENT_TIMESTAMP`),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [uniqueIndex("waitlist_entries_email_unique").on(table.email)]
);
