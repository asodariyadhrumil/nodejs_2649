const {tournament} = require("../models");

// create tournament
const createTournament = async(reqBody) =>{
    return tournament.create(reqBody);
};

// get tournament list
const getTournamentList = async(req,res) =>{
    return tournament.find().populate({
        path: "category",
        select: ["category_name"],
      }).populate("team");
};

// delete tournament
const deleteTournament = async(tournamentId) =>{
    return tournament.findByIdAndDelete(tournamentId)
};

// get tournament details by id
const getTournamentById = async(tournamentId) =>{
    return tournament.findById(tournamentId).populate({
        path: "category",
        select: ["category_name"],
      }).populate("team");
};

// update tournament details
const updateTournament = async(tournamentId , updateBody) =>{
    return tournament.findByIdAndUpdate(tournamentId , {$set : updateBody});
};


module.exports={
    createTournament,
    getTournamentList,
    deleteTournament,
    getTournamentById,
    updateTournament
}
