const nodemailer = require("nodemailer");
const request = require("request");

// Environment variables
const emailFrom = process.env.NODEMAILER_FROM_EMAIL;
const emailTo = process.env.NODEMAILER_TO_EMAIL;
const password = process.env.NODEMAILER_EMAIL_PASSWORD;
const host = process.env.NODEMAILER_HOST



// Model
const Message = require("../models/messageModel");


// @desc  Send a message to Toshi's email
// @route POST /api/messages
// @access Public
exports.sendMessage = async (req, res, next) => {
    console.log(`in node mailer`)
    // console.log(req)
    // console.log(`emailFrom: ${emailFrom}`)
    // console.log(`process.env.NODEMAILER_FROM_EMAIL: ${process.env.NODEMAILER_FROM_EMAIL}`)
    try {

        console.log("Inside the nodemail server.js post request");

        const output = `
            <p>You have a new message from toshi-kellogg.com</p>
            <h3>Contact Details</h3>
            <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Subject: ${req.body.subject}</li>
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>
        `;



        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            host: process.env.NODEMAILER_HOST,
            service: "Gmail",
            port: 587,
            // secure: true, // true for 465, false for other ports
            secure: false, // true for 465, false for other ports
            requireTLS: true,
            auth: {
                user: process.env.NODEMAILER_FROM_EMAIL, // generated ethereal user
                pass: process.env.NODEMAILER_EMAIL_PASSWORD, // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false,
            },
        });


        // send mail with defined transport object
        const mailOptions = {
            from: `"Nodemailer Contact" <${process.env.NODEMAILER_FROM_EMAIL}>`, // sender address
            to: `${process.env.NODEMAILER_TO_EMAIL}`, // list of receivers
            subject: "Developer Inquiry", // Subject line
            text: "Hello!", // plain text body
            html: output, // html body
            uri: "https://kelloggtutoring.com"
        };

        // console.log(output)
        // console.log(transporter)
        // console.log(mailOptions)

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(`errNodeMailer: ${error}`)
            } else {
                console.log(`Message sent: %s`, info.messageId)
                console.log(`Preview URL: %s`, nodemailer.gettestMessageUrl(info))
            }
            // request(mailOptions, (err, response, body) => {
            //     if (err) {
            //         // res.redirect("/components/404");
            //         console.log(`errNodeMailer: ${err}`)
            //     } else {
            //         console.log(response.data)
            //         if (response.statusCode === 200) {
            //         } else {
            //             res.redirect("/");
            //         }
            //     }
            // });

        },
            console.log("Made it through message controller."))
        next()
    } catch (err) {
        console.log(err)
    }
};