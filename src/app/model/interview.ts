import { Candidate } from './candidate';

export class Interview {

    interview_id: number;
    status: String;
    candidate: Candidate;
    created_ts: Date;
    updated_ts: Date;
}
