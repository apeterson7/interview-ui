import { Candidate } from './candidate';

export class Interview {

    interview_id: string;
    status: number;
    candidate: Candidate;
    responses: Response[];
    created_ts: Date;
    updated_ts: Date;
}
