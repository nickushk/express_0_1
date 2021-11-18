const express = require("express");
const router = express.Router();
var jsonCourse = require("../Courses");

// Get start page
router.get("/courses", (req, res) => {
    

  // FOR POSTMAN TEST
  //res.send(jsonCourse );

  res.render("courses", { courses: jsonCourse});

});


// Print a course
router.get("/courses/:id", (req, res) => {
    idToPrint= parseInt(req.params.id);
    theCourse = jsonCourse.filter(course => course._id === idToPrint );

    // FOR POSTMAN TEST
    //res.send(jsonCourse);
    res.render('course', {course: theCourse});
  });



// Delete course
router.delete("/courses/:id",  (req, res) => {
  idToDelete = parseInt(req.params.id);

  // Update the list and send a message
  jsonCourse = jsonCourse.filter(course => course._id != idToDelete );

  // FOR POSTMAN TEST
    //res.send(jsonCourse);
    res.redirect("/courses");
  });

// make router accessible to server.js
module.exports = router;
