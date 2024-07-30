const express = require('express');
const router = express.Router();
const multer = require('multer');
const Company = require('../Models/company');
const Bookmark = require('../Models/bookmark'); 
const { faker } = require('@faker-js/faker');


const storage = multer.memoryStorage(); 
const upload = multer({ storage });


router.post('/bookmarks', async (req, res) => {
  try {
    const { companyId } = req.body;
    const newBookmark = new Bookmark({ companyId });
    await newBookmark.save();
    res.status(201).send(newBookmark);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while adding the bookmark.' });
  }
});

router.delete('/bookmarks/:companyId', async (req, res) => {
  try {
    const { companyId } = req.params;
    const bookmark = await Bookmark.findOneAndDelete({ companyId });
    if (!bookmark) {
      return res.status(404).send({ message: 'Bookmark not found' });
    }
    res.status(200).send(bookmark);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/bookmarks', async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({});
    res.status(200).send(bookmarks);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while fetching bookmarks.' });
  }
});




router.get('/bookmarked-companies', async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({});
    const companyIds = bookmarks.map(bookmark => bookmark.companyId);
    const companies = await Company.find({ _id: { $in: companyIds } });

    const companiesWithBase64Images = companies.map(company => {
      let imageSrc = '';
      if (company.logo && company.logo.data) {
        const base64Image = company.logo.data.toString('base64');
        imageSrc = `data:${company.logo.contentType};base64,${base64Image}`;
      }
      return {
        id: company._id,
        name: company.name,
        description: company.description,
        logo: imageSrc
      };
    });

    res.status(200).send({
      total: companiesWithBase64Images.length,
      companies: companiesWithBase64Images
    });

  } catch (error) {
    res.status(500).send({ error: 'An error occurred while fetching bookmarked companies.' });
  }
});


router.put('/updateCompanyLogo', upload.single('logo'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send({ error: 'No logo provided' });
    }

    const newLogo = {
      data: req.file.buffer,
      contentType: req.file.mimetype
    };

    const result = await Company.updateMany({}, { $set: { logo: newLogo } });

    res.status(200).send({ message: 'Logo updated for all companies', result });
  } catch (error) {
    console.error('Error in /updateCompanyLogo endpoint:', error.message); 
    res.status(400).send({ error: 'An error occurred while processing the request.' });
  }
});


router.post('/createCompany', async (req, res) => {
  try {
    let companyData = req.body;

    const company = new Company(companyData);
    await company.save();
    res.status(201).send(company);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/companies', async (req, res) => {
  try {
    const { search, industry, technology, country, analystrating, fundingStatus, companysize, foundedyear, producttypes, customertype } = req.query;
    let query = {};

    if (search) {
      query.name = { $regex: search, $options: 'i' };
    }
    
    if (industry) {
      query.industry = { $in: industry.split(',') };
    }
    if (technology) {
      query.technologiesUsed = { $in: technology.split(',') };
    }
    if (country) {
      query.country = { $in: country.split(',') };
    }
    
   if (analystrating) {
    const ratingRanges = analystrating.split(',');
    query.$or = query.$or || [];

    if (ratingRanges.includes('High')) {
      query.$or.push({ 'ratings.customerSatisfaction': { $gt: 4 } });
    }
    if (ratingRanges.includes('Medium')) {
      query.$or.push({ 'ratings.customerSatisfaction': { $gte: 3, $lte: 4 } });
    }
    if (ratingRanges.includes('Low')) {
      query.$or.push({ 'ratings.customerSatisfaction': { $gte: 1, $lte: 3 } });
    }

    if (query.$or.length === 0) delete query.$or;
  }

    if (fundingStatus) {
      query.fundingStatuses = { $in: fundingStatus.split(',') };
    }
    if (companysize) {
      query.companySize = { $in: companysize.split(',') };
    } 
    if (foundedyear) { 
      const foundedYearRanges = foundedyear.split(',');
      query.$or = [];

      if (foundedYearRanges.includes('Before 2000')) {
        query.$or.push({ foundedYear: { $lt: 2000 } });
      }
      if (foundedYearRanges.includes('2000-2010')) {
        query.$or.push({ foundedYear: { $gte: 2000, $lte: 2010 } });
      }
      if (foundedYearRanges.includes('2011-2020')) {
        query.$or.push({ foundedYear: { $gte: 2011, $lte: 2020 } });
      }
      if (foundedYearRanges.includes('After 2020')) {
        query.$or.push({ foundedYear: { $gt: 2020 } });
      }

      if (query.$or.length === 0) delete query.$or;
    }
    if (producttypes) {
      query.productTypes = { $in: producttypes.split(',') };
    }
    if (customertype) {
      query.customerTypes = { $in: customertype.split(',') };
    }


    
    const companies = await Company.find(query).select('name description logo').exec();

    const companiesWithBase64Images = companies.map(company => {
      let imageSrc = '';
      if (company.logo && company.logo.data) {
        const base64Image = company.logo.data.toString('base64');
        imageSrc = `data:${company.logo.contentType};base64,${base64Image}`;
      }
      return {
        id:company._id,
        name: company.name,
        description: company.description,
        logo: imageSrc
      };
    });
    
    const total = await Company.countDocuments(query);

    res.status(200).send({
      total,
      companies:companiesWithBase64Images
    });
  } catch (error) {
    console.error('Error in /companies endpoint:', error.message); // Detailed logging
    res.status(500).send({ error: 'An error occurred while processing the request.' });
  }
});

router.get('/companies/:id', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).exec();

    if (!company) {
      return res.status(404).send({ message: 'Company not found' });
    }

    let imageSrc = '';
    if (company.logo && company.logo.data) {
      const base64Image = company.logo.data.toString('base64');
      imageSrc = `data:${company.logo.contentType};base64,${base64Image}`;
    }

    
    const companyWithBase64Image = {
      _id: company._id.toString(), 
      name: company.name,
      logo: imageSrc,
      website: company.website,
      description: company.description,
      foundedYear: company.foundedYear,
      industry: company.industry,
      country: company.country,
      companySize: company.companySize,
      about: company.about,
      coreValues: company.coreValues,
      keyServices: company.keyServices,
      technologiesUsed: company.technologiesUsed,
      industriesServed: company.industriesServed,
      solutions: company.solutions,
      usp: company.usp,
      useCases: company.useCases,
      caseStudies: company.caseStudies,
      fundingStatuses: company.fundingStatuses,
      productTypes: company.productTypes,
      customerTypes: company.customerTypes,
      partners: company.partners,
      awards: company.awards,
      certifications: company.certifications,
      companyHistory: company.companyHistory,
      team: company.team,
      sustainability: company.sustainability,
      contactInfo: company.contactInfo,
      ratings: company.ratings
    };

    res.status(200).send(companyWithBase64Image);
    
  } catch (error) {
    res.status(500).send(error);
  }
});



router.delete('/Deletecompanies', async (req, res) => {
  try {
    const result = await Company.deleteMany({});
    
    res.status(200).send({
      message: 'All companies have been deleted.',
      deletedCount: result.deletedCount
    });
  } catch (error) {
    res.status(500).send({
      message: 'Error deleting companies.',
      error: error.message
    });
  }
});


router.get('/filters', async (req, res) => {
  try {
    const industries = await Company.distinct('industry');
    const technologies = await Company.distinct('technologiesUsed');
    const countries = await Company.distinct('country');
    const fundingStatuses = await Company.distinct('fundingStatuses');
    const companySizes = await Company.distinct('companySize');
    const productTypes = await Company.distinct('productTypes');
    const customerTypes = await Company.distinct('customerTypes');

    res.status(200).send({
      industries,
      technologies,
      countries,
      fundingStatuses,
      companySizes,
      productTypes,
      customerTypes,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});



const generateCompanyData = (numCompanies) => {
  const companies = [];

  for (let i = 0; i < numCompanies; i++) {
    const company = new Company({
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
    });

    companies.push(company);
  }

  return companies;
};


router.post('/insert-synthetic-data', async (req, res) => {
  const numCompanies = req.body.numCompanies || 80; 
  const companies = generateCompanyData(numCompanies);

  try {
    await Company.insertMany(companies);
    res.status(201).json({ message: `Inserted ${numCompanies} companies into the database` });
  } catch (error) {
    res.status(500).json({ message: 'Error inserting companies', error });
  }
});



module.exports = router;
