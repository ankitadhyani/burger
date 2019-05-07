// import our burger model
const burger = require("../models/burger");


module.exports = app => {

    // GET all burgers
    app.get("/api/burgers", function (req, res) {

        console.log("In GET: /api/burgers");

        burger.findAll()
            .then(dbBurger => res.json(dbBurger))
            .catch(err => {
                console.log(err);
                res.json(err);
            });

    });

    // Create a new burger
    app.post("/api/burgers", function (req, res) {

        console.log("In POST: /api/burgers");

        burger.create(req.body)
            .then(dbBurger => res.json(dbBurger))
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    });


    // Update a burger's 'devoured' to true/false by id
    app.put("/api/burgers/:id", function (req, res) {

        console.log("In PUT: /api/burgers/" + req.params.id);

        burger.update(req.body.devoured, req.params.id)
            .then(dbBurger => res.json(dbBurger))
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    });


    // DELETE a burger by its id
    app.delete("/api/burgers/:id", function (req, res) {

        console.log("In DELETE: /api/burgers/" + req.params.id);

        burger.remove(req.params.id)
            .then(dbBurger => res.json(dbBurger))
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    });

};