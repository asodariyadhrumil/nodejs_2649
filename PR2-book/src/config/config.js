const dotenv =require("dotenv");
const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

  module.exports = {
    port: envVars.PORT,
    mongodb: {
      url: envVars.MONGODB_URL,
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }}}