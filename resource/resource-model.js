const db = require("../data/db-config.js");

module.exports = { get, getById, insert };

function get() {
  return db("resources");
}
function getById(id) {
  return db("resources").where({ "resources.id": id });
}
function insert(resource) {
  return db("resources").insert(resource, "id");
}
