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

export interface Person {
    competitor: Competitor;
    score: number;
}
export interface Competitor {
    id: number;
    wcaId: string;
    name: string;
}
