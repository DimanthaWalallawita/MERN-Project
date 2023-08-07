const nodemailer = require("nodemailer");
const { options } = require("../routes/userRoute");

const sendEmail = async(subject, message, send_to, send_from, reply_to) => {
    //create email transporter
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: 587,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls:{
            rejectUnauthorized: false
        }
    })

    // Options for sending email
    const option = {
        from: send_from,
        to: send_to,
        replyTo: reply_to,
        subject: subject,
        html: message,
    }

    // Send Email
    transporter.sendMail(options, function(err, info){
        if(err){
            console.log(err);
        }
        console.log(info);
    })
};

module.exports = sendEmail;