import meetingDBService from "../repositories/meeting-DBService"

export class StatisticsService {
    async getMeetingsPerDay(): Promise<Map<string, number>> {
        const meetings = await meetingDBService.getAllMeetings();
        // Initialize a Map to store the count of meetings for each day
        const meetingsCountPerDay: Map<string, number> = new Map();

        // Iterate over the meetings
        meetings.forEach(meeting => {
            // Get the date of the meeting as a string in the format YYYY-MM-DD
            const meetingDate = meeting.date.toISOString().substr(0, 10);

            // Increment the count for the meeting date in the Map
            if (meetingsCountPerDay.has(meetingDate)) {
                meetingsCountPerDay.set(meetingDate, meetingsCountPerDay.get(meetingDate)! + 1);
            } else {
                meetingsCountPerDay.set(meetingDate, 1);
            }
        });

        return meetingsCountPerDay;
  }

    async getMeetingExistingMonth(): Promise<Number> {
        const meetings = await meetingDBService.getAllMeetings();
        // Get the current date to determine the existing month
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1; // JavaScript months are zero-based

        // Filter meetings that belong to the existing month
        const meetingsInMonth = meetings.filter(meeting => {
            const meetingYear = meeting.date.getFullYear();
            const meetingMonth = meeting.date.getMonth() + 1; // JavaScript months are zero-based
            return meetingYear === currentYear && meetingMonth === currentMonth;
        });

        // Return the count of meetings in the existing month
        return meetingsInMonth.length;
    }

    async getMeetingPercentagePerDay(): Promise< Map<string, number>> {
        const meetings = await meetingDBService.getAllMeetings();
        const totalMeetings = meetings.length;

        const meetingsCountPerDay = await this.getMeetingsPerDay();
        const meetingsPercentagePerDay: Map<string, number> = new Map();

        meetingsCountPerDay.forEach((count, day) => {
            const percentage = (count / totalMeetings) * 100;
            meetingsPercentagePerDay.set(day, percentage);
        });

        return meetingsPercentagePerDay;
    }
}
const statisticsService = new StatisticsService();
export default statisticsService;

