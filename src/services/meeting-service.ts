import { Meeting } from '../types/meeting';
import meetingDBService from "../repositories/meeting-DBService"


export class MeetingService {
    async createMeeting(meeting: Meeting): Promise<Meeting> {
        const newMeeting: Meeting = await meetingDBService.createMeeting(meeting);
        return newMeeting;
    }

    async getMeetingsByCompany(id: number): Promise<Meeting[]> {
        const Meetings: Meeting[] = await meetingDBService.getMeetingsByCompany(id);
        if (!Meetings) {
            throw new Error('Meetings not found');
        }
        return Meetings;
    }
}
const meetingService = new MeetingService();
export default meetingService;

