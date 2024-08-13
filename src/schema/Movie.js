import mongoose from "mongoose";

const {Schema} = mongoose

const movieSchema = new Schema({
    "title":{
        type: String,
        required: true

    }, 
    "description":{
        type: String,
        required: true
    }, 
    "release_year":{
        type: Number,
        required: true
    },
    "genre":{
        type: String,
        required: true
    }, 
    "director":{
        type: String,
        required: true
    }

});

const Movie = mongoose.model("Movie", movieSchema )
export default Movie;
