# BoilerChs

A modern fullstack boilerplate to kickstart your next project.

## 🛠️ Stack

- **AdonisJS 6** (API & backend, session-based authentication)
- **Inertia.js** (SSR enabled)
- **React 19** (frontend)
- **shadcn/ui** (UI components)
- **Tailwind CSS 4**
- **Session authentication** (with Google OAuth provider)
- **Password reset flow** (forgot/reset password)

---

## ✨ Features

### 1. Rapid User Creation

- Use the `create:user` ace command to quickly create users from the CLI.
- Example:
  ```bash
  node ace create:user
  ```

---

### 2. Ready-to-use Auth Pages

- Prebuilt, easily customizable pages for:
  - Sign Up
  - Sign In
  - Forgot Password
  - Reset Password
- All pages use shadcn/ui and Tailwind for a modern look.
  ![create_account](/public/repo/create-account.png)
  ![login](/public/repo/login.png)

---

### 3. Google OAuth Provider

- Users can sign up or log in with Google.
- Fully integrated with AdonisJS session authentication.

---

### 4. Mailer Setup with Resend

- Mailer is preconfigured for Resend (and SMTP).
- Email templates (Edge + MJML) are ready for:
  - Password reset
  - (Add your own easily)
- Local development with Mailpit

---

### 5. Modular & Extensible

- Clean separation of concerns (auth, dashboard, services, etc.)
- Easily extend or swap out UI, mailers, or providers.
- Docker & docker-compose ready for local development.

---

## 📦 Quick Start

1. Clone the repo
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and fill in your secrets
4. Run migrations: `node ace migration:run`
5. Start the app: `npm run dev`

---

## License

MIT
