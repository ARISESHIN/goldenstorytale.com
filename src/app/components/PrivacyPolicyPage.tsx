import { Shield } from "lucide-react";

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-4 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl flex items-center gap-2">
            <Shield className="w-7 h-7" />
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-300 mt-1">Last updated: March 5, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
          
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Golden Story Tales ("we," "our," or "us"). This Privacy Policy explains how we collect, use, and protect your information when you visit goldenstorytale.com (the "Website").
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Usage Data:</strong> Information about how you use our Website, including pages visited, time spent, and interactions.</li>
              <li><strong>Device Information:</strong> Browser type, IP address, device type, and operating system.</li>
              <li><strong>Cookies:</strong> We use cookies to improve your browsing experience and analyze website traffic.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We use the collected information to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Improve and optimize our Website</li>
              <li>Analyze user behavior and preferences</li>
              <li>Provide relevant content and recommendations</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We work with third-party services that may collect information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Amazon Associates:</strong> We participate in the Amazon Associates Program. When you click on Amazon links, Amazon may collect information about your visit.</li>
              <li><strong>YouTube:</strong> Our Website links to YouTube content. YouTube's privacy policy applies when you interact with embedded videos or links.</li>
              <li><strong>Analytics Services:</strong> We may use analytics tools to understand Website usage patterns.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies to enhance your experience. Cookies are small text files stored on your device. You can control cookies through your browser settings, but disabling them may affect Website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Website is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement reasonable security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              You have the right to access, correct, or delete your information. You may also opt out of certain data collection practices. Contact us if you wish to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us through our YouTube channel:{" "}
              <a 
                href="https://www.youtube.com/@Goldenstory-fw2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Golden Story Tales
              </a>
            </p>
          </section>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 italic">
              This privacy policy is provided for informational purposes and complies with Amazon Associates Program requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
