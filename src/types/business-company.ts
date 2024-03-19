export class BusinessCompany {
    company_id: number = 0;
    company_name: string = "";
    industry: string = "";
    location: string = "";

    constructor(businessCompany?: BusinessCompany) {
        if (businessCompany) {
            this.company_id = businessCompany.company_id || 0;
            this.company_name = businessCompany.company_name || "";
            this.industry = businessCompany.industry || "";
            this.location = businessCompany.location || "";
        }
    }
}
