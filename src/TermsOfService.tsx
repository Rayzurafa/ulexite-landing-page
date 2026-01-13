import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/logovitter_(1).png" alt="Ulexite" className="h-6 sm:h-8 w-auto" />
          </Link>
          <Link to="/" className="bg-[#8fff00] text-black px-4 sm:px-6 py-2 text-sm sm:text-base rounded-md font-semibold hover:bg-[#7ae600] transition-all">
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Terms of Service</h1>
            <p className="text-sm sm:text-base text-gray-500">Last updated: January 13, 2026</p>
          </div>

          <div className="space-y-6 sm:space-y-12 text-sm sm:text-base text-gray-300 leading-relaxed">
            <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-[#8fff00]/20 transition-all">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Agreement to Terms</h2>
              <p>
                By accessing or using Ulexite's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
              </p>
            </section>

            <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-[#8fff00]/20 transition-all">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Use of Services</h2>
              <p className="mb-3 sm:mb-4">When using our services, you agree to:</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span>Provide accurate, current, and complete information during booking consultations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span>Maintain the confidentiality of any account credentials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span>Use our services only for lawful purposes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span>Not interfere with or disrupt our services or servers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span>Not attempt to gain unauthorized access to any portion of our services</span>
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-[#8fff00]/20 transition-all">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Consultation Bookings</h2>
              <p className="mb-3 sm:mb-4">
                When you book a consultation through our website:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span>You will receive a confirmation email with appointment details</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span>Consultations are free and provided for informational purposes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span>You may cancel or reschedule by contacting us at least 24 hours in advance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span>We reserve the right to cancel or reschedule appointments if necessary</span>
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-[#8fff00]/20 transition-all">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Services and Solutions</h2>
              <p>
                The AI solutions and services we provide are custom-built for each client. Specific terms, pricing, deliverables, and timelines will be outlined in separate service agreements. These Terms of Service govern your use of our website and general interactions with Ulexite.
              </p>
            </section>

            <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-[#8fff00]/20 transition-all">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, images, and software, is the property of Ulexite and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
              </p>
            </section>

            <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-[#8fff00]/20 transition-all">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Disclaimer of Warranties</h2>
              <p>
                Our website and services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, error-free, or secure. While we strive for accuracy, we make no warranties about the completeness or reliability of information on our website.
              </p>
            </section>

            <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-[#8fff00]/20 transition-all">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Ulexite shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability shall not exceed the amount paid by you, if any, for accessing our services.
              </p>
            </section>

            <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-[#8fff00]/20 transition-all">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Indemnification</h2>
              <p>
                You agree to indemnify and hold Ulexite harmless from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your violation of these Terms of Service or your use of our services.
              </p>
            </section>

            <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-[#8fff00]/20 transition-all">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Privacy</h2>
              <p>
                Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
              </p>
            </section>

            <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-[#8fff00]/20 transition-all">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of our services after changes are posted constitutes your acceptance of the modified terms.
              </p>
            </section>

            <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-[#8fff00]/20 transition-all">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Termination</h2>
              <p>
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms of Service.
              </p>
            </section>

            <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-[#8fff00]/20 transition-all">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
              </p>
            </section>

            <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-[#8fff00]/20 transition-all">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Contact Information</h2>
              <p className="mb-3 sm:mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-black/30 rounded-lg p-3 sm:p-4 border border-[#8fff00]/20">
                <p className="flex items-center gap-2 text-sm sm:text-base">
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-[#8fff00] flex-shrink-0" />
                  <span className="text-white break-all">hello@ulexiteai.com</span>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 sm:py-12 px-4 sm:px-6 bg-gradient-to-b from-black to-black/95">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-8">
            {/* Logo */}
            <div className="flex items-center md:w-1/3">
              <img src="/logovitter_(1).png" alt="Ulexite" className="h-7 sm:h-9 w-auto opacity-90 hover:opacity-100 transition-opacity" />
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-xs sm:text-sm md:w-1/3 text-center">
              © 2026 Ulexite. All rights reserved.
            </div>

            {/* Policy Links */}
            <div className="flex gap-4 sm:gap-6 md:w-1/3 justify-center md:justify-end">
              <Link 
                to="/privacy-policy" 
                className="text-gray-400 hover:text-[#8fff00] transition-all text-sm relative group"
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8fff00] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <span className="text-gray-700">|</span>
              <Link 
                to="/terms-of-service" 
                className="text-gray-400 hover:text-[#8fff00] transition-all text-sm relative group"
              >
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8fff00] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default TermsOfService;
