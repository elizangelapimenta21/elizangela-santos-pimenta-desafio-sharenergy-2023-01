import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt"
import JWT from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv"

dotenv.config()

export const generateToken = (data: object) => {
    return JWT.sign(data, process.env.JWT_KEY as string)
};


const notAuthorized = { status: 401, mensage: 'User not authorized' };
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_KEY as string
};

passport.use(new Strategy(options, async (payload, done) => {
    let email = 'desafiosharenergy'
    const user = payload.email == email? true: false

    if (user) {
        return done(null, user);
    } else {
        return done(notAuthorized, false);
    };
}));

export const privatRoute = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('jwt', (err, user) => {
        if (user) {
            req.user = user.id;
            return next();
        } else {
            return res.json(notAuthorized)
        }
    })(req, res, next);
}