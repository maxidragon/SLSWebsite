export interface Competition {
    id: number;
    name: string;
    wcaId: string;
    events: string[];
    wcaWebsite: string;
    isPublic: boolean;
    startDate: Date;
    endDate: Date;
    registrationOpen: Date;
    registrationClose: Date;
}