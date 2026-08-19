# 🚀 YC Directory

A modern full-stack startup discovery and pitching platform inspired by Y Combinator. Users can explore startup ideas, search for startups, view founder profiles, and authenticated users can create and publish their own startup pitches.

## 📸 Preview

### Home Page

<img width="2940" height="1688" alt="image" src="https://github.com/user-attachments/assets/e3fd4f97-a92e-4dd1-b393-611b7e5341c7" />

<img width="2940" height="1688" alt="image" src="https://github.com/user-attachments/assets/381dadd8-e479-47b8-9b30-69045f2dc354" />

### Startup Details

<img width="2940" height="1688" alt="image" src="https://github.com/user-attachments/assets/7429f1bd-f7a5-46bc-b5e0-00b929b8a868" />

<img width="2940" height="1688" alt="image" src="https://github.com/user-attachments/assets/39bdc8de-2ddd-4beb-9a75-c1cf58738512" />

### User Details

<img width="2940" height="1688" alt="image" src="https://github.com/user-attachments/assets/b2ff9ebd-dd76-4571-811a-40e9ad567833" />

<img width="2940" height="1688" alt="image" src="https://github.com/user-attachments/assets/abb1b3ea-dda5-4957-9ff0-efc341835b24" />

### Create Startup


<img width="2940" height="1688" alt="image" src="https://github.com/user-attachments/assets/afe3874a-d8db-43db-a81b-b42d7150b8a5" />

<img width="2940" height="1688" alt="image" src="https://github.com/user-attachments/assets/d8fad1f3-ed71-4748-a0c7-b61be32ad47d" />

### Sentry User feedback
<img width="2940" height="1688" alt="image" src="https://github.com/user-attachments/assets/892f7222-1556-41b3-883c-528aa23aae91" />

### Search

<img width="2940" height="1688" alt="image" src="https://github.com/user-attachments/assets/41e395af-6a20-4fb0-9ca7-65970a57b65b" />

<img width="2940" height="1688" alt="image" src="https://github.com/user-attachments/assets/0c24a183-a480-4577-86e8-0b512328d38b" />

## ✨ Features

* 🔐 GitHub OAuth authentication
* 🚀 Create and publish startup pitches
* 🔎 Search and discover startups
* 📄 Dynamic startup detail pages
* 👤 Founder/author profiles
* ✍️ Markdown-based pitch editor
* 🗂️ Sanity CMS for managing startup content
* 🎨 Responsive and modern UI
* 🛡️ Error monitoring with Sentry

## 🛠️ Tech Stack

* **Next.js 16** — Full-stack React framework
* **React 19** — UI
* **TypeScript** — Type safety
* **Tailwind CSS v4** — Styling
* **Sanity CMS** — Content management
* **NextAuth / Auth.js** — Authentication
* **shadcn/ui** — UI components
* **Sentry** — Error monitoring
* **Markdown** — Startup pitch formatting

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/asmi-04/-Yc_Directory-.git
cd -Yc_Directory-
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file and add the required Sanity, GitHub OAuth, authentication, and Sentry credentials.

```env
AUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=

NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=
SANITY_TOKEN=
```

### 4. Run the development server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser for frontend setup.
Open **http://localhost:3333** in your browser for sanity/database setup.

## 📚 What I Learned

This project helped me gain hands-on experience with:

* Full-stack development using Next.js
* Next.js App Router
* Server and Client Components
* OAuth authentication
* Sanity CMS integration
* Dynamic routing
* Form handling and validation
* Markdown rendering
* TypeScript
* Responsive UI development with Tailwind CSS

## 👩‍💻 Author

**Asmi Jain**
