const { musicService } = require("../services");

/* Create music */
const createMusic = async(req,res) =>{
    try {
        const reqBody = req.body;
        const music = await musicService.createMusic(reqBody);

        if(!music){
            throw new Error("Something went wrong, please try again or later!");
        };

        res.status(200).json({
            success : true,
            message:"music created successfully",
            data:music
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

/* get music list */
const getMusicList = async(req,res) =>{
    try {
        const getList = await musicService.getMusicList(req,res);

        res.status(200).json({
            success:true,
            message:"get music list successfully",
            data:getList
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        });
    }
};

/* delete music */
const deleteMusic = async(req,res) =>{
    try {
        const musicId = req.params.musicId;

        if(!musicId){
            throw new Error("music not found");
        };

        await musicService.deleteMusic(musicId);

        res.status(200).json({
            success: true,
            message:"music deleted successfully",
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

/** music details update by id */
const musicUpdate = async (req,res) =>{
    try {
        const musicId = req.params.musicId;
        const musicExists = await musicService.getMusicById(musicId);
        if(!musicExists){
            throw new Error("music not found");
        }

        await musicService.musicUpdate(musicId , req.body);
        res.status(200).json({
            success:true,
            message:"music details updated successfully.."
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

module.exports= {
    createMusic,
    getMusicList,
    deleteMusic,
    musicUpdate
}