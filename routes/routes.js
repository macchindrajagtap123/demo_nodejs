//var userData = require("./models/user/getData.js");
var data;
var appRouter = function (app,con) {
    app.get("/user", function(req, res) {
      con.connect(function(err) {
          if (err) throw err;
          con.query("select * from tb1 where id=1", function (err, result, fields) {
            data=result;
            console.log(result);
            res.status(200).send(result);
          });
        });
    });
  //  app.get("/user", function(req, res) {
      /*con.connect(function(err) {
        if (err) throw err;
        con.query("select * from tb1 where id=1", function (err, result, fields) {
          data=result;
         });
    });
    res.status(200).send(data);*/
   // res.status(200).send(userData.getUserData(con));
  //});
}
  module.exports = appRouter;

/*
var data;
module.exports = {
    foo: function (con) {
        con.connect(function(err) {
            //  if (err) throw err;
              con.query("select * from tb1 where id=1", function (err, result, fields) {
                data=result;
                //console.log(result);
                
              });
            });
            return data;
         //   console.log(1)
    },
    bar: function () {
      // whatever
    }
}; */
