const knex = require("./connect");

const getAllPatients = () => {
  return knex("medical-bills").select("*");
};

const createNewPatient = (patientDetails) => {
  return knex("medical-bills").insert(patientDetails);
};

module.exports = {
  getAllPatients,
  createNewPatient,
};
