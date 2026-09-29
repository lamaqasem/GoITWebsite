import { Router } from "express";
import * as reviewController from "./review.controller.js";
import * as reviewValidation from "./review.validation.js";

const router = Router();

router.post(
  "/",
  reviewValidation.addReviewValidation,
  reviewController.addReview
);

router.get(
  "/product/:productId",
  reviewValidation.productIdValidation,
  reviewController.getProductReviews
);


router.get(
  "/:reviewId",
  reviewValidation.reviewIdValidation,
  reviewController.getReviewById
);

router.put(
  "/:reviewId",
  reviewValidation.reviewIdValidation,
  reviewValidation.updateReviewValidation,
  reviewController.updateReview
);

router.delete(
  "/:reviewId",
  reviewValidation.reviewIdValidation,
  reviewController.deleteReview
);

export default router;