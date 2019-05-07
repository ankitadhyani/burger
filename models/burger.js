//import our connection
const connection = require("./connection");


// create a function that reads from the 'burgers' table
const findAll = () => {
    // create a Promise
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM burgers', function (err, dbBurgers) {
            if (err) {
                return reject(err);
            }

            return resolve(dbBurgers);
        });
    });
};

// find a burger by id
const findById = burgerId => {
  // create a new Promise
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burgers WHERE id = ?', [burgerId], function(err, dbBurgerData) {
      if (err) {
        return reject(err);
      }
      return resolve(dbBurgerData);
    });
  });
};


// CREATE/INSERT new burger data into table
const create = burgerDataObj => {

  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO burgers SET ?', [burgerDataObj], function(err, dbBurgerData) {
      if (err) {
        return reject(err);
      }
      return resolve(dbBurgerData);
    });
  });

};



const update = (devouredValue, burgerId) => {

    return new Promise((resolve, reject) => {

        // set devouredValue to boolean true/false
        devouredValue = (devouredValue === "true") ? true : false;

        connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [devouredValue, burgerId], function (err, dbBurgers) {

            if (err) {
                return reject(err);
            } 
            else if (dbBurgers.changedRows === 0) {
                return reject({
                    message: "You probably have the wrong ID"
                });
            } 
            else {
                return resolve(dbBurgers);
            }
        })
    })
};

// DELETE a burger
const remove = (burgerId) => {
  
  return new Promise((resolve, reject) => {

    connection.query("DELETE FROM burgers WHERE id = ?", [burgerId], function (err, dbBurgerData) {

      if (err) {
        return reject(err);
      }
      else if (dbBurgerData.affectedRows === 0) {
        return reject({ message: "You probably have the wrong ID" });
      }
      else {
        return resolve(dbBurgerData);
      }
    })
  })
}

// export all of our new functions as methods of an object
module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
};
