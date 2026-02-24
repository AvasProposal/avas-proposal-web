import Link from "next/link";

const serviceGroups = [
  {
    group: "Banking & Finance",
    items: [
      {
        title: "Loan Proposal Preparation",
        desc: "End-to-end proposal documentation tailored to institutional requirements (HDFC, SDFC, BML and other lenders).",
      },
      {
        title: "Feasibility & Business Plans",
        desc: "Clear market rationale, risk assessment, implementation planning, and structured narratives for approval readiness.",
      },
      {
        title: "Financial Projections & DSCR",
        desc: "Cashflow forecasting, DSCR analysis, break-even and sensitivity scenarios—presented in bank-friendly formats.",
      },
    ],
  },
  {
    group: "Tourism & Hospitality",
    items: [
      {
        title: "Guesthouse & Guestroom Financing Proposals",
        desc: "Project narratives, costing structure, revenue assumptions, and repayment feasibility aligned with tourism financing products.",
      },
      {
        title: "Operational & Revenue Modelling",
        desc: "Room inventory modelling, occupancy assumptions, pricing strategy, and operational cost baselines.",
      },
      {
        title: "Upgrade & Renovation Documentation",
        desc: "Expansion proposals, refurbishment scopes, phased work plans, and supporting cost breakdowns.",
      },
    ],
  },
  {
    group: "Government & Public Sector",
    items: [
      {
        title: "EOIs & Tender Submissions",
        desc: "Professional responses, capability statements, compliance documentation, and structured submission packs.",
      },
      {
        title: "Council & Ministry Documentation",
        desc: "Project concept notes, implementation schedules, and supporting attachments prepared to public-sector expectations.",
      },
    ],
  },
  {
    group: "Technical Documentation",
    items: [
      {
        title: "BOQs & Itemized Costing",
        desc: "Itemized BOQs and structured cost breakdowns covering materials, labour, and scope sections for review clarity.",
      },
      {
        title: "Implementation Plans & Timelines",
        desc: "Work schedules, milestones, deliverables, and practical execution mapping that aligns with financing requirements.",
      },
      {
        title: "Supporting Annexes & Attachments",
        desc: "Supplier quotations, specs, scope notes, assumptions lists, and presentation formatting for a complete package.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* HEADER */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-medium text-slate-500">Services</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
            Proposal support built to institutional standards.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            We deliver complete documentation packs—structured, coherent, and
            ready for review. Every output is prepared with clarity, credibility,
            and approval readiness in mind.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Start your proposal
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              View case studies
            </Link>
          </div>
        </div>
      </section>

      {/* GROUPS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="space-y-14">
            {serviceGroups.map((g) => (
              <div key={g.group}>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  {g.group}
                </h2>

                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  {g.items.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
                    >
                      <h3 className="text-lg font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA STRIP */}
          <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Need a clear checklist for approval readiness?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  We can guide you through scope, assumptions, documentation, and
                  formatting—so your submission looks professional and complete.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Contact Avas Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}