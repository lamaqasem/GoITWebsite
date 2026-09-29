import { services } from "../../src/schema/services.js";
import { db } from "../connection.js";
import { eq } from "drizzle-orm";

export const findAllService = async () => {
  return db.select().from(services);
};

export const getServiceById = async (id) => {
  const result = await db.select().from(services).where(eq(services.id, id));
  return result[0];
};

export const findServiceByCode = async (code) => {
  const result = await db
    .select()
    .from(services)
    .where(eq(services.code, code));
  return result[0];
};

export const createService = async (data) => {
  const newService = await db.insert(services).values(data).returning();
  return newService[0];
};

export const updateService = async (id, data) => {
  const result = await db
    .update(services)
    .set(data)
    .where(eq(services.id, id))
    .returning();
  return result[0];
};

export const deleteService = async (id) => {
  const result = await db
    .delete(services)
    .where(eq(services.id, id))
    .returning();
  return result[0];
};
