export default function AboutPage() {
  return (
    <main>
      {/* HEADER */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-medium text-slate-500">About</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
            Built on structure. Driven by reliability.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            Avas Proposal was established to raise the standard of proposal
            development in the Maldives—bringing clarity, discipline, and
            institutional-level formatting to every submission.
          </p>
        </div>
      </section>

      {/* STORY / POSITIONING */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-16 md:grid-cols-2">

            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Our Approach
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-slate-600">
                We believe proposal development is not simply about writing.
                It is about structure, financial logic, documentation accuracy,
                and presentation clarity.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Every submission prepared by Avas Proposal is built with
                consistency and review-readiness in mind—ensuring that lenders,
                ministries, and review committees can clearly understand the
                viability of the project.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Our Focus
              </h2>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600">
                <li>• Loan and financing proposals</li>
                <li>• Feasibility studies and business plans</li>
                <li>• Financial modelling and DSCR analysis</li>
                <li>• Tourism and SME project documentation</li>
                <li>• Government EOIs and tenders</li>
              </ul>
            </div>

          </div>

          {/* VALUES SECTION */}
          <div className="mt-20">
            <h2 className="text-2xl font-semibold text-slate-900">
              What Defines Us
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Clarity
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Structured layouts, coherent assumptions, and professional
                  formatting that removes ambiguity.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Dependability
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Timely delivery, consistent standards, and disciplined
                  documentation processes.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Professional Quality
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Every proposal reflects corporate-level preparation suitable
                  for institutional review.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}