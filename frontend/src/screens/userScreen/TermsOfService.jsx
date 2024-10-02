import React from 'react';
import termsOfServiceImage from '../../assets//images/terms-of-service.jpg'

const TermsOfService = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      {/* Banner Section */}
      <header className="bg-cover bg-center h-80" style={{ backgroundImage: `url(${termsOfServiceImage})` }}>
        <div className="h-full bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Terms of Service</h1>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using our platform, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, you should not use this website.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">2. Modifications to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these Terms of Service at any time. Any changes will be posted on this page, and your continued use of the platform constitutes acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">3. Use of the Platform</h2>
            <p className="text-gray-700">
              You are responsible for your own use of the platform and must comply with all applicable laws and regulations. You may not use the platform to engage in unlawful activities or to infringe the rights of others.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">4. Termination</h2>
            <p className="text-gray-700">
              We reserve the right to terminate or suspend your account and access to the platform at any time, for any reason, without prior notice or liability.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">5. Disclaimer of Warranties</h2>
            <p className="text-gray-700">
              The platform is provided on an "as-is" and "as-available" basis. We disclaim all warranties, whether express or implied, including the warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700">
              In no event shall we be liable for any damages arising out of or in connection with your use of the platform, including but not limited to direct, indirect, incidental, or consequential damages.
            </p>
          </section>

          <p className="text-gray-600 mt-6">
            If you have any questions regarding these terms, please contact us at [support@yourwebsite.com].
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
