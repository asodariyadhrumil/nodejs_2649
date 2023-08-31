const { movieService } = require("../services")

/* Create movie */
const createMovie = async(req,res) =>{
    try {
        const reqBody = req.body;
        const movie =await movieService.createMovie(reqBody);

        if(!movie){
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success : true,
            message : "movie created successfully",
            data: movie
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

/* get movie list */
const getMovieList = async(req,res)=>{
    try {
        const getList = await movieService.getMovieList(req,res);

        res.status(200).json({
            success : true,
            message: "get movie list successfully",
            data: getList
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

/* delete movie */
const deleteMovie = async (req,res) =>{
    try {
        const movieId = req.params.movieId;
        if(!movieId){
            throw new Error("movie not found");
        } 

        await movieService.deleteMovie(movieId);

        res.status(200).json({
            success:true,
            message: "movie deleted successfully"
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        });
    }
};

/** movie details update by id */
const movieUpdate = async (req,res) =>{
    try {
        const movieId = req.params.movieId;
        const movieExists = await movieService.getMovieById(movieId);
        if(!movieExists){
            throw new Error("movie not found");
        }

        await movieService.movieUpdate(movieId , req.body);
        res.status(200).json({
            success:true,
            message:"movie details updated successfully..."
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

module.exports = {
    createMovie,
    getMovieList,
    deleteMovie,
    movieUpdate
}