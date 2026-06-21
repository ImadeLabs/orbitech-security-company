export default function TaxServicesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-6">
        Tax & Compliance Services
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        Professional tax advisory and compliance services for businesses.
      </p>

      <ul className="space-y-4 text-lg">
        <li>✓ Tax Identification Number (TIN)</li>
        <li>✓ Tax Clearance Certificate</li>
        <li>✓ VAT Registration</li>
        <li>✓ PAYE Support</li>
        <li>✓ Tax Compliance Advisory</li>
      </ul>

      <a
        href="https://wa.me/2347037819477"
        className="inline-block mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Contact Us
      </a>
    </main>
  );
}