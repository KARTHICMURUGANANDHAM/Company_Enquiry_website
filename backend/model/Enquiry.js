const mongoose = require('mongoose');   

const enquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    company: { type: String },
    productInterest: { type: String },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });
  
  export const Enquiry = mongoose.model('Enquiry', enquirySchema);