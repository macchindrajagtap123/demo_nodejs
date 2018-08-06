/*exports.getUserData=(con)=>{
    con.connect(function(err) {
        if (err) throw err;
        con.query("select * from tb1 where id=1", function (err, result, fields) {
          data=result;
          //console.log(result);
        });
      });
    
}*/
var data;
module.exports = {
    getUserData: function (con) {
        con.connect(function(err) {
            //  if (err) throw err;
              con.query("select * from tb1 where id=1", function (err, result, fields) {
                data=result;
                //console.log(result);
                
              });
            });
            return data;
           // console.log(1)
    },
    bar: function () {
      // whatever
    }
  }; 

