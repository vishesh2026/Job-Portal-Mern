import { Company } from "../models/company.model.js";
import getDataUri from "../utils/datauri.js";
import cloudinary from '../utils/cloud.js';


export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(401).json({
        message: "Company name is required",
        success: false,
      });
    }
    let company = await Company.findOne({ name: companyName });
    if (company) {
      return res.status(401).json({
        message: "Company already exists",
        success: false,
      });
    }
    company = await Company.create({
      name: companyName,
      userId: req.id,
    });
    return res.status(201).json({
      message: "Company registered successfully.",
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllCompanies = async (req, res) => {
  try {
    const userId = req.id; // loggedin user id
    const companies = await Company.find({ userId });
    if (!companies) {
      return res.status(404).json({ message: "No companies found" });
    }
    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (error) {
    console.error(error);
  }
};

//get company by id
export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }
    return res.status(200).json({ company, success: true });
  } catch (error) {
    console.error(error);
  }
};

//update company details
export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    
    // ✅ SAFE FILE HANDLING - CHECK IF FILE EXISTS
    let logo;
    if (req.file) {
      const fileUri = getDataUri(req.file);
      const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
      logo = cloudResponse.secure_url;
    }
    
    const updateData = { 
      ...(name && { name }), 
      ...(description && { description }), 
      ...(website && { website }), 
      ...(location && { location }), 
      ...(logo && { logo }) 
    };

    const company = await Company.findByIdAndUpdate(
      req.params.id, 
      updateData, 
      { new: true, runValidators: true }
    );
    
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }
    
    return res.status(200).json({ 
      message: "Company updated successfully", 
      company 
    });
  } catch (error) {
    console.error('Update error:', error);
    res.status(500).json({ message: error.message });
  }
};

