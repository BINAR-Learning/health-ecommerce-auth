/**
 *  FILE INI PERLU DILENGKAPI
 *
 * Validation Middleware
 * Input validation rules dengan express-validator
 */

// TODO: Import express-validator
// const { body } = require('express-validator');

// TODO: Register validation rules
/*
const registerValidation = [
  body('email')
    .isEmail().withMessage('Email tidak valid')
    .normalizeEmail(),
  
  body('password')
    .isLength({ min: 8 }).withMessage('Password minimal 8 karakter')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/)
    .withMessage('Password harus include uppercase, lowercase, number, special char'),
  
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 }).withMessage('Nama 2-50 karakter')
    .escape()
];
*/

// TODO: Login validation rules
/*
const loginValidation = [
  body('email').isEmail().withMessage('Email tidak valid'),
  body('password').notEmpty().withMessage('Password required')
];
*/

// TODO: Export
// module.exports = { registerValidation, loginValidation };
