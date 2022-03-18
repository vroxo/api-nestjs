import { Test, TestingModule } from '@nestjs/testing';
import { SendMailTweetsJob } from './send-mail-tweets.job';

describe('SendMailTweetsService', () => {
  let service: SendMailTweetsJob;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendMailTweetsJob],
    }).compile();

    service = module.get<SendMailTweetsJob>(SendMailTweetsJob);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
