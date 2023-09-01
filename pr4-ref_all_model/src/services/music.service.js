const { music } = require("../models");

/**
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createMusic = async (reqBody) =>{
    return music.create(reqBody);
};

const getMusicList = async (req,res) =>{
    return music.find();
};

const deleteMusic = async (musicId) =>{
    return music.findByIdAndDelete(musicId);
};

  // Get music details by id
  const getMusicById = async(musicId) =>{
    return music.findById(musicId);
  };

    //update music details by id
  const musicUpdate = async(musicId , updateBody) =>{
    return music.findByIdAndUpdate(musicId , {$set : updateBody});
  };

module.exports = {
    createMusic,
    getMusicList,
    deleteMusic,
    getMusicById,
    musicUpdate
}
