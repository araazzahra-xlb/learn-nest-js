import { Injectable } from '@nestjs/common';
import { ok } from '../common/ok.js';
import { LoanBodyDto, LoanParamsDto, LoanQueryDto } from './dto/loan.dto.js';

@Injectable()
export class LoansService {
  installment(params: LoanParamsDto, query: LoanQueryDto, body: LoanBodyDto) {
    const { principal } = params;
    const { months, annualInterestRate } = body;
    const monthlyInterestRate = annualInterestRate / 12 / 100;

    const monthlyInstallment =
      monthlyInterestRate === 0
        ? principal / months
        : (principal *
            monthlyInterestRate *
            (1 + monthlyInterestRate) ** months) /
          ((1 + monthlyInterestRate) ** months - 1);

    const roundedInstallment = Math.round(monthlyInstallment);
    const totalPayment = roundedInstallment * months;

    return ok('Installment calculated', {
      principal,
      currency: query.currency,
      months,
      annualInterestRate,
      monthlyInterestRate,
      totalPayment,
      totalInterest: totalPayment - principal,
      monthlyInstallment: roundedInstallment,
    });
  }
}
