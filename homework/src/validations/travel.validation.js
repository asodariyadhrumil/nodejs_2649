const Joi = require("joi")


// create travel
const createTravel = {
    body: Joi.object().keys({
        travel_name: Joi.string().required().trim(),
        travel_purposes: Joi.string().required().trim(),
        travel_planning: Joi.string().required().trim(),
        travel_resources: Joi.string().required().trim(),
    })

}
// list travel
const listTravel = {
    query: Joi.object().keys({
        travel_name: Joi.string().allow("").trim(),
        travel_purposes: Joi.string().allow("").trim(),
        travel_planning: Joi.string().allow("").trim(),
        travel_resources: Joi.string().allow("").trim(),
    })
}

module.exports={createTravel, listTravel}