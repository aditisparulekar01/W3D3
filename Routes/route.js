const express=require("express");
const router=express.Router();
const TourController=require("../Controllers/tourController.js");
const StudentController=require("../Controllers/studentController.js");
const CourseControler=require("../Controllers/courseController.js");
router.post("/tour",TourController.createTour);
router.post("/register",StudentController.createStudent);
router.post("/course",CourseControler.createCourse);
module.exports=router;
