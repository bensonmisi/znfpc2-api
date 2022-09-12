import { Controller } from '@nestjs/common';
import { SystemauditService } from './systemaudit.service';

@Controller('systemaudit')
export class SystemauditController {
  constructor(private readonly systemauditService: SystemauditService) {}
}
