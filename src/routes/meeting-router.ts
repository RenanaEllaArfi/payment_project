import express from 'express';
import raw from '../middlewares/route.async.wrapper';
import meetingController from "../controllers/meeting-conroller";

class MeetingRouter {
    private readonly meetingRouter = express.Router();

    constructor() {
        this.meetingRouter.post('meetings/', raw(meetingController.createMeeting));
        this.meetingRouter.get('meetings/:BusinessCompany', raw(meetingController.getMeetingsByCompany));
    }

    get router() {
        return this.meetingRouter;
    }
}

const meetingRouter = new MeetingRouter();
export default meetingRouter;
