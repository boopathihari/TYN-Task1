const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  website: { type: String },
  description: { type: String },
  foundedYear: { type: Number },
  industry: { type: String },
  country: { type: String },
  companySize: { type: String },
  contactInfo: {
    email: { type: String },
    phone: { type: String },
    address: { type: String }
  },
  about: { type: String },
  coreValues: [String],
  keyServices: [String],
  technologiesUsed: [String],
  industriesServed: [String],
  solutions: [String],
  usp: { type: String },
  useCases: [String],
  caseStudies: [String],
  ratings: {
    customerSatisfaction: { type: Number },
    industryRecognition: [String]
  },
  fundingStatuses: [String],
  productTypes: [String],
  customerTypes: [String],
  partners: [String],
  awards: [String],
  certifications: [String],
  companyHistory: { type: String },
  team: [{ name: String, role: String, experience: String }],
  sustainability: { type: String },
  logo: {   data: Buffer,
    contentType: String 
  }
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
