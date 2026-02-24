import Link from "next/link";
import LoanCalculator from "@/components/LoanCalculator";

const services = [
  {
    title: "Loan Proposals",
    description:
      "Complete bank-ready documentation for HDFC, SDFC, BML and other financial institutions.",
  },
  {
    title: "Financial Projections",
    description:
      "Cashflow models, DSCR analysis, break-even calculations, and structured financial forecasting.",
  },
  {
    title: "Feasibility Studies",
    description:
      "Market analysis, risk assessment, and investment evaluation for tourism and SME projects.",
  },
  {
    title: "EOIs & Tenders",
    description:
      "Professional documentation for government submissions and council-based projects.",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-slate-500">
              Proposal Development Firm • Maldives
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-900">
              Structured for Approval.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              We prepare institutional-grade proposal documentation for financing,
  investment, and public-sector submissions — built with clarity,
  financial discipline, and review-readiness in mind.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Start Your Proposal
              </Link>

              <Link
                href="/services"
                className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Our Core Services
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* CALCULATOR SECTION */}
<section className="border-t border-slate-200 bg-white">
  <div className="mx-auto max-w-7xl px-6 py-24">
    <div className="max-w-3xl">
      <p className="text-sm font-medium text-slate-500">
        Financial Viability Tool
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
        Structured for Approval — by the Numbers.
      </h2>
      <p className="mt-5 text-lg leading-relaxed text-slate-600">
        Use this estimator to assess repayment feasibility and financial
        strength before submitting your proposal. Strong documentation
        begins with disciplined assumptions.
      </p>
    </div>

    <div className="mt-14">
      <LoanCalculator />
    </div>
  </div>
</section>





    </main>
  );
}