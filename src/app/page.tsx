export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Business Compliance,
            <br />
            Technology & Security
            <br />
            Solutions
          </h1>

          <p className="mt-8 text-xl max-w-3xl">
            Helping businesses register, stay compliant, automate operations,
            and secure their assets across Nigeria.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              Contact Us
            </a>

            <a
              href="https://wa.me/2347037819477"
              target="_blank"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            One Partner For Business Growth
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Orbitech Security Company Ltd provides corporate compliance,
            technology solutions and security services to startups, SMEs,
            NGOs, estates and corporate organizations.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="/cac-registration"
              className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-4">
                CAC Registration
              </h3>

              <p className="text-gray-600">
                Business registration, NGO registration, annual returns and
                compliance support.
              </p>
            </a>

            <a
              href="/technology"
              className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-4">
                Technology Solutions
              </h3>

              <p className="text-gray-600">
                Website development, business applications, cloud solutions
                and cybersecurity.
              </p>
            </a>

            <a
              href="/security-services"
              className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-4">
                Security Services
              </h3>

              <p className="text-gray-600">
                Security guards, CCTV installation, access control systems
                and consulting.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Orbitech?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="font-bold text-xl mb-3">
                Fast Delivery
              </h3>

              <p className="text-gray-600">
                Quick processing and efficient project delivery.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="font-bold text-xl mb-3">
                Experienced Team
              </h3>

              <p className="text-gray-600">
                Skilled professionals with years of industry experience.
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-xl">
              <h3 className="font-bold text-xl mb-3">
                Trusted Solutions
              </h3>

              <p className="text-gray-600">
                Reliable support for businesses and organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">
            Ready To Work With Us?
          </h2>

          <p className="mt-4 text-lg">
            Contact us today for professional business, technology and
            security solutions.
          </p>

          <div className="mt-8">
            <a
              href="tel:+2347037819477"
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold"
            >
              Call +2347037819477
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}