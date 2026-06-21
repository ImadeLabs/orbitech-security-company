export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="font-bold text-xl mb-4">
              Orbitech Technologies
            </h3>

            <p className="text-slate-300">
              Business Compliance, Technology &
              Security Solutions.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Services
            </h3>

            <ul className="space-y-2 text-slate-300">
              <li>CAC Registration</li>
              <li>Tax Services</li>
              <li>Cybersecurity</li>
              <li>Security Guards</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Contact
            </h3>

            <p>+2347037819477</p>
            <p>info@orbitechsltd.com</p>
            <p>Abuja, Nigeria</p>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-slate-400">
          © 2026 Orbitech Security Company Ltd
        </div>

      </div>
    </footer>
  );
}