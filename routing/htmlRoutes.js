var path = require("path");


module.exports = function(app) {
    
    app.get("/", function (req,res) {
      // res.sendFile(path.join(__dirname, "../public/index.html"));
      res.render("index",{ title:"JD Drawing App"});

    });
    
    app.get("/gallery", function (req,res) {
        res.render("gallery",{  layout: "glayout", title:"i hate handlebars gallery"});
    });
};