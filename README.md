# Better OnlineKhabar

A modern React Native mobile app for reading OnlineKhabar news with enhanced reading experience.

## Features

- 📰 Latest news feed with pull-to-refresh
- 🔥 Popular news section
- 🤖 AI-generated summaries for quick reading
- 📱 Clean, optimized modern UI
- 🎨 Beautiful typography

## Tech Stack

- **Framework**: Expo + React Native
- **Navigation**: Expo Router
- **Styling**: NativeWind (TailwindCSS)
- **Data Fetching**: TanStack Query (React Query)
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios
```

## Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run on web browser
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix linting issues

## Project Structure

```
├── app/                    # App screens and routes
│   ├── (tabs)/            # Tab-based navigation
│   │   ├── index.tsx      # Latest news screen
│   │   └── popular.tsx    # Popular news screen
│   └── news-detail.tsx    # News detail screen
├── components/            # Reusable components
│   ├── shared/           # Shared components
│   └── ui/               # UI components
├── queries/              # React Query hooks
├── types/                # TypeScript type definitions
├── providers/            # Context providers
└── styles/               # Global styles
```

---

Made with ❤️ for better Nepali news reading experience
