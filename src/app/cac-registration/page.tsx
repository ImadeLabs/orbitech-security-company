export default function CACRegistrationPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-6">
        CAC Registration Services
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        We assist businesses, NGOs and startups with CAC registration,
        annual returns, business name registration and compliance services.
      </p>

      <ul className="space-y-4 text-lg">
        <li>✓ Business Name Registration</li>
        <li>✓ Limited Liability Company Registration</li>
        <li>✓ NGO Registration</li>
        <li>✓ Annual Returns Filing</li>
        <li>✓ Corporate Compliance Support</li>
      </ul>

      <a
        href="https://wa.me/2347037819477"
        className="inline-block mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Request Registration
      </a>
    </main>
  );
}