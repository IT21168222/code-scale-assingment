import Movie from "../schema/Movie.js";


export const createMovie = async(req,res) => {

    const {title, description, release_year, genre, director} = req.body

    const newMovie = new Movie({title, description, release_year, genre, director});

    try{
        const saved = await newMovie.save();
        res.status(201).json(saved);

    }catch(error){
        res.status(400).json({"message": "Internal server error"});
        console.error("Error creating movie!", error)

    }

}
export const getMovie = async(req,res) => {
    
    try{
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie);

    }catch(error){
        res.status(400).json({"message": "Internal server error"});
        console.error("Error creating movie!", error)

    }

}

export const getAllMovies = async(req,res) => {
    const{id} = req.params
    try{
        const movies = await Movie.findOne({});
        res.status(200).json(movies);

    }catch(error){
        res.status(400).json({"message": "Internal server error"});
        console.error("Error getting movies!", error)

    }

}


export const getFilteredMovies = async (req, res) => {
    const { title, genre, director, release_year } = req.query;

    const filter = {};

    if (title) {
        filter.title = { $regex: title, $options: "i" }; 
    }
    if (genre) {
        filter.genre = genre;
    }
    if (director) {
        filter.director = { $regex: director, $options: "i" };
    }
    if (release_year) {
        filter.release_year = release_year;
    }

    try {
        const movies = await Movie.find(filter);
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        console.error("Error fetching movies!", error);
    }
};

export const updateMovie = async(req,res) => {

    const{id} = req.params
    const {title, description, release_year, genre, director} = req.boby

    try{
        const movie = await Movie.findById({id})

        if(!movie){
            return res.status(404).json({"message": "Movie not found!"});
        }

        const updated = await Movie.findByIdAndUpdate(id, {title, description, release_year, genre, director})


        res.status(200).json(updated);

    }catch(error){
        res.status(400).json({"message": "Internal server error"});
        console.error("Error updating movie!")

    }

}

export const deleteMovie = async(req,res) => {

    const { id } = req.params;
    

    try{
        const movie = await Movie.findById(id)
        console.log(movie)

        if(!movie){
            return res.status(404).json({"message": "Movie not found!"});
        }

        await Movie.findByIdAndDelete(id);

        res.status(200).json({"message": "Movie Deleted!"});

    }catch(error){
        res.status(500).json({ message: 'Internal Server Error' });
        console.error("Error deleting movie!", error)

    }

}


