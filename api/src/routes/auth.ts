import { Router, Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";
import { client } from "../stream-client";

interface UserObjectRequest {
    id: string;
    username: string;
    email: string;
    password: string;
}

const route = Router();

route.post(
    "/login",
    [
        body("email").isEmail().withMessage("Please enter a valid email address"),
        body("username")
            .matches(/^[a-zA-Z0-9_]{3,16}$/)
            .withMessage("Username must be 3-16 characters long and contain only letters, numbers, and underscores"),
        body("password").isLength({ min: 5 }).withMessage("Password must be at least 5 characters long"),
    ],
    async (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const newUser: UserObjectRequest = {
            id: req.body.username,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        };

        try {
            await client.upsertUsers({
                users: {
                    [req.body.username]: newUser,
                },
            });

            const expiry = Math.floor(Date.now() / 1000) + 48 * 60 * 60;
            const token = client.createToken(req.body.username, expiry);

            return res.status(200).json({ token, username: req.body.username, email: req.body.email, password: req.body.password });
        } catch (error) {
            next(error);
        }
    }
);

export default route;
