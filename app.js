var bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    express     = require("express"),
    ejs         = require("ejs"),
    app         = express();
 
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

// Mongoose/Model Config.
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

Blog.create({
    title: "First Blog",
    image: "https://9to5mac.files.wordpress.com/2017/11/iphonexcamerareivew_mann01-2.jpg?quality=82&w=2500#038;strip=all&w=1600",
    body: "This is my first blog post",

});

// Routes
app.get("/", function(req, res){
    res.redirect("/blogs");
});

app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if (err){
            console.log("oops");
        } else{
            res.render("index", {blogs: blogs});
        }
    });
});




app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Our blog server is running");
});
    
