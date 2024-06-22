import { Router, Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

const route = Router();

route.post(
    "/login",
    [
        body("email").isEmail().withMessage("Please enter a valid email address"),
        body("password").isLength({ min: 5 }).withMessage("Password must be at least 5 characters long"),
    ],
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Handle login logic here
        res.send("Login successful");
    }
);

export default route;
