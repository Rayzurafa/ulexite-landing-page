import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
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
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Privacy Policy</h1>
            <p className="text-sm sm:text-base text-gray-500">Last updated: January 13, 2026</p>
          </div>

          <div className="space-y-6 sm:space-y-12 text-sm sm:text-base text-gray-300 leading-relaxed">
            <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-[#8fff00]/20 transition-all">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Introduction</h2>
              <p>
                At Ulexite ("we", "us", or "our"), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-[#8fff00]/20 transition-all">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Information We Collect</h2>
              <p className="mb-3 sm:mb-4">When you book a consultation with us, we collect the following information:</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span><strong className="text-white">Full Name:</strong> To identify you and personalize our communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span><strong className="text-white">Company Name:</strong> To understand your business context</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span><strong className="text-white">Email Address:</strong> To send you booking confirmations and communicate with you</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span><strong className="text-white">Preferred Date and Time:</strong> To schedule your consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span><strong className="text-white">Optional Message:</strong> Any additional information you choose to share about your needs</span>
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-[#8fff00]/20 transition-all">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">How We Use Your Information</h2>
              <p className="mb-3 sm:mb-4">We use the information we collect to:</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span>Schedule and confirm your consultation appointments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span>Send you calendar invites and meeting reminders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span>Prepare for our conversations by understanding your business needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span>Follow up with you regarding our services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span>Improve our services and website functionality</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span>Comply with legal obligations</span>
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-[#8fff00]/20 transition-all">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Data Storage and Security</h2>
              <p>
                We take data security seriously. Your information is stored securely and is only accessible to authorized personnel who need it to provide our services. We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-[#8fff00]/20 transition-all">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Data Sharing</h2>
              <p className="mb-3 sm:mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span>With service providers who assist us in operating our website and conducting our business (e.g., email services, calendar tools)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span>When required by law or to protect our rights</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span>With your explicit consent</span>
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-[#8fff00]/20 transition-all">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Your Rights</h2>
              <p className="mb-3 sm:mb-4">You have the right to:</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span>Access the personal data we hold about you</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span>Request correction of inaccurate data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span>Request deletion of your data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span>Object to processing of your data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8fff00] mt-1">→</span>
                  <span>Withdraw consent at any time</span>
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-[#8fff00]/20 transition-all">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Cookies and Tracking</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance user experience. These help us understand how visitors interact with our site and improve our services. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-[#8fff00]/20 transition-all">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law. Once your data is no longer needed, we will securely delete or anonymize it.
              </p>
            </section>

            <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-[#8fff00]/20 transition-all">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the new policy on this page with an updated "Last updated" date.
              </p>
            </section>

            <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-[#8fff00]/20 transition-all">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Contact Us</h2>
              <p className="mb-3 sm:mb-4">
                If you have any questions about this privacy policy or how we handle your data, please contact us at:
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

export default PrivacyPolicy;
