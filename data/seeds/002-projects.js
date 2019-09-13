exports.seed = function(knex) {
  return knex("projects").insert([
    {
      name: "learn knex",
      description:
        "goal is to able to use migration to maintain database schema"
    },
    {
      name: "learn regx",
      description: "regular expression can be quite powerful"
    },
    { name: "clean house" },
    { name: "exercise", description: "stay healthy" }
  ]);
};
