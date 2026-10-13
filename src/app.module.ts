import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TaxModule } from './tax/tax.module.js';
import { LengthModule } from './length/length.module.js';
import { ScoresModule } from './scores/scores.module.js';
import { BillSplitModule } from './bill-split/bill-split.module.js';
import { TemperatureModule } from './temperature/temperature.module.js';
import { CheckoutModule } from './checkout/checkout.module.js';
import { LoansModule } from './loans/loans.module.js';
import { ElectricityModule } from './electricity/electricity.module.js';
import { ParkingModule } from './parking/parking.module.js';
import { ShippingModule } from './shipping/shipping.module.js';

@Module({
  imports: [
    TaxModule,
    LengthModule,
    ScoresModule,
    BillSplitModule,
    TemperatureModule,
    CheckoutModule,
    LoansModule,
    ElectricityModule,
    ParkingModule,
    ShippingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
