# Mission 100 | Trading Terminal

> 🚧 **Work In Progress**: This project is currently in active production/development. Some links (like the Google Forms waitlist) may be placeholders until final launch.

An institutional-grade landing page and dashboard built to document the public trading challenge of turning $100 into $1,000,000. Designed with a premium, dark-mode aesthetic featuring dynamic glassmorphism, responsive data visualization, and seamless mobile pacing.

## 🚀 Features

- **Equity Curve Terminal**: A custom, responsive dashboard widget displaying live trading metrics (Win Rate, Max Drawdown, Active Session Time) using smooth SVG graph integration.
- **Mobile-First Carousel**: Student Results and testimonials optimized into a native, swipeable horizontal carousel for mobile devices, falling back to a clean grid on desktop.
- **Live Video Integration**: Dedicated section to seamlessly direct users to live YouTube trading sessions with custom, high-fidelity play overlays.
- **Priority Waitlist**: Optimized lead-capture flow linked to external Google Forms to eliminate backend complexity and database overhead.
- **Premium Aesthetics**: Next-generation UI utilizing Framer Motion for scroll-triggered micro-animations, custom tokens, and a dynamically generated favicon (`next/og`).

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: TypeScript

## 💻 Getting Started

First, install the dependencies:
```bash
npm install
```

Then, run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the live site.

## ⚙️ Configuration

To update waitlist links, social links, or live status dates, modify the configuration object inside:
`src/config/site.ts`
