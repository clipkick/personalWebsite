import nodemailer from 'nodemailer';
import config from '../config';

const sendEmail = (emailOptions) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.emailUser,
      pass: config.emailPassword,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: 'asanderson900@gmail.com',
    to: 'asanderson900@gmail.com',
    subject: emailOptions.subject,
    // since I havent fully sanitized email form I will not send html based email and send just text instead
    // html: `<h1>Personal website email form</h1><br/>from:
    //   ${emailOptions.name} @ ${emailOptions.email}<br/><br/>
    //   ${emailOptions.message}`,
    text: `Personal website email form -- from: ${emailOptions.name} @ ${emailOptions.email}
      
      ---------
      ${emailOptions.message}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      throw error;
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

export default sendEmail;
