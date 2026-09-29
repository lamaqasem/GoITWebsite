import {
  createReview,
  findReviewsByProductId,
  findReviewById,
  findReviewByUserAndProduct,
  updateReviewById,
  deleteReviewById,
} from "../../../DB/models/review.model.js";
import { StatusCodes } from "http-status-codes";
import { RESPONSE_MESSAGES } from "../utils/responseCodes.js";

// Add Review
export const addReview = async (req, res) => {
  try {
    const { userId, productId, rating, comment } = req.body;

    if (rating < 1 || rating > 5) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: RESPONSE_MESSAGES.REVIEW.INVALID_RATING,
      });
    }

    const existingReview = await findReviewByUserAndProduct(
      Number(userId),
      Number(productId)
    );

    if (existingReview) {
      return res.status(StatusCodes.CONFLICT).json({
        message: RESPONSE_MESSAGES.REVIEW.ALREADY_REVIEWED,
      });
    }

    const newReview = await createReview({
      userId,
      productId,
      rating,
      comment,
    });

    return res.status(StatusCodes.CREATED).json({
      message: RESPONSE_MESSAGES.REVIEW.CREATED,
      data: newReview,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: RESPONSE_MESSAGES.REVIEW.CREATE_FAILED,
      error: error.message,
    });
  }
};

// Get Reviews For Specific Product
export const getProductReviews = async (req, res) => {
  try {
    const { productId } = req.params;
    const { sort } = req.query;

    const productReviews = await findReviewsByProductId(
      Number(productId),
      sort
    );

    return res.status(StatusCodes.OK).json({
      message: RESPONSE_MESSAGES.REVIEW.FETCHED,
      data: productReviews,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: RESPONSE_MESSAGES.REVIEW.FETCH_FAILED,
      error: error.message,
    });
  }
};

// Update Review
export const updateReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const { rating, comment } = req.body;

    if (rating < 1 || rating > 5) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: RESPONSE_MESSAGES.REVIEW.INVALID_RATING,
      });
    }

    const existingReview = await findReviewById(Number(reviewId));

    if (!existingReview) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: RESPONSE_MESSAGES.REVIEW.NOT_FOUND,
      });
    }

    const updatedReview = await updateReviewById(Number(reviewId), {
      rating,
      comment,
      updatedAt: new Date(),
    });

    return res.status(StatusCodes.OK).json({
      message: RESPONSE_MESSAGES.REVIEW.UPDATED,
      data: updatedReview,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: RESPONSE_MESSAGES.REVIEW.UPDATE_FAILED,
      error: error.message,
    });
  }
};

// Delete Review
export const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params;

    const existingReview = await findReviewById(Number(reviewId));

    if (!existingReview) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: RESPONSE_MESSAGES.REVIEW.NOT_FOUND,
      });
    }

    const deletedReview = await deleteReviewById(Number(reviewId));

    return res.status(StatusCodes.OK).json({
      message: RESPONSE_MESSAGES.REVIEW.DELETED,
      data: deletedReview,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: RESPONSE_MESSAGES.REVIEW.DELETE_FAILED,
      error: error.message,
    });
  }
};

export const getReviewById = async (req, res) => {
  try {
    const { reviewId } = req.params;

    const review = await findReviewById(Number(reviewId));

    if (!review) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: RESPONSE_MESSAGES.REVIEW.NOT_FOUND,
      });
    }

    return res.status(StatusCodes.OK).json({
      message: RESPONSE_MESSAGES.REVIEW.FETCHED,
      data: review,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: RESPONSE_MESSAGES.REVIEW.FETCH_FAILED,
      error: error.message,
    });
  }
};