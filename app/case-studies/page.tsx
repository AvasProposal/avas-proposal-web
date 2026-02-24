export default function CaseStudiesPage() {
  const cases = [
    {
      title: "Guesthouse Financing Proposal",
      subtitle: "Tourism Project • Maldives",
      description:
        "Comprehensive financing documentation prepared for a multi-room guesthouse development. Included revenue modelling, occupancy projections, BOQ structuring, and DSCR analysis aligned with tourism financing requirements.",
    },
    {
      title: "Fishing Vessel Engine Replacement",
      subtitle: "SME Financing • Marine Sector",
      description:
        "Structured proposal for equipment financing, including supplier quotations, repayment feasibility, operating cost assumptions, and structured financial projections.",
    },
    {
      title: "Residential Construction Financing",
      subtitle: "Home Development • Maldives",
      description:
        "Complete home construction financing documentation including itemized BOQ, staged drawdown schedule, and repayment planning aligned with lender criteria.",
    },
  ];

  return (
    <main>
      {/* HEADER */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-medium text-slate-500">Case Studies</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
            Structured work. Real-world applications.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            Below are examples of proposal structures prepared for financing,
            tourism, SME, and development projects. Each submission is tailored
            to institutional review standards.
          </p>
        </div>
      </section>

      {/* CASE GRID */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            {cases.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm"
              >
                <p className="text-xs font-medium text-slate-500">
                  {c.subtitle}
                </p>
                <h2 className="mt-3 text-xl font-semibold text-slate-900">
                  {c.title}
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-slate-600">
                  {c.description}
                </p>
              </div>
            ))}
          </div>

          {/* CONFIDENTIALITY NOTE */}
          <div className="mt-20 rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Confidentiality & Professional Standards
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              All case studies presented are generalized summaries. Detailed
              financial data and client information remain confidential in
              accordance with professional standards and client agreements.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}