const Joi = require("joi")

//create bus
const createBus ={
    body:Joi.object().keys({
    bus_name :Joi.string().required().trim(),
    bus_route : Joi.string().required().trim(),
    bus_stop : Joi.string().required().trim(),
    bus_ticket : Joi.string().required().trim(),
    })
}

//list bus
const listBus ={
    qurey:Joi.object().keys({
    bus_name :Joi.string().allow("").trim(),
    bus_route : Joi.string().allow("").trim(),
    bus_stop : Joi.string().allow("").trim(),
    bus_ticket : Joi.string().allow("").trim(),
    })
}


module.exports = {createBus,listBus}