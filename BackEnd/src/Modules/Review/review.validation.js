import { StatusCodes } from "http-status-codes";
import { RESPONSE_MESSAGES } from "../utils/responseCodes.js";

export const addReviewValidation = (req, res, next) => {
  const { userId, productId, rating, comment } = req.body;

  if (!userId || !productId || !rating) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: RESPONSE_MESSAGES.REVIEW.REQUIRED_FIELDS,
    });
  }

  if (rating < 1 || rating > 5) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: RESPONSE_MESSAGES.REVIEW.INVALID_RATING,
    });
  }

  if (comment !== undefined && comment !== null) {
    const trimmedComment = comment.trim();

    if (trimmedComment.length === 0) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: RESPONSE_MESSAGES.REVIEW.COMMENT_ONLY_SPACES,
      });
    }

    if (trimmedComment.length < 3) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: RESPONSE_MESSAGES.REVIEW.COMMENT_TOO_SHORT,
      });
    }

    if (trimmedComment.length > 500) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: RESPONSE_MESSAGES.REVIEW.COMMENT_TOO_LONG,
      });
    }

    req.body.comment = trimmedComment;
  }

  next();
};

export const updateReviewValidation = (req, res, next) => {
  const { rating, comment } = req.body;

  if (rating !== undefined && (rating < 1 || rating > 5)) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: RESPONSE_MESSAGES.REVIEW.INVALID_RATING,
    });
  }

  if (comment !== undefined && comment !== null) {
    const trimmedComment = comment.trim();

    if (trimmedComment.length === 0) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: RESPONSE_MESSAGES.REVIEW.COMMENT_ONLY_SPACES,
      });
    }

    if (trimmedComment.length < 3) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: RESPONSE_MESSAGES.REVIEW.COMMENT_TOO_SHORT,
      });
    }

    if (trimmedComment.length > 500) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: RESPONSE_MESSAGES.REVIEW.COMMENT_TOO_LONG,
      });
    }

    req.body.comment = trimmedComment;
  }

  next();
};

export const productIdValidation = (req, res, next) => {
  const { productId } = req.params;

  if (!productId || isNaN(productId) || Number(productId) <= 0) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: RESPONSE_MESSAGES.REVIEW.INVALID_PRODUCT_ID,
    });
  }

  next();
};

export const reviewIdValidation = (req, res, next) => {
  const { reviewId } = req.params;

  if (!reviewId || isNaN(reviewId) || Number(reviewId) <= 0) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: RESPONSE_MESSAGES.REVIEW.INVALID_REVIEW_ID,
    });
  }

  next();
};