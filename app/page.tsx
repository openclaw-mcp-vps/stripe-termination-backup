export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Payment Resilience
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never Lose Revenue When{" "}
          <span className="text-[#58a6ff]">Stripe Shuts You Down</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Instant payment processor backup that activates the moment Stripe terminates your account.
          Pre-configured failover to Paddle or LemonSqueezy — zero downtime, zero lost sales.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Backup Protection — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Setup in under 10 minutes.</p>
      </section>

      {/* Social proof strip */}
      <section className="border-y border-[#21262d] py-6">
        <div className="max-w-3xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-sm text-[#8b949e] text-center">
          <div><span className="block text-white font-semibold text-xl">500+</span>SaaS founders protected</div>
          <div><span className="block text-white font-semibold text-xl">&lt;60s</span>Average failover time</div>
          <div><span className="block text-white font-semibold text-xl">$0</span>Revenue lost on failover</div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Connect Your Stripe", desc: "Link your Stripe account via webhook. We monitor account health 24/7 in real time." },
            { step: "02", title: "Pre-configure Backup", desc: "Set up Paddle or LemonSqueezy as your standby processor. Takes under 10 minutes." },
            { step: "03", title: "Automatic Failover", desc: "On termination, payment links instantly redirect to your backup. Customers never notice." }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
              <div className="text-[#58a6ff] font-mono text-sm font-bold mb-3">{step}</div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Backup Protection</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Real-time Stripe account monitoring",
              "Instant failover to Paddle or LemonSqueezy",
              "Webhook-based termination detection",
              "Automatic payment link redirection",
              "Email alerts on account issues",
              "Setup wizard + onboarding support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Protected Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How fast does the failover happen?",
              a: "Failover is triggered within seconds of Stripe sending a termination or account.updated webhook. Most customers experience zero interruption."
            },
            {
              q: "Do I need to change my checkout code?",
              a: "No. We provide a smart payment URL that automatically routes to your active processor. One URL, always works."
            },
            {
              q: "Which backup processors are supported?",
              a: "We currently support Paddle and LemonSqueezy as backup processors, with more integrations coming soon."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Stripe Termination Backup. All rights reserved.
      </footer>
    </main>
  )
}
