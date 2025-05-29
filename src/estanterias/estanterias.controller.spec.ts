import { Test, TestingModule } from '@nestjs/testing';
import { EstanteriasController } from './estanterias.controller';

describe('EstanteriasController', () => {
  let controller: EstanteriasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstanteriasController],
    }).compile();

    controller = module.get<EstanteriasController>(EstanteriasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
