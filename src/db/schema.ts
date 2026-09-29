import { pgTable, serial, varchar, text, timestamp, boolean } from "drizzle-orm/pg-core";

/**
 * Quote / consultation requests captured from the contact page.
 * The owner's #1 priority is support follow-through, so we keep
 * status + responded flags for lead handling.
 */
export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 140 }).notNull(),
  email: varchar("email", { length: 180 }).notNull(),
  phone: varchar("phone", { length: 40 }),
  service: varchar("service", { length: 140 }),
  budget: varchar("budget", { length: 80 }),
  timeline: varchar("timeline", { length: 80 }),
  message: text("message"),
  source: varchar("source", { length: 60 }).default("website").notNull(),
  responded: boolean("responded").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
