const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Token = require("../models/tokenModel");
const crypto = require("crypto");
const { log } = require("console");

// Generate Token
const generateToken = (id) => {
    return jwt.sign({id}, process.env,JWT_SECRET,{expiresIn: "1d"})
};

// Register user
const registerUser = asyncHandler(async(req, res) => { 
    const{name, email, password} = req.body

    // validation
    if(!name || !email || !password){
        res.status(400)
        throw new Error("please fill in all required fields")
    }

    if(password.length < 6){
        res.status(400)
        throw new Error("Passswoed must be up to 6 characters")
    }

    // check if user email already exists
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error("User email has already exists")
    }

    // create new user
    const user = await User.create({
        name,
        email,
        password,
    });

    // Generate token
    const token = generateToken(user._id)

    // Send HTTP-only cookie
    res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400), //1 day
        sameSite: "none",
        secure: true,
    });

    if(user){
        const{_id, name, email, photo, phone, bio} = user
        res.status(201).json({
            _id, 
            name, 
            email, 
            photo, 
            phone, 
            bio,
            token,
        });
    }
    else{
        res.status(400)
        throw new Error("Invalid user data");
    }

});

// Login user
const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body

    // Validate Request
    if(!email || !password){
        res.status(400);
        throw new Error("Please add email and password")
    }

    //check if useer exists
    const user = await User.findOne({email})

    if(!user){
        res.status(400);
        throw new Error("User not found please signup")
    }    

    //user exists, check if password is correct 
    const passwordIsCorrect = await bcrypt.compare(password, user.password)

    // Generate token
    const token = generateToken(user._id)

    // Send HTTP-only cookie
    res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400), //1 day
        sameSite: "none",
        secure: true,
    });

    if(user && passwordIsCorrect){
        const{_id, name, email, photo, phone, bio} = user;
        res.status(200).json({
            _id, 
            name, 
            email, 
            photo, 
            phone, 
            bio,
            token,
        });
    }
    else{
        res.status(400);
        throw new Error("Invalid Email or Password")
    }

});

// Logout User
const logout = asyncHandler(async(req, res) => {
    res.cookie("token", "", {
        path: "/",
        httpOnly: true,
        expires: new Date(0), 
        sameSite: "none",
        secure: true,
    });
    return res.status(200).json({message: "Successfully Logged Out"});
});

// Get user data
const getUser = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id)

    if(user){
        const{_id, name, email, photo, phone, bio} = user
        res.status(201).json({
            _id, 
            name, 
            email, 
            photo, 
            phone, 
            bio,
        });
    }
    else{
        res.status(400)
        throw new Error("User not found");
    }
});

// Get Login Status
const loginStatus = asyncHandler(async(req, res) => {

    const token = req.cookies.token;
    if(!token){
        return res.json(false);
    }

    // Verify Token
    const verified = jwt.verify(token, process.env.JWT_SECRET)
    if(verified){
        return res.json(true);
    }

    return res.json(false);
});

// Update user
const updateUser = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id)

    if(user){
        const{_id, name, email, photo, phone, bio} = user;

        user.email = email;
        user.name = req.body.name || name;
        user.phone = req.body.phone || phone;
        user.name = req.body.bio || bio;
        user.name = req.body.photo || photo;

        const updateUser = await user.save()
        res.status(200).json({
            _id: updateUser._id, 
            name: updateUser.name, 
            email: updateUser.email, 
            photo: updateUser.photo, 
            phone: updateUser.phone, 
            bio: updateUser.bio,
        })
    }
    else{
        res.status(404)
        throw new Error("User not found")
    }
});

// Change Passwords
const changePassword = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id);

    const {oldPassword, password} = req.body

    if(!user)
    {
        res.status(400);
        throw new Error("User not found, Please Signup")
    }

    // Validation
    if(!oldPassword || !password)
    {
        res.status(400);
        throw new Error("Please add old password and the new password")
    }

    // Check old password and new password
    const passwordIsCorrect = await bcrypt.compare(oldPassword, user.password);

    // Save new password
    if(user && passwordIsCorrect){
        user.password = password;
        await user.save();
        res.status(200).send("Password change successfull")
    }
    else{
        res.status(400)
        throw new Error("Old password is incorrect")
    }
});

// Forgot password
const forgotPassword = asyncHandler(async(req, res) => {
    const {email} = req.body
    const user = await User.findOne({email})

    if(!user){
        res.status(404)
        throw new Error("User was not exeists")
    }

    // Delete token if it exists in DB
    let token = await Token.findOne({userId: user._id})
    if(token) {
        await token.deleteOne();
    }

    // Create Reset Token
    let resetToken = crypto.randomBytes(32).toString("hex") + user._id;
    console.log(resetToken);

    // Hash token before saving db
    const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex")
    
    // Save token in databse
    await new Token({
        userID: user._id,
        token: hashedToken,
        createdAt: Date.now(),
        expiresAt: Date.now() + 30 * (60 * 1000) //30 min
    }).save()

    // Construct reset URL
    const resetURL = `${process.env.FROTEND_URL}/resetpassword/${resetToken}`

    // Reset Email
    const message = `
        <h2>Hello ${user.name}</h2>
        <p>Please use the url below to reset your password</p>
        <p>This reset link is valid for only 30 minutes</p>
        <a href=${resetURL} clicktracking=off>${resetURL}</a>
        <p>Regards...</p>`;

        const subject = "Password Reset Request"
        const send_to =  user.email
        const sent_from = process.env.EMAIL_USER

        try{
            await sendEmail(subject, message, send_to, send_from)
            res.status(200).json({success: true, message: "Reset Email Sent"})
        }catch(error){
            res.status(500)
            throw new Error("Email not sent, Please try again");
        }
});

// Reset password
const resetpassword = asyncHandler(async(req, res) => {
    const {password} = req.body
    const {resetToken} = req.params

    // Hash token compare with token in the DB
    const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    // Find Token in DB
    const userToken = await Token.findOne({
        token: hashedToken,
        expiresAt: {$gt: Date.new()}
    })

    if(!userToken){
        res.status(404)
        throw new Error("Invalid or expired token");
    }

    // Find user
    const user = await User.findOne({_id: userToken.userId});
    user.password = password
    await user.save()
    res.status(200).json({
        message: "Password Reset Successful, Please login"
    })
})

module.exports = {
    registerUser,
    loginUser,
    logout,
    getUser,
    loginStatus,
    updateUser,
    changePassword,
    forgotPassword,
    resetpassword,
}