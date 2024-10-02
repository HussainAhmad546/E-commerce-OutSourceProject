import React from 'react';
import privacyPolicyImage from '../../assets/images/privacy-policy-banner.jpg';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      {/* Banner Section */}
      <header 
        className="bg-cover bg-center h-80" 
        style={{ backgroundImage: `url(${privacyPolicyImage})` }}
      >
        <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Privacy Policy</h1>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-700">
              We are committed to protecting your privacy. This policy outlines how we collect, use, and protect your personal information when you use our platform.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="text-gray-700">
              We collect information that you provide to us directly, such as your name, email address, and payment information. We may also collect information automatically through your use of our platform, such as your IP address and browsing behavior.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700">
              The information we collect is used to provide and improve our services, process transactions, and communicate with you. We may also use your information for marketing and promotional purposes, with your consent.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
            <p className="text-gray-700">
              We do not share your personal information with third parties except as necessary to provide our services (e.g., payment processors) or as required by law.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p className="text-gray-700">
              You have the right to access, update, and delete your personal information. You can also opt out of receiving marketing communications at any time.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be updated accordingly.
            </p>
          </section>

          <p className="text-gray-600 mt-6">
            If you have any questions regarding this policy, please contact us at [privacy@yourwebsite.com].
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
