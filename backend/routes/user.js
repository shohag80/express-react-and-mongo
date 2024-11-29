const express = require('express');
const { signup, login } = require('../controllers/userController');
const { getAllEmployees, createEmployee, getEmployeeById, updateEmployeeById, deleteEmployeeById, searchEmployee } = require('../controllers/employeeController');
const router = express.Router();

// Signup route
router.post('/api/v1/user/signup', signup);

// Login route
router.post('/api/v1/user/login', login);

// Route to get all employees
router.get('/api/v1/emp/employees', getAllEmployees);

// Route to create employee
router.post('/api/v1/emp/employees', createEmployee);

// Route to get employee by ID
router.get('/api/v1/emp/employees/:eid', getEmployeeById);

// Route to update employee by ID
router.put('/api/v1/emp/employees/:eid', updateEmployeeById);

// Route to delete employee by ID
router.delete('/api/v1/emp/employees', deleteEmployeeById);

// Search employees by first name
router.get('/employees/search', searchEmployee);

module.exports = router;
