export default function Home() {
  const services = [
    {
      title: "Corporate Compliance",
      items: [
        "CAC Registration",
        "Tax Services",
        "ITF Registration",
        "NSITF Registration",
        "BPP Registration",
      ],
    },
    {
      title: "Technology Solutions",
      items: [
        "Software Development",
        "Data Engineering",
        "Cybersecurity",
        "Automation Solutions",
        "IT Consulting",
      ],
    },
    {
      title: "Security Services",
      items: [
        "Security Guards",
        "CCTV Installation",
        "Access Control Systems",
        "Estate Security",
        "Surveillance Solutions",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="sticky top-0 bg-white border-b z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div>
            <h1 className="font-bold text-2xl text-slate-900">
              Orbitech Technologies
            </h1>
            <p className="text-xs text-gray-500">
              A Division of Orbitech Security Company Ltd
            </p>
          </div>

          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="bg-slate-950 text-white py-28"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <span className="text-blue-400 font-medium">
              Business • Technology • Security
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-6">
              Business Registration,
              <br />
              Technology &
              <br />
              Security Services
            </h1>

            <p className="text-xl text-slate-300 mt-8 max-w-3xl">
              CAC Registration, Tax Compliance, ITF, NSITF, BPP,
              Software Development, Cybersecurity and Security
              Services for startups, SMEs, NGOs and corporate
              organizations across Nigeria.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="tel:+2347037819477"
                className="bg-blue-600 px-6 py-4 rounded-lg font-semibold"
              >
                Call +2347037819477
              </a>

              <a
                href="https://wa.me/2347037819477"
                target="_blank"
                className="border border-slate-600 px-6 py-4 rounded-lg"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            One Partner For Business Growth
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            We help businesses stay compliant, build technology
            solutions and protect their people and assets. Our
            services cover corporate registration, tax compliance,
            software engineering, cybersecurity and professional
            security services.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="bg-gray-50 py-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Our Core Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold mb-6">
                  {service.title}
                </h3>

                <ul className="space-y-3 text-gray-600">
                  {service.items.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick processing of registrations,
                documentation and technology projects.
              </p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Experienced Team
              </h3>
              <p className="text-gray-600">
                Business consultants, engineers and
                security professionals working together.
              </p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Trusted Solutions
              </h3>
              <p className="text-gray-600">
                Reliable support for organizations,
                estates, SMEs and government contractors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-blue-600 text-white py-24"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Contact Orbitech Today
          </h2>

          <div className="space-y-3 text-lg">
            <p>📞 +2347037819477</p>
            <p>📍 Abuja, Nigeria</p>
            <p>📧 info@orbitechsltd.com</p>
          </div>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <a
              href="tel:+2347037819477"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold"
            >
              Call Now
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

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>
            © 2026 Orbitech Technologies. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/2347037819477"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg font-semibold"
      >
        WhatsApp
      </a>
    </main>
  );
}