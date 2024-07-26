const express = require('express');
const router = express.Router();
const multer = require('multer');
const Company = require('../Models/company');



// Set up multer for file uploads
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage });

// Update company by ID
router.put('/updateCompany/:id', upload.single('logo'), async (req, res) => {
  try {
    const companyId = req.params.id;
    let updateData = req.body;

    // If a new logo is provided, add it to the updateData
    if (req.file) {
      updateData.logo = {
        data: req.file.buffer,
        contentType: req.file.mimetype
      };
    }

    // Find and update the company
    const company = await Company.findByIdAndUpdate(companyId, updateData, { new: true });

    if (!company) {
      return res.status(404).send({ error: 'Company not found' });
    }

    res.status(200).send(company);
  } catch (error) {
    console.error('Error in /updateCompany endpoint:', error.message); // Detailed logging
    res.status(400).send({ error: 'An error occurred while processing the request.' });
  }
});



// Create a company
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

// Get companies with search and filters
router.get('/companies', async (req, res) => {
  try {
    const { search, industry, technology, country, rating, fundingStatus, companySize, foundedYear, productType, customerType } = req.query;
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
    
   // Handling rating filter
   if (rating) {
    const ratingRanges = rating.split(',');
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
    if (companySize) {
      query.companySize = { $in: companySize.split(',') };
    } 
    if (foundedYear) { 
      const foundedYearRanges = foundedYear.split(',');
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
    if (productType) {
      query.productTypes = { $in: productType.split(',') };
    }
    if (customerType) {
      query.customerTypes = { $in: customerType.split(',') };
    }


    
    const companies = await Company.find(query).select('name description logo').exec();

    // Convert image data to base64 string
    const companiesWithBase64Images = companies.map(company => {
      let imageSrc = '';
      if (company.logo && company.logo.data) {
        const base64Image = company.logo.data.toString('base64');
        imageSrc = `data:${company.logo.contentType};base64,${base64Image}`;
      }
      return {
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


// Get a single company profile
router.get('/companies/:id', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).send();
    }
    res.status(200).send(company);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Delete all companies
router.delete('/Deletecompanies', async (req, res) => {
  try {
    // Remove all documents from the collection
    const result = await Company.deleteMany({});
    
    // Send a response with the count of deleted documents
    res.status(200).send({
      message: 'All companies have been deleted.',
      deletedCount: result.deletedCount
    });
  } catch (error) {
    // Handle errors
    res.status(500).send({
      message: 'Error deleting companies.',
      error: error.message
    });
  }
});


// In your backend routes file
router.get('/filters', async (req, res) => {
  try {
    // Example query to get distinct filter options from the database
    const industries = await Company.distinct('industry');
    const technologies = await Company.distinct('technologiesUsed');
    const countries = await Company.distinct('country');
    const fundingStatuses = await Company.distinct('fundingStatus');
    const companySizes = await Company.distinct('companySize');
    const productTypes = await Company.distinct('productType');
    const customerTypes = await Company.distinct('customerType');
    const ratings = await Company.aggregate([
      { $group: { _id: "$ratings.customerSatisfaction" } }
    ]);

    res.status(200).send({
      industries,
      technologies,
      countries,
      fundingStatuses,
      companySizes,
      productTypes,
      customerTypes,
      ratings: ratings.map(r => r._id)
    });
  } catch (error) {
    res.status(500).send(error);
  }
});


module.exports = router;