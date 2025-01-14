import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  exports: [CpuService],
  providers: [CpuService],
  imports: [PowerModule],
})
export class CpuModule {}
