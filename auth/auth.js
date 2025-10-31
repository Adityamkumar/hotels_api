import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import Person from "../models/person.js";

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await Person.findOne({ username: username });

      if (!user) return done(null, false, { message: "Incorrect usename" });

      const isPasswordMatch = await user.comparePassword(password);

      if (isPasswordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: "incorrect password" });
      }
    } catch (error) {
      return done(error);
    }
  })
);

export default passport