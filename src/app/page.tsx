export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Business Compliance,
            <br />
            Technology &
            <br />
            Security Solutions
          </h1>

          <p className="mt-8 text-lg md:text-2xl max-w-3xl">
            Helping businesses register, stay compliant, automate operations,
            and secure their assets across Nigeria.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold"
            >
              Contact Us
            </a>

            <a
              href="https://wa.me/2347037819477"
              target="_blank"
              className="border border-white px-6 py-3 rounded-lg"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="/cac-registration"
              className="bg-white p-8 rounded-2xl shadow"
            >
              <h3 className="text-2xl font-bold mb-3">
                CAC Registration
              </h3>
              <p>
                Business registration, NGO registration and annual returns.
              </p>
            </a>

            <a
              href="/technology"
              className="bg-white p-8 rounded-2xl shadow"
            >
              <h3 className="text-2xl font-bold mb-3">
                Technology
              </h3>
              <p>
                Software engineering, cloud solutions and cybersecurity.
              </p>
            </a>

            <a
              href="/security-services"
              className="bg-white p-8 rounded-2xl shadow"
            >
              <h3 className="text-2xl font-bold mb-3">
                Security Services
              </h3>
              <p>
                Security guards, CCTV installation and access control.
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}