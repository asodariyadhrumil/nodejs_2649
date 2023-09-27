const {teamService} = require("../services");

// create team
const createTeam = async(req,res) =>{
    try {
        const reqBody = req.body;
        const team = await teamService.createTeam(reqBody);
        if(!team){
            throw new Error("Something went wrong, please try again or later.")
        }

        res.status(200).json({
            success:true,
            message:"team created successfully.",
            data:team
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

// get team list
const getTeamList = async(req,res) =>{
    try {
        const teamList= await teamService.getTeamList(req,res);

        res.status(200).json({
            success:true,
            message:"get team list successfully.",
            data:teamList
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        }); 
    }
};

// delete team
const deleteTeam = async(req,res) =>{
    try {
        const teamId = req.params.teamId;
        const teamExists = await teamService.getTeamById(teamId);
        if(!teamExists){
            throw new Error("team not found");
        };
        await teamService.deleteTeam(teamId);

        res.status(200).json({
            success:true,
            message:"team deleted successfully"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

// find team by id
const getTeamById = async(req,res) =>{
    try {
        const teamDetails = await teamService.getTeamById(req.params.teamId);

        if(!teamDetails){
            throw new Error("team not found");
        }

        res.status(200).json({
            success:true,
            message:"team details got successfully.",
            data:teamDetails
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

// update team details
const updateTeam = async(req,res) =>{
    try {
        const teamId = req.params.teamId;
        const teamExists = await teamService.getTeamById(teamId);
        if(!teamExists){
            throw new Error("team not found");
        };

        await teamService.updateTeam(teamId , req.body);

        res.status(200).json({
            success : true,
            message:"team details updated successfully."
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
}

module.exports = {
    createTeam,
    getTeamList,
    deleteTeam,
    getTeamById,
    updateTeam
}