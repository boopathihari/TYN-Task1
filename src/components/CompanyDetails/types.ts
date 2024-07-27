// types.ts
export interface ContactInfo {
    email: string;
    phone: string;
    address: string;
  }
  
  export interface Ratings {
    customerSatisfaction: number;
    industryRecognition: string[];
  }
  
  export interface TeamMember {
    name: string;
    role: string;
    experience: string;
    _id: string;
  }
  
  export interface Company {
    _id: string;
    name: string;
    logo: string;
    website: string;
    description: string;
    foundedYear: number;
    industry: string;
    country: string;
    companySize: string;
    about: string;
    coreValues: string[];
    keyServices: string[];
    technologiesUsed: string[];
    industriesServed: string[];
    solutions: string[];
    usp: string;
    useCases: string[];
    caseStudies: string[];
    fundingStatuses: string[];
    productTypes: string[];
    customerTypes: string[];
    partners: string[];
    awards: string[];
    certifications: string[];
    companyHistory: string;
    team: TeamMember[];
    sustainability: string;
    contactInfo: ContactInfo;
    ratings: Ratings;

  }
  