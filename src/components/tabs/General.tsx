export default function General() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">General Information</h2>

      <div className="space-y-8">
        {/* About Oryx Life Sciences */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-4 text-gray-900">About Oryx Life Sciences</h3>
          <p className="text-gray-700 mb-4">
            Oryx Life Sciences is dedicated to providing innovative solutions in the life sciences industry.
            We are committed to excellence, quality, and customer satisfaction.
          </p>
          <a
            href="https://oryxlifesciences.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Visit Oryx Life Sciences
          </a>
        </div>

        {/* Contact Details */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Contact Details</h3>
          <p className="text-gray-700 mb-4">
            Have questions or need more information? Get in touch with us:
          </p>
          <a
            href="mailto:info@oryxlifesciences.com"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send us an Email
          </a>
        </div>

        {/* Privacy & T&Cs */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Legal</h3>
          <div className="space-y-3">
            <a
              href="/privacy"
              className="block text-blue-600 hover:text-blue-700 font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="block text-blue-600 hover:text-blue-700 font-medium"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
