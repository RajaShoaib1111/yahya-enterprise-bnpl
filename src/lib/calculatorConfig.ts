/**
 * Yahya Enterprise BNPL Calculator Configuration
 *
 * IMPORTANT: This configuration is flexible and may change based on client requirements.
 * All business logic for installment calculations is centralized here.
 */

export interface CalculatorConfig {
  durationOptions: number[];
  downPaymentOptions: number[];
  profitRatioRules: ProfitRatioRule[];
  minProductPrice: number;
  maxProductPrice: number;
  minDownPayment: number;
  maxDownPayment: number;
  minDuration: number;
  maxDuration: number;
}

export interface ProfitRatioRule {
  maxDuration: number;
  profitRatio: number;
  label: string;
}

export interface CalculationResult {
  productPrice: number;
  downPaymentPercentage: number;
  downPaymentAmount: number;
  remainingBalance: number;
  durationMonths: number;
  profitRatio: number;
  profitRatioApplied: number;
  profitAmount: number;
  totalWithProfit: number;
  monthlyPayment: number;
  totalPayable: number;
}

/**
 * Default Calculator Configuration
 * Modify these values to change calculator behavior
 */
export const defaultCalculatorConfig: CalculatorConfig = {
  // Available duration options in months (suggested presets)
  durationOptions: [3, 6, 9, 12],

  // Available down payment percentages (suggested presets)
  downPaymentOptions: [15, 25, 35, 50],

  // Profit ratio rules based on duration
  // Rule: If duration <= 6 months, profit ratio = 30%
  //       If duration > 6 months, profit ratio = 60%
  profitRatioRules: [
    {
      maxDuration: 6,
      profitRatio: 30,
      label: 'Short Term (≤6 months)',
    },
    {
      maxDuration: Infinity,
      profitRatio: 60,
      label: 'Long Term (>6 months)',
    },
  ],

  // Price constraints
  minProductPrice: 100,
  maxProductPrice: 1000000,

  // Down payment range (flexible)
  minDownPayment: 0,
  maxDownPayment: 50,

  // Duration range in months (flexible)
  minDuration: 1,
  maxDuration: 24,
};

/**
 * Get profit ratio based on duration
 * @param durationMonths - Duration in months
 * @param config - Calculator configuration (optional)
 * @returns Profit ratio percentage
 */
export function getProfitRatio(
  durationMonths: number,
  config: CalculatorConfig = defaultCalculatorConfig
): number {
  for (const rule of config.profitRatioRules) {
    if (durationMonths <= rule.maxDuration) {
      return rule.profitRatio;
    }
  }

  // Default to last rule if no match (shouldn't happen with Infinity)
  return config.profitRatioRules[config.profitRatioRules.length - 1].profitRatio;
}

/**
 * Calculate installment details
 *
 * Formula:
 * 1. Down Payment Amount = Product Price × (Down Payment % / 100)
 * 2. Remaining Balance = Product Price - Down Payment Amount
 * 3. Profit Amount = Remaining Balance × (Profit Ratio / 100)
 * 4. Total with Profit = Remaining Balance + Profit Amount
 * 5. Monthly Payment = Total with Profit / Duration
 * 6. Total Payable = Down Payment Amount + Total with Profit
 *
 * @param productPrice - Price of the product
 * @param downPaymentPercentage - Down payment percentage (15, 25, 35, or 50)
 * @param durationMonths - Duration in months (3, 6, 9, or 12)
 * @param config - Calculator configuration (optional)
 * @returns Calculation result with all breakdown details
 */
export function calculateInstallment(
  productPrice: number,
  downPaymentPercentage: number,
  durationMonths: number,
  config: CalculatorConfig = defaultCalculatorConfig
): CalculationResult {
  // Validate inputs
  if (productPrice < config.minProductPrice || productPrice > config.maxProductPrice) {
    throw new Error(`Product price must be between ${config.minProductPrice} and ${config.maxProductPrice}`);
  }

  if (downPaymentPercentage < config.minDownPayment || downPaymentPercentage > config.maxDownPayment) {
    throw new Error(`Down payment must be between ${config.minDownPayment}% and ${config.maxDownPayment}%`);
  }

  if (durationMonths < config.minDuration || durationMonths > config.maxDuration) {
    throw new Error(`Duration must be between ${config.minDuration} and ${config.maxDuration} months`);
  }

  // Step 1: Calculate down payment
  const downPaymentAmount = productPrice * (downPaymentPercentage / 100);

  // Step 2: Calculate remaining balance
  const remainingBalance = productPrice - downPaymentAmount;

  // Step 3: Get profit ratio based on duration
  const profitRatio = getProfitRatio(durationMonths, config);

  // Step 4: Calculate profit amount
  const profitAmount = remainingBalance * (profitRatio / 100);

  // Step 5: Calculate total with profit
  const totalWithProfit = remainingBalance + profitAmount;

  // Step 6: Calculate monthly payment
  const monthlyPayment = totalWithProfit / durationMonths;

  // Step 7: Calculate total payable
  const totalPayable = downPaymentAmount + totalWithProfit;

  return {
    productPrice,
    downPaymentPercentage,
    downPaymentAmount: Number(downPaymentAmount.toFixed(2)),
    remainingBalance: Number(remainingBalance.toFixed(2)),
    durationMonths,
    profitRatio,
    profitRatioApplied: profitRatio,
    profitAmount: Number(profitAmount.toFixed(2)),
    totalWithProfit: Number(totalWithProfit.toFixed(2)),
    monthlyPayment: Number(monthlyPayment.toFixed(2)),
    totalPayable: Number(totalPayable.toFixed(2)),
  };
}

/**
 * Format currency for display
 * @param amount - Amount to format
 * @param currency - Currency symbol (default: $)
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number, currency: string = '$'): string {
  return `${currency}${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

/**
 * Example calculation for testing/documentation
 */
export function getExampleCalculation(): CalculationResult {
  // Example: $1000 product, 25% down, 9 months
  return calculateInstallment(1000, 25, 9);
}
