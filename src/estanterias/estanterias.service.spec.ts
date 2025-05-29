import { Test, TestingModule } from '@nestjs/testing';
import { EstanteriasService } from './estanterias.service';

describe('EstanteriasService', () => {
  let service: EstanteriasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstanteriasService],
    }).compile();

    service = module.get<EstanteriasService>(EstanteriasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
