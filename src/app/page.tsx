export default function Home() {
  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#374151] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <p className="inline-block border border-[#D4AF37] text-[#D4AF37] px-4 py-2 rounded-full text-sm font-semibold">
            Business • Technology • Security
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-8 leading-tight">
            Business Compliance,
            <br />
            Technology &
            <br />
            Security Solutions
          </h1>

          <p className="mt-8 text-xl text-gray-200 max-w-3xl">
            Helping businesses register, stay compliant, automate operations,
            and secure their assets across Nigeria.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-xl font-bold"
            >
              Contact Us
            </a>

            <a
              href="https://wa.me/2347037819477"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-8 py-4 rounded-xl font-bold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-bold text-[#D4AF37]">10+</h3>
              <p className="mt-2 text-gray-700">Years Experience</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#D4AF37]">500+</h3>
              <p className="mt-2 text-gray-700">Projects Completed</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#D4AF37]">100+</h3>
              <p className="mt-2 text-gray-700">Clients Served</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#D4AF37]">24/7</h3>
              <p className="mt-2 text-gray-700">Support</p>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16 text-[#111827]">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                CAC & Compliance
              </h3>

              <p className="text-gray-700">
                Business Registration, NGO Registration,
                Annual Returns, ITF, NSITF and BPP services.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Technology Solutions
              </h3>

              <p className="text-gray-700">
                Software Engineering, Data Engineering,
                Website Development and Cybersecurity.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Security Services
              </h3>

              <p className="text-gray-700">
                Security Guards, CCTV Installation,
                Access Control and Estate Security.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#111827] text-white py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose Orbitech?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#1F2937] p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">
                Fast Delivery
              </h3>

              <p className="text-gray-300">
                Quick processing and reliable project completion.
              </p>
            </div>

            <div className="bg-[#1F2937] p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">
                Professional Team
              </h3>

              <p className="text-gray-300">
                Experienced consultants and engineers.
              </p>
            </div>

            <div className="bg-[#1F2937] p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">
                Trusted Solutions
              </h3>

              <p className="text-gray-300">
                Reliable services for businesses and organizations.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#D4AF37] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold text-black mb-6">
            Ready To Work With Orbitech?
          </h2>

          <p className="text-xl text-black mb-8">
            Contact us today for professional compliance,
            technology and security solutions.
          </p>

          <a
            href="/contact"
            className="bg-[#111827] text-white px-8 py-4 rounded-xl font-bold"
          >
            Schedule Consultation
          </a>

        </div>
      </section>

    </main>
  );
}