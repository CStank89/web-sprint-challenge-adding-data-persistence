exports.seed = function (knex) {
  const tasks = [
    {
      description: "Take over by pushing positivity",
      completed: false,
      project_id: 1,
    },
    {
      description: "Take time for the thing you love",
      completed: true,
      project_id: 2,
    },
    {
      description: "Take things less seriously",
      completed: true,
      project_id: 3,
    },
  ];
  return knex("tasks").insert(tasks);
};
