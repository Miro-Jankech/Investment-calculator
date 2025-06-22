import { Injectable } from "@angular/core";
import { type InvestmentInput } from "./investment-input.model";

@Injectable({providedIn: "root"})

export class InvestmentService {
  

  calculateInvestmentResults(data: InvestmentInput) {
  
      const {initialInvestment, duration, expectedReturn, annualInvestment} = data;
      const annualData = [];
      let investmentValue = initialInvestment; //10000
  
      for (let i = 0; i < duration; i++) {
        const year = i + 1;
        const interestEarnedInYear = investmentValue * (expectedReturn / 100); // 10000 * (5,5 / 100)
        investmentValue += interestEarnedInYear + annualInvestment;
        const totalInterest =
          investmentValue - annualInvestment * year - initialInvestment;
        annualData.push({
          year: year,
          interest: interestEarnedInYear,
          valueEndOfYear: investmentValue,
          annualInvestment: annualInvestment,
          totalInterest: totalInterest,
          totalAmountInvested: initialInvestment + annualInvestment * year,
        });
      }
      return annualData;
      
    }
}