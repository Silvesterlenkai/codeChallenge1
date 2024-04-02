const taxRates = [
    { min: 0, max: 24000, rate: 10 },
    { min: 24001, max: 32333, rate: 15 },
    { min: 32334, max: 40667, rate: 20 },
    { min: 40668, max: 49000, rate: 25 },
    { min: 49001, max: Infinity, rate: 30 }
  ];
  
  // NHIF and NSSF values
  const nhifDeduction = 500;
  const nssfDeduction = 200;
  
  // Function to calculate PAYE tax
  function calculatePAYE(grossSalary) {
    let tax = 0;
    for (const rate of taxRates) {
      if (grossSalary > rate.upper) {
        tax += (rate.upper - rate.lower) * rate.rate / 100;
      } else {
        tax += (grossSalary - rate.lower) * rate.rate / 100;
        break;
      }
    }
    return tax;
  }
  
  // Function to calculate net salary
  function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = calculatePAYE(grossSalary);
    const nhif = nhifDeduction;
    const nssf = nssfDeduction;
    const deductions = payee + nhif + nssf;
    const netSalary = grossSalary - deductions;
    
    return {
      grossSalary: grossSalary,
      payee: payee,
      nhif: nhif,
      nssf: nssf,
      deductions: deductions,
      netSalary: netSalary
    };
  }
  
  // Test the function
  const basicSalary = 50000;
  const benefits = 10000;
  const salaryDetails = calculateNetSalary(basicSalary, benefits);
  
  console.log("Gross Salary:", salaryDetails.grossSalary);
  console.log("PAYE (Tax):", salaryDetails.payee);
  console.log("NHIF Deduction:", salaryDetails.nhif);
  console.log("NSSF Deduction:", salaryDetails.nssf);
  console.log("Total Deductions:", salaryDetails.deductions);
  console.log("Net Salary:", salaryDetails.netSalary);
  