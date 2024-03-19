import {BusinessCompany} from "../types/business-company"
import {sql_con} from "../db/sql/sql.connection";
import {RowDataPacket} from "mysql2";

export class BusinessCompanyDBService {

    async createBusinessCompany(company: BusinessCompany):  Promise<BusinessCompany>{
        try {
            const {company_id, company_name, industry, location} = company;
            const params = [company_id, company_name, industry, location];

            let query = `INSERT INTO business_compenies SET ?`;
            const [result] = ( await sql_con.query(query, [params])) as unknown as RowDataPacket[][];
            const businessCompany = result[0] as BusinessCompany;
            //call parser function instead as
            return businessCompany;
        } catch (err) {
            throw new Error("DB ERROR")
        }
    }

    async getCompanyById(id: number): Promise<BusinessCompany>{
        try {
            let query = `SELECT * FROM business_compenies WHERE company_id = ${id}`;
            const [result] = ( await sql_con.query(query)) as unknown as RowDataPacket[][];
            const businessCompany = result[0] as BusinessCompany;
            //call parser function instead as
            return businessCompany;
        } catch (err) {
            throw new Error("DB ERROR")
        }
    }

    async updateCompany(id: number, company: BusinessCompany): Promise<BusinessCompany>{
        try {
            const {company_id, company_name, industry, location} = company;
            const params = [company_id, company_name, industry, location, id];

            let query = `    SET @COMPANY_ID = ?;
                                    SET @COMPANY_NAME = ?;
                                    SET @INDUSTRY = ?;
                                    SET @LOCATION = ?;
    
                                    SET @ID = ?
                                    
                                    UPDATE business_compenies
                                    ${company_id ? ", company_id = @COMPANY_ID" : ""}
                                    ${company_name ? ", company_name = @COMPANY_NAME" : ""}
                                    ${industry ? ", industry = @INDUSTRY" : ""}
                                    ${location ? ", location = @LOCATION" : ""}
                                     WHERE company_id = @ID `;
            const [result] = ( await sql_con.query(query, [params])) as unknown as RowDataPacket[][];
            const businessCompany = result[0] as BusinessCompany;
            //call parser function instead as
            return businessCompany;
        } catch (err) {
            throw new Error("DB ERROR")
        }
    }

    async deleteCompany(id: number): Promise<void>{
        try {
            let delete_query = ` DELETE FROM business_compenies WHERE company_id = ${id} `;
            await sql_con.query(delete_query);
            // need to check that delete work
        } catch (err) {
            throw new Error("DB ERROR")
        }
    }
}

const businessCompanyDBService = new BusinessCompanyDBService();
export default businessCompanyDBService;
