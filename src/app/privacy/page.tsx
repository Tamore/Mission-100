export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-3xl mx-auto">
        <h1 className="font-display text-4xl text-on-surface font-semibold mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-on-surface-variant font-sans">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl text-on-surface font-semibold mt-8">1. Information We Collect</h2>
          <p>
            When you join our waitlist, we collect your name, email address, and optionally your phone number. We use this information solely to notify you about Mission 100 updates and Gold Clutch Academy admissions.
          </p>

          <h2 className="text-xl text-on-surface font-semibold mt-8">2. How We Use Your Information</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. Your data is stored securely and used exclusively for internal communication and waitlist management.
          </p>

          <h2 className="text-xl text-on-surface font-semibold mt-8">3. Cookies</h2>
          <p>
            We use cookies to understand how you interact with our website and to improve your experience. You can choose to disable cookies through your browser settings.
          </p>

          <h2 className="text-xl text-on-surface font-semibold mt-8">4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us.
          </p>
        </div>
      </div>
    </main>
  );
}
