import {Question} from '../model/question';

export class Candidate {
    candidate_id: number;
    username: string;
    password: string;
    email: string;
    firstname: string;
    lastname: string;
    notes: string;
    status: string;
    questions: Question[];
}
