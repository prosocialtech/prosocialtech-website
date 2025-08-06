# Contributing to Prosocial Tech Collab

Thanks for your interest in contributing to our community! This is the website for Prosocial Tech Collab, a space for fostering community around responsible technology. We welcome contributions from everyone passionate about building technology for social good.

## Table of Contents

- [Quick Start](#quick-start)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Getting Help](#getting-help)
- [Code of Conduct](#code-of-conduct)

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Setup

1. Fork and clone the repository:

   ```bash
   git clone https://github.com/your-username/prosocialtech-website.git
   cd prosocialtech-website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Development Workflow

### Making Changes

1. **Create a new branch** for your feature/fix:

   ```bash
   git checkout -b feature/your-feature-name
   # or for bug fixes:
   git checkout -b fix/issue-description
   ```

2. **Make your changes** following our coding standards

3. **Run the linter** to check for issues:

   ```bash
   npm run lint
   ```

4. **Test your changes** locally and ensure everything works

5. **Commit your changes** with a clear, descriptive message:

   ```bash
   git commit -m "feat: add new collaboration feature"
   git commit -m "fix: resolve navigation issue on mobile"
   ```

6. **Push your branch** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

### Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Pull Request Process

1. **Create a pull request** with a clear description of your changes
2. **Include context** about why the change is needed
3. **Reference any related issues** using keywords like "Fixes #123"
4. **Request reviews** from maintainers if needed
5. **Address feedback** and make requested changes
6. **We'll review and merge** when everything looks good

## Code Standards

### General Guidelines

- Use TypeScript with proper types for props, state, and functions
- Follow the existing code style and formatting
- Use meaningful component and variable names
- Keep components focused and single-purpose
- Use functional components with hooks

## Project Structure

```
src/
├── components/          # React components
│   └── App/            # Main App component
├── styles/             # CSS/styling files
├── assets/             # Images, icons, etc.
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── hooks/              # Custom React hooks
└── main.tsx           # App entry point
```

## Tech Stack

- **React 19** - Modern UI framework with hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and quality enforcement

## Getting Help

### How to Ask

- **Open an issue** with a clear description
- **Include error messages** and stack traces
- **Describe what you expected** vs what happened
- **Share your environment** (OS, Node version, etc.)
- **Provide steps to reproduce** the issue

## Code of Conduct

### Our Standards

We are committed to providing a welcoming and inspiring community for all. We expect all contributors to:

- **Be respectful** and inclusive of others
- **Use welcoming and inclusive language**
- **Be collaborative** and open to constructive feedback
- **Focus on what is best for the community**
- **Show empathy** towards other community members

### Reporting

If you experience or witness unacceptable behavior, please report it by:

- Contacting project maintainers directly
- Opening a private issue with details
- Reaching out through community channels

---

**Thank you for contributing to Prosocial Tech Collab!** 🚀
