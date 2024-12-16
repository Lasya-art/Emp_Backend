//const express = require('express')
const { createEmployee, getAllEmployees ,getEmployeeById,deleteEmployeeById,updateEmployeeById} = require('../controllers/EmployeeController');
    

const router = require('express').Router();
router.get("/",getAllEmployees );
router.get('/:id',getEmployeeById)
router.delete('/:id', deleteEmployeeById)
router.put('/:id',  updateEmployeeById)
router.post('/',  createEmployee);

  
  


module.exports=router