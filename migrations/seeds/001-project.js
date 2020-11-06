exports.seed = function (knex) {
  const projects = [
    {
      name: "Project Save the World",
      description: "Save the world",
      completed: false,
    },
    {
      name: "Project Make Yourselv Happy",
      description: "Love youself",
      completed: true,
    },
    {
      name: "Project Less Stress",
      description: "Live a less stressfull live",
      completed: true,
    },
  ];
  return knex("projects").insert(projects);
};
