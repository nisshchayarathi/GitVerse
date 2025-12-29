# GitVerse

Transform Git repositories into interactive visual knowledge graphs with AI-powered insights.

## 🚀 Features

- **Repository Structure Visualization** - Interactive tree graphs of entire repository structure
- **Branch & Commit Graph Engine** - Visualize all branches, commits, and merges
- **Contributor Intelligence System** - Visual mapping of contributor activities and patterns
- **AI-Powered Repository Assistant** - Natural language queries powered by GPT-4o
- **Coding Standards Analysis** - Automated analysis of naming conventions and best practices
- **Multi-Platform Support** - Works with GitHub, GitLab, and Bitbucket

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS, Vite
- **Backend:** Supabase (authentication, database, storage)
- **AI:** OpenAI GPT-4o
- **Visualizations:** D3.js (to be integrated in Phase 4)
- **Icons:** Lucide React
- **Routing:** React Router DOM v6

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gitverse
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your API keys:
- Supabase URL and Anon Key
- OpenAI API Key
- GitHub/GitLab/Bitbucket API tokens (optional)

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Project Structure

```
gitverse/
├── src/
│   ├── components/
│   │   ├── layout/          # Layout components (Navbar, Footer, Breadcrumbs)
│   │   └── ui/              # Reusable UI components (Button, Input, Card, Modal, Spinner)
│   ├── context/             # React Context (ThemeContext)
│   ├── pages/               # Page components
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Main app component with routes
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## 🎨 Design System

### Color Palette

- **Primary:** Deep Blue (#1E3A8A) - Professional and trustworthy
- **Secondary:** Slate Gray (#475569) - Neutral and sophisticated  
- **Accent:** Electric Green (#10B981) - Active elements and success states
- **Supporting:** Orange (#F59E0B) for warnings, Red (#EF4444) for errors

### Typography

- **Headings:** Inter
- **Body:** Source Sans Pro
- **Code:** JetBrains Mono

## 🧩 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📋 Implementation Progress

### ✅ Phase 1: Core UI Foundation & Landing Page (COMPLETED)

- [x] Project setup with Vite + React + TypeScript
- [x] Tailwind CSS configuration with custom color palette
- [x] ESLint and Prettier setup
- [x] React Router DOM configuration
- [x] Theme toggle (dark/light mode)
- [x] Reusable component library (Button, Input, Card, Modal, Spinner)
- [x] Navigation components (Navbar, Footer, Breadcrumbs)
- [x] Landing page with hero section
- [x] Repository URL input with validation
- [x] Feature highlights carousel
- [x] Demo video section
- [x] Pricing section
- [x] Authentication pages (Login, Signup)

### 🚧 Phase 2: Authentication & Dashboard (Next)

- [ ] Supabase authentication integration
- [ ] Dashboard layout and UI
- [ ] Repository management features
- [ ] User profile management

### 🚧 Phase 3: Repository Analysis Core Views

- [ ] Repository analysis page structure
- [ ] Structure visualization view
- [ ] Commit history visualization
- [ ] Contributors view

### 🚧 Phase 4: Advanced Visualizations & AI Assistant

- [ ] D3.js integration
- [ ] Advanced graph visualizations
- [ ] AI assistant interface
- [ ] Performance optimization

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- [Documentation](https://docs.gitverse.com) (Coming soon)
- [API Reference](https://api.gitverse.com) (Coming soon)
- [Support](mailto:support@gitverse.com)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
