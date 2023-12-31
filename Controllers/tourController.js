const TourModel= require("../Models/tourModel.js");
let createTour= async (req,res)=>{
try{
 let data=req.body
 let registerTour= await TourModel.create(data);
 return res.status(201).send({
    status:true,
    msg:"Tour booked successfully",
    data:registerTour,
});
}
catch(error){
   return res
   .status(500)
   .send({status:false,msg:"Internal Server Error"});
}
};
module.exports={createTour};