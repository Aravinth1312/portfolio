# Portfolio ✨

<div align="center">

  <div>
    <p></p>
    <p style="margin: 0; font-size: 16px; color: #eaeaea;">🚀 A modern, interactive developer portfolio showcasing your personal and professional journey ✨</p>
    <p></p>
    <img src="https://raw.githubusercontent.com/Aravinth1312/portfolio/main/docs/images/home.png" alt="Portfolio Home" width="90%" style="border-radius: 12px; margin-bottom: 20px; box-shadow: 0 8px 16px rgba(0,0,0,0.2);" />
  </div>
</div>

## 📸 Screenshots

<div align="center">
  <div style="display: flex; justify-content: space-between; gap: 20px; margin-top: 20px;">
    <div style="flex: 1;">
      <img src="https://raw.githubusercontent.com/Aravinth1312/portfolio/main/docs/images/about.png" alt="About Section" width="100%" style="border-radius: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
      <p><em>About section with journey and qualities</em></p>
    </div>
    <div style="flex: 1;">
      <img src="https://raw.githubusercontent.com/Aravinth1312/portfolio/main/docs/images/projects.png" alt="Projects Section" width="100%" style="border-radius: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
      <p><em>Projects with carousel & tech stack</em></p>
    </div>
  </div>

  <div style="display: flex; justify-content: space-between; gap: 20px; margin-top: 10px;">
    <div style="flex: 1;">
      <img src="https://raw.githubusercontent.com/Aravinth1312/portfolio/main/docs/images/skills.png" alt="Skills Section" width="100%" style="border-radius: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
      <p><em>Skills visualized with icons and animation</em></p>
    </div>
    <div style="flex: 1;">
      <img src="https://raw.githubusercontent.com/Aravinth1312/portfolio/main/docs/images/connect.png" alt="Connect Section" width="100%" style="border-radius: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
      <p><em>Social links with custom styling</em></p>
    </div>
  </div>
</div>

## 🌟 Feature Highlights

### 🧠 About Me Section

* Responsive personal introduction with goals and values
* Tech stack overview and developer traits

### 💻 Project Showcase

* Scrollable cards with live previews and code links
* Tags for technologies used
* Supports carousels, GIFs, and static images

### 🛠️ Skills Overview

* Categorized by stack (Frontend, Backend, DB, etc.)
* SVG icons for quick identification
* Responsive and dynamic layout

### 📞 Connect Section

* Email, phone, GitHub, LinkedIn integration
* Custom colors and hover animations

## 🌟 Design Approach

* **Minimal & Clean UI**: Focus on content and clarity
* **Dark Mode Friendly**: Sleek emerald-toned aesthetic
* **Fully Responsive**: Looks great on all devices

## ⚙️ Tech Stack

* **Next.js** 15 (App Router)
* **React** + **TypeScript**
* **Tailwind CSS**
* **Framer Motion** (animations)
* **Lucide React** (icons)
* **Markdown** (for easier content edits)

## 📆 Getting Started

### Prerequisites

* Node.js 20+
* Yarn or npm

### Setup

```bash
# Clone the repo
git clone https://github.com/Aravinth1312/portfolio.git

# Go into the project folder
cd portfolio

# Install dependencies
yarn install

# Run locally
yarn dev
```

## 🚀 Personalizing Your Portfolio

### Update Basic Info

Edit `app/config/index.ts`:

```ts
siteMetadata: {
  title: "Aravinth M",
  description: "Full-Stack Developer Portfolio",
  author: "Aravinth M",
},
```

### Add Your Projects

Update `app/config/projects.ts` with your work:

```ts
{
  id: 1,
  title: 'Hostel Management System',
  description: 'A full-stack web app to manage hostel student data, attendance and leave approvals.',
  tags: ['Java', 'Servlets', 'MySQL'],
  githubLink: 'https://github.com/Aravinth1312/hostel-management',
  type: 'Web App',
  thumbnail: '/images/hostel.png',
},
```

### Skills & Tools

Update `app/config/skills.ts` to reflect your technologies.

### Social Links

Edit `app/config/socials.tsx` to include your links:

```ts
{
  name: 'LinkedIn',
  url: 'https://linkedin.com/in/m-aravinth-190b8a24b',
}
```

### Resume & Assets

* Place your `resume.pdf` inside the `/public` folder
* Use `/resume.pdf` in the download button href

## 📁 Folder Structure

```
portfolio/
├── app/
│   ├── config/          # Configs (index.ts, projects.ts, skills.ts, socials.tsx)
│   ├── components/      # Buttons, cards, logo, etc.
│   ├── sections/        # Home, About, Skills, Projects, Connect
│   ├── types/           # Type definitions
│   └── globals.css      # Tailwind + custom styles
└── public/              # resume.pdf, project images, favicon
```

## 🙏 Credits

This project uses open-source tools:

* [Next.js](https://nextjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Framer Motion](https://www.framer.com/motion/)
* [Lucide Icons](https://lucide.dev/)

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/Aravinth1312">Aravinth M</a></p>
  <p>
    <a href="https://linkedin.com/in/m-aravinth-190b8a24b">LinkedIn</a> •
    <a href="mailto:aravinthm6382@gmail.com">Email</a>
  </p>
</div>
