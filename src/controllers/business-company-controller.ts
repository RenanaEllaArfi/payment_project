import BusinessCompanyService from "../services/business-company-service";
import {BusinessCompany} from "../types/business-company";

export class BusinessCompanyController {
    async createCompanyBusiness(req: any, res: any) {
            let company = new BusinessCompany();
            company.company_id = req.body("company_id");
            company.company_name = req.body("company_name");
            company.industry = req.body("industry");
            company.location = req.body("location");

            // call validation on values
            let response = await BusinessCompanyService.createCompany(company);
            return res.done(response);
    }

    async getCompanyBusiness(req: any, res:any) {
            let company_id = req.param("BusinessCompany");
            let response = await BusinessCompanyService.getCompanyById(company_id);
            return res.done(response);
    }

    async updateCompanyBusiness(req: any, res: any) {
        let company = new BusinessCompany();
         let id = req.param("BusinessCompany");

            company.company_id = req.body("company_id", null);
            company.company_name = req.body("company_name", null);
            company.industry = req.body("industry", null);
            company.location = req.body("location", null);

            // call validation on values
            let response = await BusinessCompanyService.updateCompany(id, company);
            return res.done(response);
    }

    async deleteCompanyBusiness(req: any, res: any) {
            let company_id = req.param("BusinessCompany");
            await BusinessCompanyService.deleteCompany(company_id);
            return res.done("success");
    }
}

const businessCompanyController = new BusinessCompanyController();
export default businessCompanyController;
