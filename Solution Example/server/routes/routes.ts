import express, { Express, Request, Response } from "express";
import { BACKEND_ROUTES } from "../constants";
import { getStoriesController, getStoryByIdController } from "../controllers/storiesController";

const storiesRouter = express.Router();

/**
 * GET Список новостей 
 */
storiesRouter.get(BACKEND_ROUTES.STORIES, getStoriesController);

/**
 * GET Новость или комментарий с коренными комметраниями
 */
storiesRouter.get(BACKEND_ROUTES.STORY, getStoryByIdController)



export default storiesRouter;
