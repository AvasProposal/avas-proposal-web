"use client";

import { useState } from "react";

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenureYears, setTenureYears] = useState(5);
  const [monthlyRevenue, setMonthlyRevenue] = useState(200000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(120000);

  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = tenureYears * 12;

  const emi =
    monthlyRate === 0
      ? loanAmount / numberOfPayments
      : (loanAmount *
          monthlyRate *
          Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  const netOperatingIncome = monthlyRevenue - monthlyExpenses;

  const dscr = netOperatingIncome / emi;

 const status =
  dscr >= 1.3
    ? "Strong Coverage"
    : dscr >= 1
    ? "Marginal Coverage"
    : "Insufficient Coverage";

  const statusColor =
    dscr >= 1.3
      ? "text-green-600"
      : dscr >= 1
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
      <h2 className="text-2xl font-semibold text-slate-900">
         Institutional Loan Feasibility Estimator
      </h2>

      <p className="mt-3 text-sm text-slate-600">
        Estimate EMI, net cashflow, and approximate DSCR to assess approval readiness.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <Input
          label="Loan Amount (MVR)"
          value={loanAmount}
          onChange={setLoanAmount}
        />

        <Input
          label="Interest Rate (%)"
          value={interestRate}
          onChange={setInterestRate}
        />

        <Input
          label="Tenure (Years)"
          value={tenureYears}
          onChange={setTenureYears}
        />

        <Input
          label="Monthly Revenue (MVR)"
          value={monthlyRevenue}
          onChange={setMonthlyRevenue}
        />

        <Input
          label="Monthly Expenses (MVR)"
          value={monthlyExpenses}
          onChange={setMonthlyExpenses}
        />

      </div>

      <div className="mt-12 border-t border-slate-200 pt-8 space-y-4 text-sm">
        <Result label="Estimated EMI" value={formatCurrency(emi)} />
        <Result label="Net Operating Income" value={formatCurrency(netOperatingIncome)} />
        <Result label="DSCR" value={dscr.toFixed(2)} />
        <div className="flex justify-between">
          <span className="font-medium text-slate-700">Assessment</span>
          <span className={`font-semibold ${statusColor}`}>{status}</span>
        </div>
      </div>
      <p className="mt-6 text-xs leading-relaxed text-slate-500">
  This estimator provides indicative calculations based on user inputs.
  Final approval decisions depend on institutional review, documentation
  quality, collateral structure, and lender-specific risk assessment criteria.
</p>
<div className="mt-6">
  <a
    href="/contact"
    className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-2 text-xs font-semibold text-slate-900 transition hover:bg-slate-50"
  >
    Discuss Full Proposal Structuring
  </a>
</div>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <label className="text-xs font-medium text-slate-600">
        {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-2 text-sm focus:border-slate-900 focus:outline-none"
      />
    </div>
  );
}

function Result({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between">
      <span className="font-medium text-slate-700">{label}</span>
      <span className="font-semibold text-slate-900">{value}</span>
    </div>
  );
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "MVR",
    minimumFractionDigits: 0,
  }).format(value);
}