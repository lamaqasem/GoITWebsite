import express from "express";
import { StatusCodes } from "http-status-codes";
import messages from "./utils/messages.js";
import routerServices from "./Modules/services/services.router.js"
import reviewRouter from "./Modules/Review/review.router.js";

const initApp = (app) => {
  app.use(express.json()); 
  // routes
  app.use("/reviews", reviewRouter);
  // 404 handler
  app.use('/api/services', routerServices);
  app.use((req, res) => {
    return res.status(StatusCodes.NOT_FOUND).json({
      message: messages.pageNotFound,
    });
  });
};

export default initApp;