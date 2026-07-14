export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-3xl mx-auto">
        <h1 className="font-display text-4xl text-on-surface font-semibold mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-on-surface-variant font-sans">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl text-on-surface font-semibold mt-8">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-xl text-on-surface font-semibold mt-8">2. Educational Purposes Only</h2>
          <p>
            Mission 100 and Gold Clutch Academy provide educational content related to trading. We are not financial advisors. All trading involves risk, and past performance is not indicative of future results. Any capital allocated to trading is at your own risk.
          </p>

          <h2 className="text-xl text-on-surface font-semibold mt-8">3. Waitlist Registration</h2>
          <p>
            By joining our priority waitlist, you agree to receive communications regarding our educational programs. You may opt out at any time.
          </p>

          <h2 className="text-xl text-on-surface font-semibold mt-8">4. Modifications</h2>
          <p>
            We reserve the right to modify these terms at any time. Your continued use of the site after any such changes constitutes your acceptance of the new terms.
          </p>
        </div>
      </div>
    </main>
  );
}
