const { tournamentService } = require("../services");

// create tournament
const createTournament = async (req, res) => {
    try {
        const reqBody = req.body;
        const tournament = await tournamentService.createTournament(reqBody);
        if (!tournament) {
            throw new Error("Something went wrong, please try again or later.")
        }

        res.status(200).json({
            success: true,
            message: "tournament created successfully.",
            data: tournament
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// get tournament list
const getTournamentList = async (req, res) => {
    try {
        const tournamentList = await tournamentService.getTournamentList(req, res);

        res.status(200).json({
            success: true,
            message: "get tournament list successfully.",
            data: tournamentList
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// delete tournament
const deleteTournament = async (req, res) => {
    try {
        const tournamentId = req.params.tournamentId;
        const tournamentExists = await tournamentService.getTournamentById(tournamentId);
        if (!tournamentExists) {
            throw new Error("tournament not found");
        };

        await tournamentService.deleteTournament(tournamentId);

        res.status(200).json({
            success: true,
            message: "tournament deleted successfully"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// find tournament by id
const getTournamentById = async (req, res) => {
    try {
        const tournamentDetails = await tournamentService.getTournamentById(req.params.tournamentId);

        if (!tournamentDetails) {
            throw new Error("tournament not found");
        }

        res.status(200).json({
            success: true,
            message: "tournament details got successfully.",
            data: tournamentDetails
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// update tournament details
const updateTournament = async (req, res) => {
    try {
        const tournamentId = req.params.tournamentId;
        const tournamentExists = await tournamentService.getTournamentById(tournamentId);
        if (!tournamentExists) {
            throw new Error("tournament not found");
        };

        await tournamentService.updateTournament(tournamentId, req.body);

        res.status(200).json({
            success: true,
            message: "tournament details updated successfully."
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
    createTournament,
    getTournamentList,
    deleteTournament,
    getTournamentById,
    updateTournament
}