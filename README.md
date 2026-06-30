# Pramodh Personal

Pramodh Personal is a modern responsive e-commerce demo website built with Vite,
React, TypeScript, and Playwright.

## Features

- Home, Products, Product Details, Cart, Checkout, Login, and Contact pages
- Responsive layout for desktop and mobile
- Reusable product, header, cart, and checkout UI patterns
- Playwright tests for key shopping flows
- GitHub Actions workflow that runs tests on every push and pull request

## Project Structure

```text
pramodhpersonal/
  .github/workflows/playwright.yml
  src/
    components/        Shared UI components
    data/              Product catalog data
    pages/             Page-level React components
    App.tsx            App state and page routing
    main.tsx           React entry point
    styles.css         Responsive global styles
  tests/e2e/           Playwright end-to-end tests
  playwright.config.ts Playwright configuration
  vite.config.ts       Vite configuration
```

## Setup

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Start the development server:

```bash
npm run dev
```

Open the app at `http://127.0.0.1:5173`.

## Testing

Run all Playwright tests:

```bash
npm test
```

Run tests with the Playwright UI:

```bash
npm run test:ui
```

Run tests in headed browser mode:

```bash
npm run test:headed
```

## Build

Create a production build:

```bash
npm run build
```

## CI

The workflow at `.github/workflows/playwright.yml` installs dependencies, installs
Playwright browsers, builds the app, runs the Playwright suite, and uploads the
HTML report artifact.
