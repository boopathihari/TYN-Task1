const mongoose = require('mongoose');
const fs = require('fs');
// const Company = require('../models/Company'); // Adjust the path as necessary
const dotenv = require('dotenv');

dotenv.config();

const generateCompanyData = (numCompanies) => {
  const companies = [];

  for (let i = 0; i < numCompanies; i++) {
    const company = {
      name: faker.company.name(),
      website: faker.internet.url(),
      description: faker.company.catchPhrase(),
      foundedYear: faker.datatype.number({ min: 1900, max: 2024 }),
      industry: faker.commerce.department(),
      country: faker.address.country(),
      companySize: `${faker.datatype.number({ min: 1, max: 5000 })} employees`,
      contactInfo: {
        email: faker.internet.email(),
        phone: faker.phone.number(),
        address: faker.address.streetAddress()
      },
      about: faker.lorem.paragraph(),
      coreValues: [faker.company.bs(), faker.company.bs(), faker.company.bs()],
      keyServices: [faker.company.bs(), faker.company.bs(), faker.company.bs()],
      technologiesUsed: [faker.hacker.noun(), faker.hacker.noun(), faker.hacker.noun()],
      industriesServed: [faker.commerce.department(), faker.commerce.department()],
      solutions: [faker.lorem.sentence(), faker.lorem.sentence()],
      usp: faker.lorem.sentence(),
      useCases: [faker.lorem.paragraph(), faker.lorem.paragraph()],
      caseStudies: [faker.lorem.paragraph(), faker.lorem.paragraph()],
      ratings: {
        customerSatisfaction: faker.datatype.number({ min: 1, max: 5 }),
        industryRecognition: [faker.company.catchPhrase(), faker.company.catchPhrase()]
      },
      fundingStatuses: [faker.finance.amount(1, 100, 0, '$') + 'M', faker.finance.amount(1, 100, 0, '$') + 'M'],
      productTypes: [faker.commerce.product(), faker.commerce.product()],
      customerTypes: [faker.company.catchPhrase(), faker.company.catchPhrase()],
      partners: [faker.company.name(), faker.company.name()],
      awards: [faker.company.catchPhrase(), faker.company.catchPhrase()],
      certifications: [faker.company.catchPhrase(), faker.company.catchPhrase()],
      companyHistory: faker.lorem.paragraph(),
      team: [
        { name: faker.name.fullName(), role: faker.name.jobTitle(), experience: `${faker.datatype.number({ min: 1, max: 40 })} years` },
        { name: faker.name.fullName(), role: faker.name.jobTitle(), experience: `${faker.datatype.number({ min: 1, max: 40 })} years` }
      ],
      sustainability: faker.lorem.paragraph(),
      logo: {
        data: Buffer.from(faker.image.dataUri(), 'base64'),
        contentType: 'image/png'
      }
    };

    companies.push(company);
  }

  return companies;
};

const numCompanies = 10;
const companies = generateCompanyData(numCompanies);

fs.writeFileSync('syntheticCompanies.json', JSON.stringify(companies, null, 2));

console.log(`Generated ${numCompanies} companies and saved to syntheticCompanies.json`);

// Uncomment the following section to save data to MongoDB

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//     Company.insertMany(companies)
//       .then(() => {
//         console.log(`Inserted ${numCompanies} companies into the database`);
//         mongoose.connection.close();
//       })
//       .catch(err => {
//         console.error('Error inserting companies:', err);
//         mongoose.connection.close();
//       });
//   })
//   .catch(err => {
//     console.error('Error connecting to MongoDB:', err);
//   });
