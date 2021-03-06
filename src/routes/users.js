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
    })
    .catch( err =>{

      response.status(400);
      response.send('None shall pass');

    })
  });


  router.get("/users/:username", (request, response) => {

    const username=request.params.username
    db.query(
      `
      SELECT * FROM users
      WHERE username = $1
      `,
      [username]
    )
      .then(({ rows: user }) => {
        response.json(user);
      })
      .catch(error => console.log(error));
  });


  router.patch("/users/:userID", (request, response) => {

    const userID = request.params.userID
    const {nominations} = request.body

    db.query(
      `
      UPDATE users
      SET
      nominations = $1
  
      WHERE user_id= $2
    `, [nominations, userID]
    ).then(({ rows: results }) => {
      response.json(results);
    }).catch( err =>{
      console.log(err)
    })
  });
  

  return router;
};

