# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for Katherine Xiong, built with React 19 and Vite. Deployed to GitHub Pages via a GitHub Actions workflow (`.github/workflows/deploy.yml`) on every push to `main`.

- Components live under `src/components/<Name>/`, each paired with a CSS module (`<Name>.module.css`).
- Shared colors and other design tokens are defined as CSS custom properties in `src/index.css`.
- Section ids used for anchor navigation and scroll-spy are centralized in `src/constants/sections.js` — both `App.jsx` and `Navbar.jsx` read from it.
- Scroll-driven behavior (active nav link, fade-in-on-scroll) lives in `src/hooks/` (`useActiveSection`, `useFadeIn`), the latter wrapped by the reusable `src/components/FadeIn/FadeIn.jsx` component.

### Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — production build to `dist/`
- `npm run lint` — run ESLint
- `npm run preview` — preview the production build locally

## Repository

- **Remote**: https://github.com/kxiong22x/Personal-Website.git
- **Branch**: main
