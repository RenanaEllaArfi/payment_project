import express from 'express';
import raw from '../middlewares/route.async.wrapper';
import statisticsController from "../controllers/statistics-controller";

class MeetingRouter {
    private readonly meetingRouter = express.Router();

    constructor() {
        this.meetingRouter.get('/statistics/meetings/per-day', raw(statisticsController.getMeetingsPerDay));
        this.meetingRouter.get('/statistics/meetings/existing-month', raw(statisticsController.getMeetingExistingMonth));
        this.meetingRouter.get('/statistics/meetings/percentage-per-day', raw(statisticsController.getMeetingPercentagePerDay));
}

    get router() {
        return this.meetingRouter;
    }
}

const meetingRouter = new MeetingRouter();

export default meetingRouter;
