const PrivacyPolicy = () => (
  <div className="text-white">
    <div className="max-w-6xl mx-auto">
      <div className="space-y-6">
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C] mb-3">Privacy Policy</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">How veilNet protects your privacy</h2>
          <p className="mt-4 text-gray-400 leading-7">
            veilNet is built around privacy-first design. We do not ask for your name, email, phone number, or password to use the service. Your identity is created locally on your device and protected by your 12-word mnemonic seed phrase.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-xl font-bold text-white mb-3">What we do not collect</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• No email addresses</li>
              <li>• No phone numbers</li>
              <li>• No passwords</li>
              <li>• No personal profile data</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-xl font-bold text-white mb-3">What is stored</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Encrypted payloads only (ciphertext)</li>
              <li>• No readable user data on our servers</li>
              <li>• Keys are derived locally from your mnemonic</li>
              <li>• Metadata is minimized and not linked to identities</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
          <h3 className="text-xl font-bold text-white mb-3">Security and contact</h3>
          <p className="text-gray-300 leading-7">
            veilNet uses AES-256-GCM encryption and zero-knowledge server architecture. Messages and masks are designed so our infrastructure cannot read your private data. If you have questions or concerns, email us at <a href="mailto:apafieldtech@gmail.com" className="text-[#C9A84C] hover:underline">apafieldtech@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
