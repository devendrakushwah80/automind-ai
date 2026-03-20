# AutoMind AI — Official Website

**Smart Chatbots. Smarter Businesses.**

A modern, premium startup-grade website for AutoMind AI — AI Automation Agency, Chatbot Development, Web & App Development.

---

## 🗂️ Project Structure

```
automind-ai/
├── app/
│   ├── globals.css         # Global styles, CSS variables, utilities
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx          # Sticky nav with mobile menu
│   ├── Hero.tsx            # Hero section with animations
│   ├── Services.tsx        # 5 service cards with hover effects
│   ├── Internship.tsx      # 9 internship domain cards
│   ├── WhyUs.tsx           # Benefits + stats section
│   ├── Testimonials.tsx    # Animated testimonials carousel
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer with social links
│   └── FloatingButtons.tsx # Floating WhatsApp + Telegram buttons
├── public/                 # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

## 🚀 Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Steps

```bash
# 1. Clone or extract the project
cd automind-ai

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open browser
open http://localhost:3000
```

---

## 📦 Deploy to Vercel (Recommended)

### Option A: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: automind-ai
# - Root directory: ./
# - Framework: Next.js (auto-detected)
# - Override settings? No

# Deploy to production
vercel --prod
```

### Option B: GitHub + Vercel Dashboard

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: AutoMind AI website"
git remote add origin https://github.com/YOUR_USERNAME/automind-ai.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Click **Deploy** (Next.js is auto-detected)
5. Done! Your site is live at `https://automind-ai.vercel.app`

---

## 📧 Setting Up Contact Form (EmailJS)

The contact form is pre-wired for EmailJS. To activate:

1. Create account at [emailjs.com](https://emailjs.com)
2. Create an Email Service (Gmail, Outlook, etc.)
3. Create an Email Template with variables: `{{name}}`, `{{email}}`, `{{message}}`
4. Get your Service ID, Template ID, and Public Key
5. Install EmailJS:

```bash
npm install @emailjs/browser
```

6. Update `components/Contact.tsx`, replace the simulated submit with:

```typescript
import emailjs from '@emailjs/browser'

// In handleSubmit:
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  { name: form.name, email: form.email, message: form.message },
  'YOUR_PUBLIC_KEY'
)
```

---

## 🔗 Key Links Already Configured

| Feature | Link |
|--------|------|
| Internship Form | https://docs.google.com/forms/... |
| WhatsApp Community | https://chat.whatsapp.com/LNB1hSAgaMoFb2dAXPq7Rs |
| Telegram Channel | https://t.me/+Nq16oNV76nAxYTQ1 |

---

## 🎨 Customization

### Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --bg-primary: #030711;
  --accent-blue: #3b82f6;
  --accent-electric: #00d4ff;
}
```

### Fonts
Currently using: **Syne** (display) + **DM Sans** (body)
Change in `app/globals.css` @import and `tailwind.config.js`

### Content
- Services: `components/Services.tsx` → `services` array
- Internship domains: `components/Internship.tsx` → `domains` array  
- Testimonials: `components/Testimonials.tsx` → `testimonials` array
- Stats: `components/WhyUs.tsx` → `stats` array

---

## ⚡ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Syne + DM Sans)
- **Deployment**: Vercel

---

Built with ❤️ for AutoMind AI
