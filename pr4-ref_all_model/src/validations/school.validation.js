const Joi = require("joi")


// create school

const createSchool = {
    body: Joi.object().keys({
        school_name: Joi.string().required().trim(),
        student_name: Joi.string().required().trim(),
        student_dob: Joi.string().required().trim(),
        student_gender: Joi.string().required().trim(),
        teacher_name: Joi.string().required().trim(),
        teacher_dob: Joi.string().required().trim(),
        teacher_gender: Joi.string().required().trim(),
    })
}

// list school

const listSchool = {
    query: Joi.object().keys({
        school_name: Joi.string().allow("").trim(),
        student_name: Joi.string().allow("").trim(),
        student_dob: Joi.string().allow("").trim(),
        student_gender: Joi.string().allow("").trim(),
        teacher_name: Joi.string().allow("").trim(),
        teacher_dob: Joi.string().allow("").trim(),
        teacher_gender: Joi.string().allow("").trim(),
    })
}

module.exports = { createSchool,listSchool}