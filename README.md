# CryptoQuasar - NFT Portfolio Helper

Modern NFT portfolio tracker and analyzer built with React, TypeScript, and Vite.

## Features

- Interactive NFT portfolio dashboard
- Real-time price tracking and analytics
- Modern UI with responsive design
- TypeScript for type safety
- Fast development with Vite

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-nft
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

**Manual deployment:**
```bash
npm run deploy
```

**Automatic deployment:**
- Push changes to `main` or `master` branch
- GitHub Actions will automatically build and deploy the site

**Configuration:**
- Base path is set to `/my-portfolio/` in `vite.config.ts`
- Homepage URL: `https://hitricky.github.io/my-portfolio/`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **Tailwind CSS** - Utility-first CSS framework

## Project Structure

```
src/
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
├── index.css        # Global styles
└── vite-env.d.ts    # Vite type definitions
```

## License

This project is open source and available under the MIT License.
