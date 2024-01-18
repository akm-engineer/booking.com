import { check, validationResult } from "express-validator";
import { Request, Response, NextFunction } from 'express';

export const userValidator = [
  check("firstName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("First Name is missing !!"),
  check("lastName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Last Name is missing !!"),
  check("email").isEmail().normalizeEmail().withMessage("Email is missing"),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password is missing!!")
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be 8 to 20 characters long"),
];

export const loginValidator = [

  check("email").isEmail().normalizeEmail().withMessage("Email is missing"),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password is missing!!")
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be 8 to 20 characters long"),
];


export const validate = (req: Request, res: Response, next: NextFunction) => {
  const error = validationResult(req).array();
  if (error.length) {
    return res.json({ error: error[0].msg });
  }
  next();
};