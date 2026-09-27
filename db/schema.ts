import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

const timestamps = { createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`) };

export const enquiries = sqliteTable("enquiries", {
  id: integer("id").primaryKey({ autoIncrement: true }), name: text("name").notNull(), email: text("email").notNull(),
  phone: text("phone").notNull().default(""), programme: text("programme").notNull().default(""), message: text("message").notNull(), ...timestamps,
});
export const bookings = sqliteTable("bookings", {
  id: integer("id").primaryKey({ autoIncrement: true }), name: text("name").notNull(), email: text("email").notNull(),
  phone: text("phone").notNull().default(""), preferredDate: text("preferred_date").notNull(), preferredTime: text("preferred_time").notNull(), topic: text("topic").notNull().default(""), ...timestamps,
});
export const subscribers = sqliteTable("subscribers", {
  id: integer("id").primaryKey({ autoIncrement: true }), email: text("email").notNull().unique(), ...timestamps,
});
