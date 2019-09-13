exports.seed = function(knex) {
  return knex("resources").insert([
    {
      name: "computer",
      description: "coding tool"
    },
    {
      name: "dictionary"
    },
    { name: "mop", description: "used to swipe house" },
    { name: "vacuum cleaner", description: "cleaning tool" },
    { name: "notebook", description: "A4 size" },
    { name: "pen" }
  ]);
};
