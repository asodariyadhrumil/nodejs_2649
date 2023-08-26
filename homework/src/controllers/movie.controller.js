const { movieService } = require("../services");

/** create movie*/
const createMovie = async (req, res) => {
    try {
        const reqBody = req.body;

        const movie = await movieService.createMovie(reqBody);
        if (!movie) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "movie create successfully!",
            data: { movie },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
/** list movie*/
const listMovie = async (req, res) => {
    try {
        const reqBody = req.body;

        const movie = await movieService.listMovie(reqBody);
        if (!movie) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "movie list successfully!",
            data: { movie },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** delete movie*/
const deleteMovie = async (req, res) => {
    try {
        const id=req.params.Id
        const movie = await movieService.listMovie();
        if (!movie) {
            throw new Error("Something went wrong, please try again or later!");
        }
        await movieService.deleteMovie(id)

        res.status(200).json({
            success: true,
            message: "movie delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


module.exports={createMovie,listMovie,deleteMovie}

