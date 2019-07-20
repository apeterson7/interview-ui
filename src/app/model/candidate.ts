import {Question} from '../model/question';
import {Interview} from '../model/interview';

export class Candidate {
    candidate_id: number;
    username: string;
    password: string;
    email: string;
    firstname: string;
    lastname: string;
    notes: string;
    status: number;
    questions: Question[];
    interviews: Interview[];
    created_ts: Date;
    updated_ts: Date;
    tags: string[];
}
