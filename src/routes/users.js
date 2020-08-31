const router = require("express").Router();

module.exports = db => {
  
  router.get("/users", (request, response) => {

    db.query(
      `
      SELECT *
      FROM users
    `,
    ).then(({ rows: results }) => {
      response.json(results);
    });
  });
  
  router.put("/users/register", (request, response) => {

    const { username } = request.body
    let nominations = []

    db.query(
      `
      INSERT into USERS
      (username, nominations)
      VALUES ($1, $2)


    `, [username, nominations]
    ).then(({ rows: results }) => {
      response.json(results);
    });
  });
  

  return router;
};
