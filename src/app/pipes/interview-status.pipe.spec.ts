import { InterviewStatusPipe } from './interview-status.pipe';

describe('InterviewStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new InterviewStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
