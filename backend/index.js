const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/enquiries', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
const enquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String },
  productInterest: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);
// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'srisaravanaaasteels@gmail.com', // Replace with your email
    pass: 'frwr wmop lmyu xxko', // Replace with your Gmail app password (generated from https://myaccount.google.com/apppasswords)
  }
});
// API endpoint to send enquiry email
app.post('/api/send-enquiry', async (req, res) => {
  const { name, email, phone, company, productInterest, message } = req.body;

  console.log("sending the enqiury");
  const mailOptions = {
    from: email,
    to: 'kapilpm04@gmail.com', // Replace with the recipient's email
    subject: `New Enquiry from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Company: ${company || 'N/A'}
      Product Interest: ${productInterest || 'N/A'}
      Message: ${message}
    `,
  };

  try {
    // Save enquiry to MongoDB
    const newEnquiry = new Enquiry({
      name,
      email,
      phone,
      company,
      productInterest,
      message,
    });
    await newEnquiry.save();

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Enquiry sent and saved successfully!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Failed to process enquiry.' });
  }
});
// Admin login credentials (for simplicity, hardcoded here; use a secure method in production)
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'password123';

// Admin login endpoint
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    res.status(200).json({ message: 'Login successful', token: 'admin-token' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Fetch all enquiries endpoint
app.get('/api/admin/enquiries', (req, res) => {
  // For simplicity, no token validation is added here. Add proper authentication in production.
  Enquiry.find()
    .then((enquiries) => res.status(200).json(enquiries))
    .catch((error) => res.status(500).json({ message: 'Failed to fetch enquiries', error }));
});
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});