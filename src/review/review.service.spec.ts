import { Test, TestingModule } from '@nestjs/testing';
import { ReviewService } from './review.service';
import { getModelToken } from 'nestjs-typegoose';
import { Types } from 'mongoose';

describe('ReviewService', () => {
  let service: ReviewService;

  const exec = {exec: jest.fn()}
  const ReviewRepositoryFactory = ()=> ({
    find: ()=> exec
  })

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReviewService,
        {useFactory: ReviewRepositoryFactory, provide: getModelToken('ReviewModel')}
      ],
    }).compile();

    service = module.get<ReviewService>(ReviewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findBbyProductId  working ', async () => {
    const id = new Types.ObjectId().toHexString()
    ReviewRepositoryFactory().find().exec.mockReturnValueOnce([{ productId: id }])
    const res = await service.findByProductId(id)
    expect(res[0].productId).toBe(id)
  });
}); 
