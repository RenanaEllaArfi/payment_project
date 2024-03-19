import {sql_con} from "../db/sql/sql.connection";
import {IGeneralObj} from "../types/general.types";
import {Meeting} from "../types/meeting";
import {RowDataPacket} from "mysql2";
export class MeetingDBService {

    async createMeeting(meeting: Meeting): Promise<Meeting> {
        try {
            const {company_id, date, location, summary} = meeting;
            const params = [company_id, date, location, summary];

            let insert_query = `INSERT INTO meeting
                                SET ?`;
            const [result] = ( await sql_con.query(insert_query, [params])) as unknown as RowDataPacket[][];
            const newMeeting = result[0] as Meeting;
            //call parser function instead as
            return newMeeting;
        } catch (err) {
            const errMessasge: string = (err as IGeneralObj).sqlMessage;
            throw new Error(errMessasge);
        }
    }

    async getMeetingsByCompany(id: number): Promise<Meeting[]>{
        try {
            let get_query = `SELECT * FROM meetings WHERE company_id = ${id}`;
            const [result] = ( await sql_con.query(get_query)) as unknown as RowDataPacket[][];
            const meetings = result as Meeting[];
            //call parser function instead as
            return meetings;
        } catch (err) {
            const errMessasge: string = (err as IGeneralObj).sqlMessage;
            throw new Error(errMessasge);
        }
    }

    async getAllMeetings(): Promise<Meeting[]>{
        try {
            let get_query = `SELECT * FROM meetings`;
            const [result] = ( await sql_con.query(get_query)) as unknown as RowDataPacket[][];
            const meetings = result as Meeting[];
            //call parser function instead as
            return meetings;
        } catch (err) {
            const errMessasge: string = (err as IGeneralObj).sqlMessage;
            throw new Error(errMessasge);
        }
    }
}
const meetingDBService = new MeetingDBService();
export default meetingDBService;
