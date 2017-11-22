# Blog App based on Colt Steele's Udemy Tutorial

Express, Mongo, mongoose & node.js - using Semantic-ui & ejs
Following strict RESTful programming

This app uses all 7 RESTful Routes:
Index, New, Create, Show, Edit, Update and Destroy

This app allows the user to view all blog posts, add a new blog post with image, edit it, and delete it. 

Notes:
In app.js
Create & Update posts
For the sake of 'practice' using req.body.blog -- to create a separate object within the req.body.object, helpful for larger projects. Say, the app has thousands of publishing, reactivated posts and comments all with a very long list of key values, I could have separate req.body.publishing, req.body.posts etc and it would cut down the processing time - it wouldn't have to comb through the whole req.body 
Admittedly, req.body by itself would make for prettier code and more suitable for this tiny size project.

Semantic Ui / Styling:
I found Semantic ui to be a bit inflexible when it came to customization. 
The docs are good if you wish to simply copy/paste the code and no need to customize. 
The Semantic UI community is small. 
Very limited selection of icons - but they do have them.
Played around with the Grid System - Semantic grid = 16. Ehh. 
As with most 'elements' in Semantic ui, I failed to see an advantage in using Semantic instead of other frameworks. 

EJS - 
Straightforward, a snap to learn and more than sufficient for a small app. 

Express-Sanitizer was a nice find. Allows users to use markup language in the text-area/input fields, example add a <p> but strips unsafe tags and attributes from html




