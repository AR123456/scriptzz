var db = require("../models")

module.exports = function(app) {
	app.get("/api/scriptz", function(req, res) {
 db.scriptz.findAll({}).then(function(data) {
        return res.json(data)
    });
});

  app.put("/api/scriptz/:id", function (req, res){
    var condition = req.params.id;
    db.scriptz.update ({
      active: false
    },{
      where: {
        id: condition
      }
    }).then(function(db){
      console.log(db);
      res.redirect("/medlist");
    })
  })

  app.post("/api/scriptz", function(req, res) {
    console.log(req.body);

    db.scriptz.create({
      prescription_name: req.body.prescription_name,
      dose: req.body.dose,
      TimeFrame: req.body.TimeFrame,
      Pills_Remaining: req.body.Pills_Remaining
    }).then(function(db) {
      console.log(db);
      res.redirect("/medlist")
    });
  });
}
