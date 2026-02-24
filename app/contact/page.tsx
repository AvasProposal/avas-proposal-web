export default function ContactPage() {
  return (
    <main>
      {/* HEADER */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-medium text-slate-500">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
            Let’s structure your proposal properly.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            Reach out to discuss your financing or documentation needs. We will
            guide you on scope, requirements, and the best structure for approval readiness.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-2">
            
            <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">
                Direct Contact
              </h2>

              <div className="mt-6 space-y-4 text-sm text-slate-600">
                <p>
                  <span className="font-semibold text-slate-900">
                    Phone / WhatsApp:
                  </span>{" "}
                  +960 959 1003
                </p>

                <p>
                  <span className="font-semibold text-slate-900">
                    Location:
                  </span>{" "}
                  Maldives
                </p>

                <p>
                  <span className="font-semibold text-slate-900">
                    Office Hours:
                  </span>{" "}
                  9:00 – 18:00
                </p>
              </div>

              <a
                href="https://wa.me/9609591003"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Message on WhatsApp
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">
                Before You Contact
              </h2>

              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600">
                <li>• Type of financing or submission required</li>
                <li>• Estimated project value</li>
                <li>• Expected timeline</li>
                <li>• Supporting quotations (if available)</li>
              </ul>

              <p className="mt-6 text-sm text-slate-600">
                Providing this information helps us structure your proposal efficiently and professionally.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}