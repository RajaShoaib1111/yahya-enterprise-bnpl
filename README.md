# Yahya Enterprise BNPL Platform

A modern **Buy Now, Pay Later (BNPL)** e-commerce platform built with Next.js 14, featuring flexible installment payment plans and seamless Google Sheets integration.

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4+-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

## 🌟 Overview

Yahya Enterprise is a demo BNPL platform designed to showcase flexible payment solutions to potential clients. With **10 years of trusted service**, **100,000+ satisfied customers**, and **$250M+ in total transactions**, this platform demonstrates enterprise-grade payment plan management.

## ✨ Key Features

### 🏠 Customer-Facing Features
- **Flexible Payment Plans**: 3, 6, 9, or 12-month installment options
- **Dynamic Calculator**: Real-time payment breakdown with configurable profit ratios
- **Product Catalog**: Browse products with filtering and search capabilities
- **Shopping Cart**: Persistent cart with localStorage integration
- **Cash on Delivery**: Simple COD payment model
- **Email Confirmations**: Automated order confirmation emails

### 🎨 Design & UX
- **Modern Fintech Aesthetic**: Professional gradient green theme
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Polished transitions and hover effects
- **Trust Indicators**: Statistics, testimonials, and trust badges

### 🔧 Admin Features
- **Product Management**: Full CRUD operations for products
- **Order Tracking**: View and manage all customer orders
- **Contact Management**: Review customer inquiries
- **Google Sheets Integration**: All data synced to Google Sheets

## 🚀 Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS 4 with custom color palette
- **State Management**: Zustand / React Context
- **Forms**: React Hook Form
- **Backend**: Next.js API Routes (Serverless)
- **Database**: Google Sheets API v4
- **Email**: Nodemailer / SendGrid
- **Authentication**: JWT + bcrypt
- **Deployment**: Vercel (recommended)

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- Git
- Google Cloud account (for Sheets API)
- Gmail account or SendGrid API key (for emails)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/RajaShoaib1111/yahya-enterprise-bnpl.git
   cd yahya-enterprise-bnpl
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your credentials:
   ```env
   # Google Sheets API
   GOOGLE_SHEETS_API_KEY=your_api_key
   GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id
   GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account@project.iam.gserviceaccount.com
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

   # Email Service
   EMAIL_SERVICE=gmail
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASSWORD=your_app_password

   # Admin Authentication
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD_HASH=$2a$10$...
   JWT_SECRET=your_jwt_secret_key

   # App Settings
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_COMPANY_EMAIL=info@yahyaenterprise.com
   NEXT_PUBLIC_COMPANY_PHONE=+1234567890
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📊 Installment Calculator Logic

The platform uses a flexible, configurable calculator formula:

**Profit Ratio Rules:**
- ≤ 6 months: 30% profit
- \> 6 months: 60% profit

**Calculation Steps:**
1. Down Payment = Product Price × (Down Payment % / 100)
2. Remaining Balance = Product Price - Down Payment
3. Profit Amount = Remaining Balance × (Profit Ratio / 100)
4. Total with Profit = Remaining Balance + Profit Amount
5. Monthly Payment = Total with Profit / Duration
6. Total Payable = Down Payment + Total with Profit

**Example:** $1,000 product, 25% down, 9 months
- Down Payment: $250
- Remaining Balance: $750
- Profit (60%): $450
- Total with Profit: $1,200
- Monthly Payment: $133.33
- Total Payable: $1,450

> **Note:** The formula is centralized in `src/lib/calculatorConfig.ts` for easy modification.

## 🎨 Brand Colors

```css
/* Primary Gradient Green */
--green-light: #A8E6CF
--green-dark: #2D6A4F

/* Accent Colors */
--navy: #1e3a5f        /* Headers, navigation */
--gold: #D4AF37        /* CTAs, trust badges */
--charcoal: #2C3E50    /* Body text */
--white: #FFFFFF       /* Backgrounds */
```

## 📁 Project Structure

```
yahya-enterprise-bnpl/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── page.tsx           # Home page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── layout/            # Navbar, Footer
│   │   ├── home/              # Home page sections
│   │   ├── calculator/        # Calculator components
│   │   ├── products/          # Product catalog
│   │   ├── admin/             # Admin dashboard
│   │   ├── cart/              # Shopping cart
│   │   └── checkout/          # Checkout flow
│   ├── lib/
│   │   ├── calculatorConfig.ts   # Calculator business logic
│   │   ├── googleSheets.ts       # Google Sheets helpers
│   │   ├── emailService.ts       # Email functions
│   │   └── auth.ts               # Authentication
│   └── types/                 # TypeScript types
├── public/                    # Static assets
├── .env.local                 # Environment variables
├── .env.example              # Example env file
└── package.json
```

## 🗄️ Google Sheets Structure

The platform requires a Google Sheet with 4 tabs:

**1. Products**
- Product ID, Name, Price, Description, Category, Image URL, Stock Status, Created Date

**2. Orders**
- Order ID, Customer Name, Email, Phone, Address, City, Order Items, Total, Date, Status, Notes

**3. Contact Submissions**
- Submission ID, Name, Email, Subject, Message, Date, Status

**4. Admin Credentials**
- Username, Password Hash, Last Login, Permissions

## 🔐 Security Best Practices

- ✅ Environment variables for all sensitive data
- ✅ Password hashing with bcrypt
- ✅ JWT-based authentication
- ✅ Input sanitization on all forms
- ✅ HTTPS only in production
- ✅ Rate limiting on API routes
- ✅ No API keys in client-side code

## 📈 Current Progress

**Overall: 28% Complete (21/75 tasks)**

| Phase | Status | Progress |
|-------|--------|----------|
| Phase 1: Core Setup | 🟡 In Progress | 70% (7/10) |
| Phase 2: Layout & Pages | 🟡 In Progress | 67% (10/15) |
| Phase 3: E-Commerce | 🔴 Not Started | 0% (0/12) |
| Phase 4: Google Sheets | 🔴 Not Started | 0% (0/13) |
| Phase 5: Admin Dashboard | 🔴 Not Started | 0% (0/15) |
| Phase 6: Testing & Deploy | 🔴 Not Started | 0% (0/10) |

**Completed:**
- ✅ Next.js 14 + TypeScript setup
- ✅ Tailwind CSS with custom branding
- ✅ Calculator business logic
- ✅ Navbar & Footer (responsive)
- ✅ Home page (Hero, Stats, How It Works, Features, Testimonials)
- ✅ Build successful, no errors

**Next Up:**
- 🔜 About & Contact pages
- 🔜 Calculator page with live calculations
- 🔜 Product catalog & shopping cart
- 🔜 Google Sheets integration
- 🔜 Admin dashboard

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Import to Vercel**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Import `yahya-enterprise-bnpl` repository
   - Add environment variables from `.env.local`
   - Click "Deploy"

2. **Configure Domain** (Optional)
   - Add custom domain in Vercel settings
   - Update `NEXT_PUBLIC_SITE_URL` environment variable

## 📝 Documentation

- [CLAUDE.md](./CLAUDE.md) - Development guide for Claude Code
- [Progress.md](../Progress.md) - Detailed task tracking
- [Yahya_Enterprise_Claude.md](../Yahya_Enterprise_Claude.md) - Complete project specification

## 🤝 Contributing

This is a demo project for showcasing to clients. For inquiries or customization requests, please contact the development team.

## 🙏 Acknowledgments

Built with [Claude Code](https://claude.com/claude-code) - AI-powered development assistant

---

**Developed by:** Yahya Enterprise Development Team
**Contact:** info@yahyaenterprise.com
**Repository:** https://github.com/RajaShoaib1111/yahya-enterprise-bnpl

---

⭐ **Star this repository** if you find it helpful!
