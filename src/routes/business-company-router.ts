import express from 'express';
import businessCompanyController from "../controllers/business-company-controller";

import raw from '../middlewares/route.async.wrapper';

class BusinessCompanyRouter {
    private readonly businessCompanyRouter = express.Router();

    constructor() {
        this.businessCompanyRouter.post('/', raw(businessCompanyController.createCompanyBusiness));
        this.businessCompanyRouter.get('/:CompanyBusiness', raw(businessCompanyController.getCompanyBusiness));
        this.businessCompanyRouter.post('/:CompanyBusiness', raw(businessCompanyController.updateCompanyBusiness));
        this.businessCompanyRouter.delete('/:CompanyBusiness', raw(businessCompanyController.deleteCompanyBusiness));
    }

    get router() {
        return this.businessCompanyRouter;
    }
}

const businessCompanyRouter = new BusinessCompanyRouter();

export default businessCompanyRouter;
