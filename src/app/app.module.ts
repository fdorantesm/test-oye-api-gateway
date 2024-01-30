import { CoreModule } from '@/core/core.module';
import { AccountsModule } from '@/modules/accounts/accounts.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { HealthModule } from '@/modules/health/health.module';
import { SharedModule } from '@/modules/shared/shared.module';
import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    CoreModule,
    HealthModule,
    SharedModule,
    AuthModule,
    AccountsModule,
    RouterModule.register([
      {
        path: 'accounts',
        module: AccountsModule,
      },
    ]),
  ],
})
export class AppModule {}
