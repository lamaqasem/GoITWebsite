import {integer, pgTable, serial, text, timestamp, varchar} from "drizzle-orm/pg-core";

export const services = pgTable('Service', {
    id: serial('id').primaryKey(),
    category_id: integer('category_id').notNull(),
    code: varchar('code',{length:100,}).notNull().unique(),
    name_en: varchar('name_en',{length:100,}).notNull(),
    name_ar: varchar('name_ar',{length:100,}).notNull(),
    description_en: text('description_en'),
    description_ar: text('description_ar'),
    icon_url: varchar('icon_url').notNull(),
    created_at: timestamp('created_at').defaultNow(),
})