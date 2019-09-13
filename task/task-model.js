const db = require("../data/db-config.js");

module.exports = { get, getById, insert };

function get() {
  return db("tasks")
    .select([
      "tasks.id",
      "tasks.description",
      "tasks.notes",
      "projects.name AS project_name",
      "projects.description AS project_description",
      "tasks.completed"
    ])
    .join("projects", "projects.id", "tasks.project_id");
}

function getById(id) {
  return get()
    .where({ "tasks.id": id })
    .first();
}
function insert(task) {
  return db("tasks")
    .insert(task)
    .then(([id]) => getById(id));
}
