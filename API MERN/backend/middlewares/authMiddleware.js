const jwt = require("jsonwebtoken");
const User = require("../models/userModels");
const asyncHandler = require("express-async-handler");


const protect = asyncHandler(async (req, res, next) => {
    // middleware named protect ,going to protect api from unauthorized access
    // whenever the user login , we are going to put this protect function before 
    // this getNotes api , User has to pass through this middleware to reach this api,
    // its going to have three parameters req, res, next  ,,, 
    // its going to declare a new variable called token  ,
    // then it checking from our req , that is User sending his authorization header over here '
    // check the headers for authorization headers  '
    // if its present , if the authorization has a token which starts with bearer , 
    // sending our bearer token from our frontend ,,if(...) are true , 
    // then it enters{try and catch}
    let token;

    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        // verifying the token over here which was sent by the user
        try {
            // taking the token from inside of
            token = req.headers.authorization.split(" ")[1];
            // splitting it , it has bearer and a token stringinside of it,,
            // removing the bearer part and just taking he token

              // decodes token id   
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // decoding by using jwt.verify

            // if it works..
            req.user = await User.findById(decoded.id).select("-password");

            next();
            //  goes to getNotes api

        } catch (error) {
            res.status(401);
            throw new Error(`Not authorized, token failed: ${error.messege}`);
        }
    }

    if(!token) {
        res.status(401);
        throw new Error("Not authorized, no token;")
    }
})

module.exports = {protect}
