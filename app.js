var bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    express     = require("express"),
    ejs         = require("ejs"),
    app         = express();
 
mongoose.connect("mongodb://localhost/restful_blog_app");
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");
app.use(express.static("public"));

// Mongoose/Model Config.
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title: "Third Blog",
//     image: "http://humboldtmuseum.ca/sites/default/files/events_pic/intro-oil-painting.jpg",
//     body: "Not for the timid at heart, handle the brushes and oils with caution!!! Topping soufflé wafer I love wafer I love fruitcake macaroon cotton candy. Bonbon carrot cake sugar plum icing caramels tootsie roll. Dragée I love caramels I love gummies oat cake jujubes I love icing. I love liquorice I love lemon drops."
// });

// Routes
app.get("/", function(req, res){
    res.redirect("/blogs");
});

//Index Route
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if (err){
            console.log("oops");
        } else{
            res.render("index", {blogs: blogs});
        }
    });
});
// New Route
app.get("/blogs/new", function (req, res){
    res.render("new");
});
//Create Route
app.post("/blogs", function(req, res){
    Blog.create(req.body.blog, function(err, bloginfo){
        if(err){
            res.render("new");
        }else{
            res.redirect("/blogs");
        }
    });
});

//SHOW ROUTE
app.get("/blogs/:id", function(req, res){
   Blog.findById(req.params.id, function(err, foundBlog){
       if(err){
           res.redirect("/blogs");
       }else{
           res.render("show", {blog: foundBlog});
       }
   });
});

// by using req.body.blog -- creates an object 


app.listen(process.env.PORT || 3000, function(){
    console.log("Our blog server is running");
});
    
