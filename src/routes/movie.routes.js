import express from 'express'
import { createMovie, deleteMovie, getMovie, updateMovie, getFilteredMovies } from '../controllers/movie.controller.js';

const movieRouter = express.Router();

movieRouter.post("/", createMovie);
movieRouter.get("/", getFilteredMovies);
movieRouter.get("/:id", getMovie);
movieRouter.put("/:id", updateMovie);
movieRouter.delete("/:id", deleteMovie);

export default movieRouter;