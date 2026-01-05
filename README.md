# Ankit Chakraborty - Portfolio Website

A modern, production-grade portfolio website built with Next.js 14, TypeScript, and TailwindCSS featuring a sleek dark theme, smooth animations, and responsive design.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## ✨ Features

- 🎨 Modern dark UI with gradient accents
- 📱 Fully responsive (mobile-first design)
- ⚡ Server Components for optimal performance
- 🎭 Smooth animations and transitions
- 🧭 Sticky navigation with mobile hamburger menu
- 📄 Multiple pages: Home, About, Experience, Skills, Projects, Contact
- 🎯 SEO optimized with metadata
- 🔥 Production-ready and deployment-ready

## 📁 Project Structure

```
ankit-chakraborty-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── experience/
│   │   └── page.tsx        # Experience page
│   ├── skills/
│   │   └── page.tsx        # Skills page
│   ├── projects/
│   │   └── page.tsx        # Projects page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section
│   ├── SectionHeader.tsx   # Reusable section header
│   ├── ExperienceCard.tsx  # Experience card component
│   ├── ProjectCard.tsx     # Project card component
│   ├── SkillCard.tsx       # Skill card component
│   ├── ContactForm.tsx     # Contact form
│   └── Container.tsx       # Container helper
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🛠️ Local Setup

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation Steps

1. **Install Dependencies**

```powershell
cd d:\mywebpage
npm install
```

2. **Run Development Server**

```powershell
npm run dev
```

3. **Open in Browser**

Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**

```powershell
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. **Deploy on Vercel**

- Go to [vercel.com](https://vercel.com)
- Sign in with GitHub
- Click "New Project"
- Import your repository
- Click "Deploy"

Vercel will automatically detect Next.js and configure everything!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**

```powershell
npm install -g vercel
```

2. **Login to Vercel**

```powershell
vercel login
```

3. **Deploy**

```powershell
vercel
```

Follow the prompts, and your site will be live!

## 🎨 Customization

### Update Colors

Edit [tailwind.config.ts](tailwind.config.ts) to change the color scheme:

```typescript
colors: {
  primary: {
    500: '#0ea5e9',  // Change this
    600: '#0284c7',  // And this
  },
}
```

### Add New Pages

1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. Add the route to [components/Navbar.tsx](components/Navbar.tsx)

### Modify Content

All content is directly in the page components. Simply edit the text in:
- [app/page.tsx](app/page.tsx) - Home page content
- [app/about/page.tsx](app/about/page.tsx) - About content
- [app/experience/page.tsx](app/experience/page.tsx) - Experience details
- [app/projects/page.tsx](app/projects/page.tsx) - Project listings
- And so on...

## 📦 Dependencies

### Production Dependencies
- `react` & `react-dom` - React library
- `next` - Next.js framework
- `framer-motion` - Animation library
- `lucide-react` - Icon library

### Dev Dependencies
- `typescript` - TypeScript support
- `tailwindcss` - Utility-first CSS
- `@tailwindcss/typography` - Typography plugin
- `@tailwindcss/forms` - Form styling plugin
- `autoprefixer` & `postcss` - CSS processing
- `eslint` - Linting

## 🔧 Configuration Files

- **next.config.js** - Next.js configuration
- **tailwind.config.ts** - TailwindCSS configuration
- **tsconfig.json** - TypeScript configuration
- **postcss.config.js** - PostCSS configuration

## 📝 Environment Variables

No environment variables required for basic deployment. Add `.env.local` if you need:

```
# Example
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 🚀 Performance

- ✅ Server Components for optimal performance
- ✅ Automatic code splitting
- ✅ Image optimization (when images added)
- ✅ CSS purging in production
- ✅ Minimized bundle size

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 SEO

All pages include:
- Meta titles and descriptions
- OpenGraph tags
- Twitter card metadata
- Semantic HTML structure

## 🤝 Contact

**Ankit Chakraborty**
- Email: ankit.bcrec.23@gmail.com
- Phone: +91 9674711110
- Location: Bengaluru, India

## 📄 License

This project is open source and available for personal use.

---

Built with ❤️ using Next.js 14 and TailwindCSS
