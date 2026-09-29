import { pgTable, serial, integer, text, timestamp } from "drizzle-orm/pg-core";
//import { users } from "./User.model.js";
//import { products } from "./Product.model.js";

export const reviews = pgTable("reviews", {

  id: serial("id").primaryKey(),

  userId: integer("user_id")
    .notNull(),
    //.references(() => users.id) when user module be ready

  productId: integer("product_id")
    .notNull(),
   // .references(() => products.id) when products module be ready

  rating: integer("rating").notNull(),

  comment: text("comment"),

  createdAt: timestamp("created_at").defaultNow(),

  updatedAt: timestamp("updated_at").defaultNow(),

}, (table) => ({
    userProductUnique: unique().on(table.userId, table.productId),
  }));