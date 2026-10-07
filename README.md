# Katreddy Lakshmi Kameswari — Futuristic AI & ML Portfolio

A premium, modular portfolio website engineered with **React**, **Vite**, **Tailwind CSS**, and modern JavaScript animation systems. Designed specifically for an aspiring **AI & ML Engineer and Web Developer**, featuring an elegant dark cosmic aesthetic, glassmorphism, floating cards, subtle space nebula and comet effects, and component isolation.

---

## 🌟 Key Highlights & Design System

- **Modular Component Isolation**: Every major section lives in its own folder with dedicated JSX and CSS.
- **Centralized Data Hub**: Modify `src/data/portfolioData.js` to update all portfolio content without touching components.
- **Dedicated Theme Engine**: Customize colors, glows, blur strengths, and typography in `src/styles/theme.css`.
- **Zero-Pill Typography Discipline**: Clean editorial typography and unboxed metadata for a recruiter-grade presentation.
- **Performance Optimized**: Silky 60fps canvas space background that automatically pauses when the browser tab is hidden and respects `prefers-reduced-motion`.
- **GitHub & GitHub Pages Ready**: Ready to build (`npm run build`) and deploy directly to GitHub Pages or Vercel/Netlify.

---

## 🛠️ Technology Stack

- **Core**: React 19, JavaScript / TypeScript, Vite
- **Styling**: Tailwind CSS, CSS Custom Properties (Variables), Glassmorphism
- **Icons**: Lucide React
- **Animations**: CSS Keyframes, Canvas 2D Particles, Intersection Observer

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── assets/
│       ├── profile.jpg                  # Primary profile portrait
│       ├── resume.pdf                   # Downloadable resume
│       └── project-images/              # Project visual previews
│           ├── chat-app.jpg
│           ├── landing-page.jpg
│           └── python-tools.jpg
│
├── src/
│   ├── components/
│   │   ├── Navbar/                      # Glass top navigation bar
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Hero/                        # Editorial headline, portrait orbit, floating cards
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── About/                       # Bento grid narrative & academic metrics
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Skills/                      # Animated proficiency indicators
│   │   │   ├── Skills.jsx
│   │   │   └── Skills.css
│   │   ├── Experience/                  # Futuristic vertical timeline
│   │   │   ├── Experience.jsx
│   │   │   └── Experience.css
│   │   ├── Projects/                    # Touch-friendly carousel slider with preview
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.css
│   │   ├── Education/                   # Academic credentials & career trajectory
│   │   │   ├── Education.jsx
│   │   │   └── Education.css
│   │   ├── Contact/                     # Interactive contact card with email copy
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   ├── Background/                  # Canvas stars, comets, and nebula glows
│   │   │   ├── SpaceBackground.jsx
│   │   │   └── SpaceBackground.css
│   │   └── Footer/                      # Clean footer with back-to-top button
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   │
│   ├── styles/
│   │   ├── theme.css                    # CSS variables (colors, glow, fonts, borders)
│   │   ├── ui.css                       # Reusable UI patterns (buttons, cards, badges)
│   │   ├── animations.css               # Keyframes & motion classes
│   │   ├── responsive.css               # Media queries for tablet & mobile
│   │   └── globals.css                  # Core CSS imports & typography resets
│   │
│   ├── data/
│   │   └── portfolioData.js             # Central editable data file
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── package.json
├── vite.config.ts
├── index.html
├── README.md
└── .gitignore
```

---

## 🚀 How to Install & Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/Lakshmi-Kameswari/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port specified in terminal).

### 4. Build for production
```bash
npm run build
```
The optimized static build will be output to the `dist/` directory.

---

## 🌐 Deploying to GitHub Pages

1. In `vite.config.ts`, set the base path if your repository is `username.github.io/repository-name`:
   ```ts
   export default defineConfig({
     base: '/repository-name/', // or './' for relative paths
     // ...
   });
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy using `gh-pages` or GitHub Actions:
   - Go to your repository settings on GitHub -> **Pages**.
   - Under **Build and deployment**, select **GitHub Actions** (or deploy from branch `gh-pages` / folder `dist`).

---

## ✏️ How to Customize Your Portfolio

### 1. Edit Personal Information, Bio & Social Links
Open `src/data/portfolioData.js`:
- Update `name`, `role`, `cgpa`, `degree`, `location`
- Update `email`, `linkedin`, `github`
- Modify the `heroDescription` or `aboutData`

### 2. Replace Profile Picture
- Place your photo at `public/assets/profile.jpg`.
- The portrait will automatically load your new photo with zero code changes.
- If `profile.jpg` is removed or fails, it automatically displays an elegant initials fallback (`LK`).

### 3. Replace Resume
- Replace `public/assets/resume.pdf` with your updated resume PDF.
- Both the "Resume" button in the Navbar and the "Download Curriculum Vitae" button in the Contact section will link directly to it.

### 4. Add Another Experience
Open `src/data/portfolioData.js` and edit or duplicate the experience object inside `experiencesData`:
```javascript
{
  id: "exp-02",
  number: "02",
  period: "Jun 2026 – Aug 2026",
  type: "Summer Internship",
  role: "Machine Learning Intern",
  organization: "Tech Company Name",
  description: "Implemented deep learning models and data pipelines...",
  tags: ["Python", "PyTorch", "Docker"]
}
```

### 5. Add Another Project
Open `src/data/portfolioData.js` and add a new entry to `projectsData`:
```javascript
{
  id: "proj-07",
  number: "07",
  title: "My New AI Project",
  category: "Computer Vision",
  description: "Description of your project...",
  features: ["Feature 1", "Feature 2"],
  technologies: ["Python", "OpenCV", "TensorFlow"],
  githubUrl: "https://github.com/Lakshmi-Kameswari/my-repo",
  liveUrl: null,
  image: "/assets/project-images/my-project.jpg"
}
```

### 6. Change Theme Colors & Aesthetics
Open `src/styles/theme.css`:
- Change `--pink` or `--rose` for accent colors
- Change `--lavender` or `--violet` for secondary glows
- Adjust `--bg-primary` for the canvas background
- Change `--glass-border` or `--shadow-elevation` for card styling

---

## 📄 License
Released under the Apache-2.0 License.
