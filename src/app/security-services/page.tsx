export default function SecurityServicesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-6">
        Security Services
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        Professional security services for businesses, estates and organizations.
      </p>

      <ul className="space-y-4 text-lg">
        <li>✓ Security Guard Services</li>
        <li>✓ CCTV Installation</li>
        <li>✓ Access Control Systems</li>
        <li>✓ Estate Security</li>
        <li>✓ Security Consulting</li>
      </ul>

      <a
        href="https://wa.me/2347037819477"
        className="inline-block mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Request Security Services
      </a>
    </main>
  );
}