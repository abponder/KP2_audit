var express = require("express");
var app = express();
var port = process.env.PORT||3000;
var db = require("./models/index")
app.use(express.static("client/build"))



//db.sequelize.sync().then(function(){
//    app.listen(port);
//})

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
