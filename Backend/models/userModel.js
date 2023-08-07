const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please add a name"]
    },

    email: {
        type: String,
        require: [true, "Please add a email"],
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please Enter a valid email"
        ]
    },

    password: {
        type: String,
        require: [true, "Please add a password"],
        minLength: [6, "password must be up to 6 characters"],
        //maxLength: [23, "password must be lower to 23 characters"]
    },

    photo: {
        type: String,
        require: [true, "Please add a image"],
        default: "https://ibb.co/M6qjQ8J"
    },

    photo: {
        type: String,
        default: "+94"
    },

    bio: {
        type: String,
        default: "bio",
        maxLength: [250, "password must be lower to 250 characters"]
    }
}, 
{
    timestamps: true,
}
);

//Encrypt password
userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        return next()
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
})

const User = mongoose.model("User", userSchema);
module.exports = User