import { BusinessCompany } from '../types/business-company';
import BusinessCompanyDBService from "../repositories/business-company-DBService";

export class BusinessCompanyService {
    async createCompany(company: BusinessCompany): Promise<BusinessCompany> {
        const newCompany: BusinessCompany = await BusinessCompanyDBService.createBusinessCompany(company);
        return newCompany;
    }

    async getCompanyById(id: number):  Promise<BusinessCompany> {
        const company: BusinessCompany = await BusinessCompanyDBService.getCompanyById(id);
        if (!company) {
            throw new Error('Company not found');
        }
        return company;
    }

    async updateCompany(id: number, companyData: BusinessCompany):  Promise<BusinessCompany> {
        const updatedCompany: BusinessCompany = await BusinessCompanyDBService.updateCompany(id, companyData);
        if (!updatedCompany) {
            throw new Error('Company not found');
        }
        return updatedCompany;
    }

    async deleteCompany(id: number): Promise<void> {
        await BusinessCompanyDBService.deleteCompany(id);
    }
}

const businessCompanyService = new BusinessCompanyService();
export default businessCompanyService;

