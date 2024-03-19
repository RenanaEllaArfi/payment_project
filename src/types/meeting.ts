export class Meeting {
    meeting_id: number = 0;
    company_id: number = 0;
    date: Date = new Date();
    location : string = "";
    summary: string = "";

    constructor(meeting?: Meeting) {
        if (meeting) {
            this.company_id = meeting.company_id || 0;
            this.summary = meeting.summary || "";
            this.location = meeting.location || "";
            this.date = meeting.date || new Date();
        }
    }
}