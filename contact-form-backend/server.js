const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'michaelmorara12@gmail.com', // Hardcoded email for testing
    pass: 'sehbjmvdcnmbernv',           // Hardcoded password for testing
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Endpoint to handle form submissions
app.post('/send', upload.single('file'), (req, res) => {
  console.log('Request received:', req.body);
  console.log('File received:', req.file); // Log file details
  const { fullName, email, phoneNumber, subject, message } = req.body;
  const file = req.file;

  const mailOptions = {
    from: `${fullName} <${email}>`, // Sender address
    to: 'michaelmorara12@gmail.com',   // Receiver address
    subject: subject,
    text: `
      Name: ${fullName}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Subject: ${subject}
      Message: ${message}
    `,
    attachments: file ? [
      {
        filename: file.originalname,
        content: file.buffer,
        contentType: file.mimetype,
      },
    ] : [],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Error: ' + error.message });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent: ' + info.response });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
