# ☕ BuildOnCoffee

> **Building the future, one cup at a time**

BuildOnCoffee is a modern, community-driven platform designed to accelerate your development journey. Discover curated learning resources, powerful tools, and connect with fellow developers in a beautifully crafted environment.

![BuildOnCoffee Platform](https://img.shields.io/badge/Status-Active-brightgreen) ![React](https://img.shields.io/badge/React-18.2.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.0-38B2AC) ![Vite](https://img.shields.io/badge/Vite-4.4.0-646CFF) ![Supabase](https://img.shields.io/badge/Supabase-Database-green)

## ✨ Features

### 🎓 **Learning Resources**
- **Comprehensive Courses**: Data Structures, Algorithms, Operating Systems, Networks, Databases, System Design
- **Free Certificates**: Access to courses with free certificates from top platforms
- **Interactive Roadmaps**: Step-by-step learning paths for various tech domains
- **Project Ideas**: Curated project ideas for all skill levels (Beginner to Advanced)
- **Documentation Hub**: Official docs for frameworks, languages, and databases

### 🛠️ **Developer Tools**
- **Productivity Tools**: Discover tools that enhance your development workflow
- **Portfolio Builder**: SnapFolio integration for instant portfolio generation
- **Learning Paths**: Structured multi-week journeys with progress tracking
- **Glossary**: Essential tech terms explained simply

### 🏆 **Certificate Verification System**
- **Secure Verification**: Cryptographically verified certificates using Supabase database
- **Real-time Validation**: Instant verification with comprehensive certificate details
- **Professional Display**: Beautiful UI showcasing certificate authenticity
- **Database Integration**: Robust backend with Row Level Security (RLS)
- **Certificate Management**: Support for multiple certificate types and statuses

### 🔐 **Enhanced Authentication**
- **Google OAuth**: Seamless authentication with Google Sign-In
- **Supabase Integration**: Modern backend-as-a-service for user management
- **Profile Management**: Enhanced user profiles with dynamic avatar generation
- **Secure Sessions**: Persistent authentication with automatic token refresh

### 🌟 **Modern Experience**
- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Mode**: Seamless theme switching with smooth transitions
- **Smooth Animations**: Framer Motion powered interactions and micro-animations
- **Glassmorphism UI**: Modern backdrop blur effects and translucent designs
- **Auto-scrolling Testimonials**: Community feedback with horizontal carousel
- **Interactive Elements**: Hover effects, loading states, and engaging interactions

### 👥 **Community Features**
- **User Authentication**: Secure login with Google OAuth and Supabase
- **Dynamic Avatars**: Random cartoon-style profile pictures for users without photos
- **Profile Management**: Personalized user profiles and preferences
- **Project Gallery**: Showcase and discover community projects
- **Contributor Recognition**: Highlight top contributors and team members

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Supabase account (for authentication and certificate verification)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/anup2702/build-on-coffee.git
   cd build-on-coffee
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory with the following variables:

   ```env
   # Supabase Configuration
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   
   # Example:
   # VITE_SUPABASE_URL=https://your-project-id.supabase.co
   # VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

4. **Supabase Setup:**
   
   **Step 1: Create Supabase Project**
   - Sign up at [Supabase](https://supabase.com)
   - Create a new project
   - Copy your project URL and anon key to the `.env` file

   **Step 2: Configure Google OAuth**
   - Go to Authentication > Providers in your Supabase dashboard
   - Enable Google provider
   - Add your Google OAuth credentials
   - Set authorized redirect URIs

   **Step 3: Set up Certificate Database**
   - Go to SQL Editor in your Supabase dashboard
   - Run the SQL commands from `supabase-certificates-setup.sql`
   - This creates the certificates table and sample data

5. **Start development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

## 🎨 UI/UX Highlights

### **Modern Design System**
- **Typography**: Inter font family with proper hierarchy
- **Color Palette**: Consistent blue, emerald, and orange accent colors
- **Spacing**: 8px grid system for consistent layouts
- **Shadows**: Subtle shadows and hover effects
- **Borders**: Rounded corners and modern border styles

### **Interactive Components**
- **Animated Logo**: Coffee cup with steam animation and glow effects
- **Smooth Transitions**: 300ms cubic-bezier transitions throughout
- **Hover States**: Scale, color, and shadow animations
- **Loading States**: Skeleton loaders and smooth loading animations
- **Glassmorphism Effects**: Modern translucent design elements

### **Responsive Features**
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Adaptive layouts for medium screens
- **Desktop Experience**: Enhanced features for larger screens
- **Touch Interactions**: Optimized for touch devices

## 🛠️ Tech Stack

### **Frontend**
- **React 18**: Latest React features and hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth interactions

### **Backend & Database**
- **Supabase**: Backend-as-a-Service for authentication and database
- **PostgreSQL**: Robust relational database
- **Row Level Security**: Secure data access policies
- **Real-time Subscriptions**: Live data updates

### **Authentication**
- **Google OAuth**: Social authentication with Google
- **Supabase Auth**: Modern authentication and user management
- **Protected Routes**: Secure access to user-specific features
- **Session Management**: Persistent authentication state

### **Styling & UI**
- **Custom CSS Variables**: Theme-aware color system
- **Glass Morphism**: Modern backdrop blur effects
- **Gradient Animations**: Dynamic color transitions
- **Icon System**: Lucide React icons throughout
- **Dynamic Avatars**: DiceBear API for random profile pictures

### **Development Tools**
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **Git Hooks**: Pre-commit linting and formatting

## 📱 Pages & Features

### **Landing Page**
- Hero section with animated background elements
- Products showcase with modern card design
- Auto-scrolling testimonials carousel
- Community statistics and social proof
- Smooth scroll navigation

### **Certificate Verification**
- **Modern UI**: Glassmorphism design with gradient effects
- **Real-time Validation**: Instant certificate verification
- **Professional Display**: Detailed certificate information
- **Error Handling**: Clear feedback for invalid certificates
- **Responsive Design**: Works perfectly on all devices

### **Learning Resources**
- **Courses**: Comprehensive CS course library
- **Roadmaps**: Interactive learning paths
- **Project Ideas**: Skill-level based project suggestions
- **Free Certificates**: Courses with free credentials

### **User Authentication**
- **Google Sign-In**: One-click authentication
- **Profile Management**: Enhanced user profiles
- **Dynamic Avatars**: Random cartoon-style profile pictures
- **Secure Sessions**: Persistent login state

### **Community**
- **Team Page**: Meet the contributors
- **Project Gallery**: Community project showcase
- **Contribute**: How to get involved
- **About**: Platform mission and vision

## 🗄️ Database Schema

### **Certificates Table**
```sql
CREATE TABLE certificates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  certificate_id VARCHAR(50) UNIQUE NOT NULL,
  recipient_name VARCHAR(255) NOT NULL,
  certificate_type VARCHAR(100) NOT NULL,
  role VARCHAR(255),
  duration VARCHAR(100),
  issued_by VARCHAR(255) DEFAULT 'Build On Coffee',
  status VARCHAR(20) DEFAULT 'active',
  issued_date DATE DEFAULT CURRENT_DATE,
  expiry_date DATE,
  -- Additional fields...
);
```

### **Security Features**
- **Row Level Security (RLS)**: Secure data access
- **Public Read Access**: Certificate verification without authentication
- **Authenticated Write Access**: Admin-only certificate management
- **Input Validation**: Sanitized data entry and queries

## 🤝 Contributing

We welcome contributions from developers of all skill levels! Here's how you can help:

### **Getting Started**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Commit with conventional commits: `git commit -m 'feat: add amazing feature'`
5. Push to your branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### **Contribution Areas**
- **UI/UX Improvements**: Design enhancements and animations
- **New Features**: Additional learning resources or tools
- **Bug Fixes**: Issue resolution and improvements
- **Documentation**: README updates and code comments
- **Performance**: Optimization and performance improvements
- **Certificate Management**: Database schema and verification logic
- **Authentication**: Security improvements and new auth providers

### **Development Guidelines**
- Follow the existing code style and conventions
- Add proper TypeScript types where applicable
- Include responsive design considerations
- Test on multiple devices and browsers
- Update documentation for new features
- Ensure database migrations are included for schema changes

## 🔧 Environment Variables

Create a `.env` file in your project root with these variables:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional: For development
NODE_ENV=development
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Community Contributors**: All the amazing developers who contribute
- **Open Source Tools**: React, Vite, Tailwind CSS, Supabase, and other libraries
- **Design Inspiration**: Modern web design trends and best practices
- **Coffee**: For fueling our development sessions ☕

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/anup2702/build-on-coffee/issues)
- **Discussions**: [GitHub Discussions](https://github.com/anup2702/build-on-coffee/discussions)
- **Email**: support@buildoncoffee.dev

## 🎯 Recent Updates

### **v2.0.0 - Major Update**
- ✅ **Google OAuth Authentication** - Replaced Clerk with Supabase + Google OAuth
- ✅ **Certificate Verification System** - Complete verification system with database
- ✅ **Enhanced UI/UX** - Glassmorphism design and modern animations
- ✅ **Dynamic Avatar System** - Random cartoon-style profile pictures
- ✅ **Database Integration** - Supabase backend with PostgreSQL
- ✅ **Responsive Design** - Improved mobile and tablet experience
- ✅ **Security Enhancements** - Row Level Security and input validation

---

<div align="center">

**Built with ❤️ by the BuildOnCoffee community**

[![GitHub stars](https://img.shields.io/github/stars/anup2702/build-on-coffee?style=social)](https://github.com/anup2702/build-on-coffee/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/anup2702/build-on-coffee?style=social)](https://github.com/anup2702/build-on-coffee/network/members)
[![GitHub issues](https://img.shields.io/github/issues/anup2702/build-on-coffee)](https://github.com/anup2702/build-on-coffee/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/anup2702/build-on-coffee)](https://github.com/anup2702/build-on-coffee/pulls)

</div>