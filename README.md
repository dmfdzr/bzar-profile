# bzar.profile

An interactive, console-themed personal portfolio built for **Dimas Abidzar Fadly**—an Application Support Engineer with a strong foundation in web architecture and operational stability.

The portfolio is designed as an interactive frontend console with swipe-based navigation, bilingual support (English & Indonesian), and an integrated ATS-friendly PDF CV generator.

## Features

- **Interactive Console UI**: A terminal-inspired aesthetic with dynamic grid backgrounds, glitch text effects, and a custom section indicator (`$ command`).
- **Swipe & Touch Navigation**: Navigate between sections seamlessly via mouse swipe or touch gestures on mobile devices.
- **Bilingual Interface**: Toggle between English (EN) and Indonesian (ID) instantly without page reloads.
- **Custom PDF CV Generator**: Includes a Node.js script (`generate-ats-cv.mjs`) that builds a raw, ATS-friendly PDF CV perfectly synced with the portfolio's content—without relying on heavy third-party PDF libraries!
- **Dark Mode Support**: Automatically responds to system preferences and includes a toggle button.
- **Next.js 15 (App Router)**: Fast, server-rendered React framework optimized for performance.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **PDF Generation**: Native Node.js stream commands via `generate-ats-cv.mjs`

## Getting Started

### Prerequisites

Ensure you have Node.js (version 18+) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dmfdzr/bzar-profile.git
   cd bzar-profile
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the profile.

## Generating the ATS CV

The repository includes a custom script to generate an ATS-friendly PDF version of the CV directly into the `public` folder. This ensures the downloadable CV on the website is always up to date with the latest profile information.

Run the generator script:
```bash
node scripts/generate-ats-cv.mjs
```
This will output or overwrite `public/dimas-abidzar-fadly-ats-cv.pdf`.

## Project Structure

- `app/`: Next.js App Router entry points, layout, and global CSS.
- `components/`: React components (UI elements, sections like intro, works, skills).
- `public/`: Static assets including the auto-generated PDF CV.
- `scripts/`: Node.js utility scripts (PDF generator).

## Deployment

This Next.js app is optimized for standard deployment on platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

```bash
npm run build
npm run start
```

## Contact

- **Email**: dimasfadly01@gmail.com
- **Live Profile**: [https://bzarhere.my.id](https://bzarhere.my.id)
