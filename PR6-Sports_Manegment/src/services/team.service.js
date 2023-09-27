const {team} = require("../models");

// create team
const createTeam = async(reqBody) =>{
    return team.create(reqBody);
};

// get team list
const getTeamList = async(req,res) =>{
    return team.find().populate("user").populate({
        path: "category",
        select: ["category_name"],
      });
};

// delete team
const deleteTeam = async(teamId) =>{
    return team.findByIdAndDelete(teamId)
};

// get team details by id
const getTeamById = async(teamId) =>{
    return team.findById(teamId).populate("user").populate({
        path: "category",
        select: ["category_name"],
      });
};

// update team details
const updateTeam = async(teamId , updateBody) =>{
    return team.findByIdAndUpdate(teamId , {$set : updateBody});
};


module.exports={
    createTeam,
    getTeamList,
    deleteTeam,
    getTeamById,
    updateTeam
}
