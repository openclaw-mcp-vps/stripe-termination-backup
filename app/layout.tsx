import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Termination Backup — Instant Payment Processor Failover',
  description: 'Pre-configured backup payment processing that activates when Stripe terminates your account. Instant failover to Paddle or LemonSqueezy.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="42b1045a-f843-4ef1-8078-f9844c4588f0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
