import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsController } from './infra/http/controllers/notifications.controller';
import { AppService } from './app.service';

describe('NotificationsController', () => {
  let notificationsController: NotificationsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NotificationsController],
      providers: [AppService],
    }).compile();

    notificationsController = app.get<NotificationsController>(NotificationsController);
  });
});
