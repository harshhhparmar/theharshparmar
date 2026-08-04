# Personal Portfolio Website

A modern, responsive, and animated personal portfolio website built with React, TypeScript, and Tailwind CSS. It features a custom cursor, smooth scroll animations, and a fully functional contact form integrated with Supabase for data persistence.

## ✨ Features

- **Modern UI/UX**: Clean design with a dark theme and custom animated cursor.
- **Smooth Animations**: Powered by Framer Motion for scroll reveals and page transitions.
- **Contact Form**: Direct messaging system that saves inquiries securely to a Supabase database.
- **Admin Panel**: A secure, authenticated route (`/admin`) to view and manage incoming contact inquiries.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Vercel Ready**: Pre-configured for deployment on Vercel with client-side routing support (`vercel.json`).

## 🛠️ Tech Stack

- **Frontend**: React (Vite), TypeScript, Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion (`motion/react`)
- **Database/Auth**: Supabase (Inquiries & Admin Authentication)
- **Icons**: Lucide React
- **Notifications**: Sonner (Toast notifications)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Environment Setup:
   Create a `.env` file in the root directory and configure your environment variables (refer to `.env.example` if available).
   ```env
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```
   *(Note: The Supabase client is initialized in `src/lib/supabase.ts`)*

4. Start the development server:
   ```bash
   npm run dev
   ```

## 📁 Project Structure

- `src/components/`: Reusable UI components (Hero, About, Projects, AdminPanel, etc.)
- `src/lib/`: Utility files and third-party configurations (e.g., Supabase client)
- `src/App.tsx`: Main application routing and layout wrapper
- `src/index.css`: Global styles, custom cursor rules, and Tailwind directives

## 🌐 Deployment

This project is optimized for deployment on Vercel. A `vercel.json` file is included in the root directory to automatically handle React Router's client-side routing and prevent 404 errors on page reloads.
