const { matchService } = require("../services");

// create match
const createMatch = async (req, res) => {
    try {
        const reqBody = req.body;
        const match = await matchService.createMatch(reqBody);
        if (!match) {
            throw new Error("Something went wrong , please try again later..");
        };

        res.status(200).json({
            success: true,
            message: "Match created successfully.",
            data: match
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// get match list
const getMatchList = async (req, res) => {
    try {
        const getList = await matchService.getMatchList(req, res);

        res.status(200).json({
            success: true,
            message: "Match list got successfully.",
            data: getList
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// get match details by id
const getMatchById = async (req, res) => {
    try {
        const getMatch = await matchService.getMatchById(req.params.matchId);

        if(!getMatch){
            throw new Error("Match not found");
        }

        res.status(200).json({
            success:true,
            message:"Match details got successfully.",
            data:getMatch
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// delete match
const deleteMatch = async(req,res) =>{
    try {
        const matchExists = await matchService.getMatchById(req.params.matchId);
        if(!matchExists){
            throw new Error("match not found");
        };

        await matchService.deleteMatch(matchId);

        res.status(200).json({
            success:true,
            messge:"match deleted successfully."
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

// update match
const updateMatch = async(req,res) =>{
    try {
        const matchId = req.params.matchId;
        const matchExists = await getMatchById(matchId);
        if(!matchExists){
            throw new Error("match not found");
        };

        await matchService.updateMatch(matchId, req.body);

        res.status(200).json({
            success:true,
            message:"match details updated successfully."
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
    createMatch,
    getMatchList,
    getMatchById,
    deleteMatch,
    updateMatch
}