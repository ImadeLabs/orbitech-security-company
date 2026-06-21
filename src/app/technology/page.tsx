export default function TechnologyPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-6">
        Technology Solutions
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        Software engineering, data engineering and cybersecurity solutions.
      </p>

      <ul className="space-y-4 text-lg">
        <li>✓ Website Development</li>
        <li>✓ Business Applications</li>
        <li>✓ Data Engineering</li>
        <li>✓ Cybersecurity Consulting</li>
        <li>✓ Cloud Solutions</li>
      </ul>

      <a
        href="https://wa.me/2347037819477"
        className="inline-block mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Discuss Your Project
      </a>
    </main>
  );
}