export default function Home() {
  const pillars = [
    {
      title: "Corporate Compliance",
      description:
        "CAC Registration, Tax Services, ITF, NSITF and BPP registration support.",
    },
    {
      title: "Technology Solutions",
      description:
        "Software Engineering, Data Engineering, Automation and Cybersecurity.",
    },
    {
      title: "Security Services",
      description:
        "Security Guards, CCTV Installation and Access Control Solutions.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <h1 className="font-bold text-xl text-slate-900">
            Orbitech Security Company Ltd
          </h1>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
            <a href="#" className="hover:text-blue-600">
              Services
            </a>
            <a href="#" className="hover:text-blue-600">
              About
            </a>
            <a href="#" className="hover:text-blue-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="max-w-4xl">
            <span className="text-blue-400 font-medium">
              Business • Technology • Security
            </span>

            <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
              Business Compliance,
              <br />
              Technology &
              <br />
              Security Solutions
            </h1>

            <p className="mt-8 text-xl text-slate-300 max-w-2xl">
              Helping businesses register, stay compliant, automate operations,
              and secure their assets across Nigeria.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="tel:+2347037819477"
                className="bg-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/2347037819477"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-600 px-6 py-3 rounded-lg hover:bg-slate-800"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            One Partner For Business Growth
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Orbitech Security Company Ltd provides corporate compliance,
            technology solutions and security services to startups, SMEs, NGOs,
            estates and corporate organizations across Nigeria.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Our Core Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl p-8 border shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold mb-4">
                  {pillar.title}
                </h3>

                <p className="text-gray-600">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-3xl font-bold">
                Fast Delivery
              </h3>
              <p className="mt-4 text-gray-600">
                Quick processing and reliable support.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">
                Professional Team
              </h3>
              <p className="mt-4 text-gray-600">
                Experienced consultants and technology experts.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">
                Trusted Solutions
              </h3>
              <p className="mt-4 text-gray-600">
                Helping organizations remain compliant and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-blue-600 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready To Work With Orbitech?
          </h2>

          <p className="text-xl mb-6">
            Let's discuss your compliance, technology, or security needs.
          </p>

          <p className="text-2xl font-bold">
            +234 703 781 9477
          </p>

          <p className="mt-2">
            info@orbitechsltd.com
          </p>

          <div className="mt-8">
            <a
              href="https://wa.me/2347037819477"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>
            © 2026 Orbitech Security Company Ltd. All Rights Reserved.
          </p>

          <p className="mt-2 text-slate-400">
            Business Compliance • Technology Solutions • Security Services
          </p>
        </div>
      </footer>
    </main>
  );
}