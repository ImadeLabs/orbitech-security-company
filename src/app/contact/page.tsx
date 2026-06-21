export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-8">
        Contact Us
      </h1>

      <div className="space-y-6 text-lg">
        <p>
          <strong>Phone:</strong> +2347037819477
        </p>

        <p>
          <strong>Email:</strong> info@orbitechsltd.com
        </p>

        <p>
          <strong>Location:</strong> Abuja, Nigeria
        </p>
      </div>

      <div className="mt-10">
        <a
          href="https://wa.me/2347037819477"
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Chat on WhatsApp
        </a>
      </div>
    </main>
  );
}