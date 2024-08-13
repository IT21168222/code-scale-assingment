import express from 'express'
import { addToWatchlist, getWatchlist, removeFromWatchlist } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.post("/", addToWatchlist);
userRouter.get("/", getWatchlist);
userRouter.delete("/:id", removeFromWatchlist);

export default userRouter;