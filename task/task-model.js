const db = require("../data/db-config.js");

module.exports = { get };

function get() {
  return db("tasks")
    .select([
      "tasks.description",
      "tasks.notes",
      "projects.name AS project_name",
      "projects.description AS project_description"
    ])
    .join("projects", "projects.id", "tasks.project_id");
}
