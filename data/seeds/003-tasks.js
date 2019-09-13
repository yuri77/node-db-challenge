exports.seed = function(knex) {
  return knex("tasks").insert([
    {
      description: "do db4-challenge",
      notes: "sprint challenge",
      project_id: 1
    },
    {
      description: "review lecture video",
      project_id: 1,
      completed: true
    },
    {
      description: "google regx",
      notes: "google is the best",
      project_id: 2
    },
    {
      description: "vacuum the whole house",
      notes: "stay clean",
      project_id: 3
    },
    {
      description: "get gym membership",
      notes: "$$",
      project_id: 4
    },
    {
      description: "run for 30 min",
      notes: "stay healthy",
      project_id: 4
    }
  ]);
};
