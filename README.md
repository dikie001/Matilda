# Brillia 🌟

[![Version](https://img.shields.io/badge/version-2.3.0-blue.svg)](https://brillia-six.vercel.app)
[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.13-38B2AC.svg)](https://tailwindcss.com/)
[![PWA](https://img.shields.io/badge/PWA-Ready-green.svg)](https://web.dev/progressive-web-apps/)
[![Firebase](https://img.shields.io/badge/Firebase-12.6.0-orange.svg)](https://firebase.google.com/)
[![Zustand](https://img.shields.io/badge/Zustand-5.0.8-brown.svg)](https://zustand-demo.pmnd.rs/)

> Your daily companion for inspiration, learning, and fun. Discover Fun Facts, challenge your mind, and grow every day.

[🌐 Live Demo](https://matilda001.vercel.app) | [📱 Install PWA](https://matilda001.vercel.app) | [📧 Contact Developer](mailto:omondidickens255@gmail.com)

---

## ✨ Features

Brillia is a Progressive Web App (PWA) packed with engaging content to boost your knowledge and creativity:

### 🧠 Quick Challenges

Challenge your logical thinking with 90+ puzzles and riddles that sharpen your problem-solving skills.

### 📖 Flash Stories

Enjoy short, inspiring tales across 14 genres (Fantasy, Adventure, Mystery, Drama, Sci-Fi, Horror, Thriller, and more) that deliver powerful messages and spark imagination.

### 🏆 Quick Quiz

Test your general knowledge with fun, interactive quizzes across various topics. Track your progress and view detailed results with charts and analytics.

### 💡 Life Gems

Receive daily doses of wisdom, motivation, and insightful quotes across 10 categories including Motivation, Wisdom, Success, Love, Courage, and more.

### 🗣️ Clear Speech

Improve your pronunciation and fluency with tongue twisters, pronunciation exercises, and communication tips at Easy, Medium, and Hard difficulty levels.

### 🌍 Fun Facts

Discover fascinating, mind-blowing facts about Science, History, Nature, Technology, Space, Culture, and Animals.

### 📚 Word Power

Expand your vocabulary with a comprehensive word learning system. Track your progress and master new words daily.

### 📕 Reading

Access an extensive reading section with curated content for continuous learning and improvement.

### 📊 History & Progress

View your quiz history, track performance over time, and analyze your learning journey with detailed charts powered by Recharts.

### 🔒 Admin Panel

Secure admin dashboard for managing content, viewing analytics, and administering the platform.

### 🔧 Additional Features

- **Offline Support**: Works completely offline once installed - no internet required!
- **PWA Ready**: Install as a native app on your desktop or mobile device
- **Dark Mode**: Toggle between light and dark themes for comfortable reading
- **Responsive Design**: Optimized for all screen sizes - mobile, tablet, and desktop
- **Sound Effects**: Audio feedback for interactions and achievements
- **Progress Tracking**: Keep track of your completed stories, quiz scores, and learning history
- **Firebase Integration**: Cloud-based data persistence and synchronization
- **Smooth Animations**: Powered by Framer Motion for delightful user interactions
- **Contact Form**: Built-in contact form using Formspree for easy communication

---

## 🆕 Recent Updates

### v2.3.0 (Latest)

- **Word Power**: New vocabulary building feature with progress tracking
- **Reading Section**: Extensive reading content for continuous learning
- **History Page**: View and analyze your quiz performance history
- **Firebase Integration**: Cloud sync for test results and user data
- **Enhanced Charts**: Improved analytics with Recharts integration
- **Admin Dashboard**: Secure content management system

### v1.1.8

- **Content Count Display**: Added item count indicators on all content pages (Flash Stories, Quick Challenges, Clear Speech, Life Gems, Fun Facts) showing "Showing X of Y items" for better user experience and navigation awareness.

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or pnpm package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/dikie001/Matilda
   cd Matilda
   ```

2. **Install dependencies**

   ```bash
   # Using npm
   npm install

   # Or using pnpm
   pnpm install
   ```

3. **Start development server**

   ```bash
   # Using npm
   npm run dev

   # Or using pnpm
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see Brillia in action!

### Build for Production

```bash
# Using npm
npm run build

# Or using pnpm
pnpm build
```

The built files will be in the `dist` directory, ready for deployment.

## 🛠️ Tech Stack

Brillia is built with modern web technologies for optimal performance and user experience:

### Frontend Framework

- **React 19** - Latest React with concurrent features
- **TypeScript 5.8** - Type-safe JavaScript for better development experience
- **Vite 7** - Lightning-fast build tool and development server

### Styling & UI

- **Tailwind CSS 4** - Utility-first CSS framework
- **ShadCN/UI** - Beautiful, accessible component library (Radix UI primitives)
- **Lucide React** - Beautiful icon library
- **React Icons** - Additional icon library for variety
- **Framer Motion** - Smooth animations and transitions
- **TW Animate CSS** - Tailwind animation utilities

### State Management & Data

- **Zustand** - Lightweight state management
- **Firebase** - Cloud database and authentication
- **Local Storage** - Client-side data persistence
- **Session Storage** - Temporary session data

### Charts & Visualization

- **Recharts** - Composable charting library for analytics and progress tracking

### Forms & Communication

- **Formspree React** - Contact form integration
- **React Hot Toast** - Elegant toast notifications
- **Sonner** - Modern toast components

### Development Tools

- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

### PWA Features

- **Vite PWA Plugin** - Service worker generation
- **Service Worker** - Offline functionality and caching
- **Web App Manifest** - Native app-like experience
- **Workbox** - Advanced caching strategies

---

## 📁 Project Structure

```
Brillia/
├── public/                    # Static assets & PWA manifest
├── src/
│   ├── assets/               # Images and static files
│   ├── components/
│   │   ├── app/              # App-specific components (Navigation, etc.)
│   │   ├── ui/               # Reusable UI components (Button, Card, etc.)
│   │   └── animation/        # Animation components
│   ├── firebase/             # Firebase configuration
│   ├── hooks/                # Custom React hooks
│   │   ├── useSound.tsx      # Sound effects hook
│   │   ├── useHook.ts        # General utility hooks
│   │   ├── use-mobile.ts     # Mobile detection
│   │   └── useUpdateListener.tsx  # PWA update listener
│   ├── jsons/                # Content data files
│   │   ├── amazingFacts.ts   # Fun facts content
│   │   ├── brainTeaser.ts    # Brain teaser puzzles
│   │   ├── coolQuotes.ts     # Inspirational quotes
│   │   ├── miniStories.ts    # Flash stories content
│   │   ├── quizData.ts       # Quiz questions
│   │   ├── tongueTwisters.ts # Tongue twisters content
│   │   ├── vocabulary.ts     # Word power content
│   │   └── topics.ts         # Quiz topics
│   ├── lib/                  # Utility libraries
│   ├── modals/               # Modal components
│   ├── pages/
│   │   ├── MATILDA/          # Main app pages
│   │   │   ├── HomePage.tsx
│   │   │   ├── QuickQuiz.tsx
│   │   │   ├── FlashStories.tsx
│   │   │   ├── QuickChallenges.tsx
│   │   │   ├── LifeGems.tsx
│   │   │   ├── ClearSpeech.tsx
│   │   │   ├── FunFacts.tsx
│   │   │   ├── WordPower.tsx
│   │   │   ├── Settings.tsx
│   │   │   ├── HistoryPage.tsx
│   │   │   └── Results.tsx
│   │   ├── ADMIN/            # Admin dashboard pages
│   │   ├── SUPPORT/          # Support pages
│   │   └── Reading.tsx       # Reading section
│   ├── utils/                # Utility functions
│   ├── constants.ts          # App constants & configuration
│   ├── types.ts              # TypeScript type definitions
│   ├── App.tsx               # Main app component with routing
│   ├── main.tsx              # App entry point
│   └── index.css             # Global styles
├── components.json           # ShadCN configuration
├── tailwind.config.js        # Tailwind configuration
├── vite.config.ts            # Vite configuration
├── vercel.json               # Vercel deployment config
└── package.json              # Dependencies & scripts
```

---

## 📱 Progressive Web App (PWA)

Brillia is designed as a PWA, offering a native app-like experience in your browser:

### Installation

1. Visit [matilda001.vercel.app](https://matilda001.vercel.app) in a supported browser (Chrome, Edge, Safari)
2. Look for the install prompt or click the install button in the app
3. Follow the browser's installation instructions
4. Brillia will appear as a native app on your device

### Offline Usage

Once installed, Brillia works completely offline:

- All content is cached locally
- No internet connection required after initial load
- Progress and preferences are saved locally

## 🎯 Usage

### Navigation

Use the navigation bar to explore different sections:

- **Home**: Overview of all available features
- **About**: Learn more about the app and developer
- **Settings**: Customize your experience (theme, sound, etc.)
- **Help**: Installation guides and troubleshooting

### Content Sections

Each section offers unique interactive experiences:

- Browse through paginated content
- Use filters to find specific items
- Track your progress and achievements
- Share interesting finds with friends

### Settings

Customize Brillia to your preferences:

- Toggle dark/light mode
- Enable/disable sound effects
- Adjust font sizes for better readability

## 🤝 Contributing

We welcome contributions! Here's how you can help improve Brillia:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-new-feature
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing new feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-new-feature
   ```
7. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Maintain consistent code style with ESLint
- Test on multiple devices and browsers
- Ensure accessibility compliance
- Add proper documentation for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Dickens Omondi**

- Website: [dikie.vercel.app](https://dikie.vercel.app)
- Email: omondidickens255@gmail.com
<!-- - LinkedIn:  -->

Built with ❤️ using modern web technologies. Designed to be fast, accessible, and enjoyable for all users.

## 🙏 Acknowledgments

- Special thanks to the open-source community
- Icons by [Lucide](https://lucide.dev/)
- UI components inspired by [ShadCN](https://ui.shadcn.com/)
- Font and design inspiration from various design systems

---

<div align="center">
  <p>Made with ❤️ by <a href="https://dikie.vercel.app">Dickens Omondi</a></p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
