# Portfolio Website

A modern, responsive portfolio website showcasing my work as a Data Scientist, ML Engineer, and AI Specialist. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Sections**:
  - Hero section with profile picture and introduction
  - About section with education and skills
  - Experience timeline
  - Featured projects with GitHub links
  - Skills showcase
  - Contact information
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Dark Mode Ready**: Built with theme support using next-themes

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/BalaMeghanaShivani/my-digital-showcase.git
cd my-digital-showcase
```

2. Install dependencies:
```bash
npm install
```

3. Add your assets:
   - Place your profile picture in `public/profile-picture.jpg`
   - Place your resume PDF in `public/Bala_Shivani_Resume.pdf`

## 🚀 Usage

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:8080` (or the port shown in the terminal).

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check for code issues:

```bash
npm run lint
```

## 📁 Project Structure

```
my-digital-showcase/
├── public/                 # Static assets
│   ├── profile-picture.jpg # Profile picture
│   ├── Bala_Shivani_Resume.pdf # Resume PDF
│   └── robots.txt
├── src/
│   ├── components/         # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── ui/            # shadcn/ui components
│   ├── pages/             # Page components
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section**: Edit `src/components/Hero.tsx`
   - Update name, title, and description
   - Modify profile picture path if needed

2. **About Section**: Edit `src/components/About.tsx`
   - Update education details
   - Modify location and seeking roles
   - Update tech stack

3. **Experience**: Edit `src/components/Experience.tsx`
   - Add or modify work experience entries

4. **Projects**: Edit `src/components/Projects.tsx`
   - Add or update project information
   - Update GitHub links

5. **Skills**: Edit `src/components/Skills.tsx`
   - Update skill categories and technologies

6. **Contact**: Edit `src/components/Contact.tsx`
   - Update email and social media links

### Styling

- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.ts`
- Component-specific styles: Inline Tailwind classes in components

## 🌐 Deployment

This portfolio can be deployed to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the dist folder to Netlify
```

### GitHub Pages
1. Update `vite.config.ts` with your repository name
2. Build the project: `npm run build`
3. Deploy the `dist` folder to GitHub Pages

## 📝 License

This project is open source and available under the MIT License.

## 📧 Contact

- **Email**: balashivani30@gmail.com
- **GitHub**: [@BalaMeghanaShivani](https://github.com/BalaMeghanaShivani)
- **LinkedIn**: [Bala Meghana Shivani](https://www.linkedin.com/in/bala-meghana-shivani)

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

Made with ❤️ by Shivani
