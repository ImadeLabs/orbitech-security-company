export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-gradient-to-r from-slate-950 via-blue-900 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <span className="inline-block bg-white/10 px-4 py-2 rounded-full text-sm">
            Business • Technology • Security
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
            Business Compliance,
            <br />
            Technology &
            <br />
            Security Solutions
          </h1>

          <p className="mt-8 text-xl text-blue-100 max-w-3xl">
            Helping businesses register, stay compliant, automate operations,
            and secure their assets across Nigeria.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold shadow-lg"
            >
              Contact Us
            </a>

            <a
              href="https://wa.me/2347037819477"
              target="_blank"
              className="border border-white px-8 py-4 rounded-xl font-bold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-4xl font-bold text-blue-600">10+</h3>
              <p className="text-gray-600 mt-2">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">500+</h3>
              <p className="text-gray-600 mt-2">
                Projects Completed
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">100+</h3>
              <p className="text-gray-600 mt-2">
                Clients Served
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">24/7</h3>
              <p className="text-gray-600 mt-2">
                Customer Support
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            One Partner For Business Growth
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Orbitech Security Company Ltd provides corporate compliance,
            technology solutions, cybersecurity services and physical security
            solutions for startups, SMEs, NGOs, estates and corporate
            organizations.
          </p>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Our Core Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold mb-4">
                CAC & Compliance
              </h3>

              <p className="text-gray-600 mb-6">
                Business registration, NGO registration, annual returns,
                TIN, ITF, NSITF and compliance services.
              </p>

              <a
                href="/cac-registration"
                className="text-blue-600 font-semibold"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold mb-4">
                Technology Solutions
              </h3>

              <p className="text-gray-600 mb-6">
                Website development, software engineering,
                automation, cybersecurity and cloud solutions.
              </p>

              <a
                href="/technology"
                className="text-blue-600 font-semibold"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold mb-4">
                Security Services
              </h3>

              <p className="text-gray-600 mb-6">
                CCTV installation, security guards,
                estate security and access control systems.
              </p>

              <a
                href="/security-services"
                className="text-blue-600 font-semibold"
              >
                Learn More →
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose Orbitech?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-slate-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Fast Delivery
              </h3>

              <p className="text-slate-300">
                Quick processing and timely project completion.
              </p>
            </div>

            <div className="bg-slate-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Professional Team
              </h3>

              <p className="text-slate-300">
                Experienced consultants, engineers and security professionals.
              </p>
            </div>

            <div className="bg-slate-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Trusted Solutions
              </h3>

              <p className="text-slate-300">
                Reliable services for businesses and organizations.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Ready To Work With Orbitech?
          </h2>

          <p className="text-xl mb-8">
            Contact us today for professional compliance,
            technology and security solutions.
          </p>

          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold"
          >
            Schedule Consultation
          </a>

        </div>
      </section>

    </main>
  );
}