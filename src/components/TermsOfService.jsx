const TermsOfService = () => (
  <section id="terms" className="py-24 px-6 md:px-16 border-t border-white/5 bg-[#0A0A0C] text-white">
    <div className="max-w-6xl mx-auto">
      <div className="space-y-6">
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C] mb-3">Terms of Service</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Using veilNet responsibly</h2>
          <p className="mt-4 text-gray-400 leading-7">
            veilNet is provided as a privacy-first social experience. By using this site and our application, you agree to use the service lawfully and do not violate the rights of others.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-xl font-bold text-white mb-3">Your responsibilities</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Keep your 12-word seed phrase safe.</li>
              <li>• Do not share your mnemonic with others.</li>
              <li>• Use the platform in compliance with applicable law.</li>
              <li>• Do not attempt to access or disrupt other users.</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-xl font-bold text-white mb-3">Service limitations</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• veilNet is provided "as-is" without warranty.</li>
              <li>• We are not liable for data loss from lost mnemonics.</li>
              <li>• The platform may change over time.</li>
              <li>• We may update these terms and notify users here.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
          <h3 className="text-xl font-bold text-white mb-3">Contact and updates</h3>
          <p className="text-gray-300 leading-7">
            For support, privacy questions, or to report abuse, contact us at <a href="mailto:apafieldtech@gmail.com" className="text-[#C9A84C] hover:underline">apafieldtech@gmail.com</a>. We may revise these terms when the product evolves, and the latest version will always be available on this page.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default TermsOfService;
