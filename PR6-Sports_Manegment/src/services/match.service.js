const {match} = require("../models");

// create match
const createMatch = async(reqBody) =>{
    return match.create(reqBody);
};

// get match list
const getMatchList = async(req,res) =>{
    return match.find().populate("team");
}

// get match details by id
const getMatchById = async(matchId) =>{
    return match.findById(matchId).populate("team");
};

// delete match
const deleteMatch = async(matchId) =>{
    return match.findByIdAndDelete(matchId);
};

// update match
const updateMatch = async(matchId , updateBody) =>{
    return match.findByIdAndUpdate(matchId , {$set: updateBody});
}

module.exports = {
    createMatch,
    getMatchList,
    getMatchById,
    deleteMatch,
    updateMatch
}