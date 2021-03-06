const express=require('express');;
const router=express.Router();
const Customer=require('../src/models/customer');
//////////////////////////////////customers routes
//add a customer to db
router.post(`/customers`,(req,res,next)=>{//create:is mongoose method to create customer locally and then save it in db
  Customer.create(req.body)
  .then((customer)=>{ res.send(customer)}).catch(next);//if there is an error go to the next middleware
  
 })

//get list of cutomers from db
router.get('/customers',(req,res,next)=>{
  // res.send({type:'get customers'})
  Customer.find({}).then((customers)=>{res.send(customers);})
})

//update a customer in db
router.put('/customers/:id',(req,res,next)=>{
  Customer.findByIdAndUpdate({_id:req.params.id},req.body).then
  (()=>{Customer.findOne({_id:req.params.id}).then((customer)=>res.send(customer))

})
  
})
//delete a customer from db
router.delete('/customers/:id',(req,res,next)=>{
  Customer.findByIdAndRemove({_id:req.params.id}).then((customer)=>{res.send(customer)})
 })

 module.exports=router;//export default router;