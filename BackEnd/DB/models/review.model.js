import { eq, and, desc  } from "drizzle-orm";
import { db } from "../connection.js";
import { reviews } from "../../src/schema/review.js";

export const createReview = async (reviewData) => {
  const result = await db
    .insert(reviews)
    .values(reviewData)
    .returning();

  return result[0];
};

export const findReviewsByProductId = async (productId, sort = "newest") => {
  let orderCondition;

  if (sort === "oldest") {
    orderCondition = asc(reviews.createdAt);
  } else if (sort === "highest") {
    orderCondition = desc(reviews.rating);
  } else if (sort === "lowest") {
    orderCondition = asc(reviews.rating);
  } else {
    orderCondition = desc(reviews.createdAt);
  }

  const result = await db
    .select()
    .from(reviews)
    .where(eq(reviews.productId, productId))
    .orderBy(orderCondition);

  return result;
};

export const findReviewById = async (reviewId) => {
  const result = await db
    .select()
    .from(reviews)
    .where(eq(reviews.id, reviewId));

  return result[0] || null;
};

export const updateReviewById = async (reviewId, reviewData) => {
  const result = await db
    .update(reviews)
    .set(reviewData)
    .where(eq(reviews.id, reviewId))
    .returning();

  return result[0] || null;
};

export const deleteReviewById = async (reviewId) => {
  const result = await db
    .delete(reviews)
    .where(eq(reviews.id, reviewId))
    .returning();

  return result[0] || null;
};

export const findReviewByUserAndProduct = async (userId, productId) => {
  const result = await db
    .select()
    .from(reviews)
    .where(
      and(
        eq(reviews.userId, userId),
        eq(reviews.productId, productId)
      )
    );

  return result[0] || null;
};