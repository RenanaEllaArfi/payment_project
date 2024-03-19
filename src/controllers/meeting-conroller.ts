import {MeetingService} from "../services/meeting-service";
import {Meeting} from "../types/meeting";
import {RequestHandler} from "express";
import {Utility} from "../utils/utility"
import {ResponseMessage} from "../types/messages.types";
export class MeetingController {
    protected meetingService: MeetingService;

    constructor() {
        this.meetingService = this.getMeetingService();
    }

    protected getMeetingService(): MeetingService {
        return new MeetingService();
    }

    createMeeting: RequestHandler = async (req, res) => {
            let meeting = new Meeting();
            meeting.company_id = Utility.getNumber(req.body("BusinessCompany"));
            meeting.date = new Date(req.body("date"));
            meeting.location = req.body("location");
            meeting.summary = req.body("summary");

            // call validation on values
            const newMeeting = await this.meetingService.createMeeting(meeting);
            const response: ResponseMessage = {
                status: 200,
                message: 'success',
                data: { newMeeting },
            };
            res.status(response.status).json(response);
    }
    getMeetingsByCompany: RequestHandler = async (req, res) => {
            const company_id = Utility.getNumber(req.param("BusinessCompany"));
            const meetings = await this.meetingService.getMeetingsByCompany(company_id);
            const response: ResponseMessage = {
                status: 200,
                message: 'success',
                data: { meetings },
            };
            res.status(response.status).json(response);
    }
}
const meetingController = new MeetingController();
export default meetingController;