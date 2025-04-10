# Bumper Dealership Test Case

This project is a dealership registration and listing system built with **Next.js 14 (App Router)**, following **industry-standard best practices** in terms of architecture, performance, scalability, accessibility, SEO, and testing. It was developed by **Erhan Fırat** as part of a technical assessment and demonstrates a professional-grade, production-ready implementation.

---

## Tech Stack

- **Next.js 14 (App Router, Server Components, Turbopack)**
- **React Hook Form + Zod** for robust form validation
- **Tailwind CSS** for utility-first styling
- **TypeScript** for type safety
- **SWR (Infinite)** for data fetching and client-side caching
- **Cypress** for E2E testing
- **ESLint & Prettier** for code quality and formatting

---

## Features & Best Practices

### Form Handling

- Fully typed form with `React Hook Form`
- Schema validation with `Zod`, including regex and character limits
- Validation feedback shown on invalid entries

### API Endpoints

- `POST /api/dealership` — receives and validates form data
- `GET /api/dealership?page=X&limit=Y&search=Z` — paginated + searchable endpoint
- Typed data contracts between client and server

### Infinite Scroll

- Implemented with `useSWRInfinite`
- Supports pagination and search filters
- Avoids redundant requests with `getKey` logic

### Search Functionality

- Live filtering through search input on dealership list
- Debounced search implemented for performance

### Data Caching

- SWR handles caching, deduplication, revalidation
- Cache is automatically updated on form submission

### Performance

- API responses paginated and searchable
- List components are memoized where applicable
- Function references are memoized using useCallback
- Minimal bundle size via selective imports and creating atomic level components

### Component Design

- Atomic and reusable components
- `Card`, `FormInput`, and `SearchBar` are isolated with clear props

### SEO

- Semantic HTML usage
- Accessible inputs with proper labels and error roles

### Accessibility

- Keyboard navigable
- ARIA labels and roles on interactive elements
- Form errors announced with `aria-live="assertive"`

### E2E Testing

- Cypress integrated with fully working tests
- Validation tests for each form field
- Success case tested with navigation and list rendering

### Project Structure

```bash
src/
|
├── app/                            # Next.js App Router structure
|   ├── api/                        # API routes
|   ├── dealerships/                # Dealerships page
|   |   └── page.tsx                # Dealerships page component
|   |
|   ├── register/                   # Register page
|   |   ├── metadata.ts             # Register page metadata
|   |   └── page.tsx                # Register page component
|   |
|   ├── globals.css                 # Global CSS styles
|   ├── layout.tsx                  # Root layout component
|   └── page.tsx                    # Home page component
|
├── components/                     # Reusable components
|   ├── icons/                      # SVG icon components
|   |   └── Star.tsx                # Star icon component
|   |
|   ├── layout/                     # Layout components
|   |   └── Header.tsx              # Header component
|   |
|   ├── shared/                     # Shared complex components
|   |   ├── DealershipCard.tsx      # Dealership card component
|   |   ├── DealershipForm.tsx      # Dealership registration form
|   |   ├── Hero.tsx                # Hero section component
|   |   └── SearchInput.tsx         # Search input component
|   |
|   └── ui/                         # Basic UI components
|       ├── Button.tsx              # Button component
|       ├── ButtonLink.tsx          # Link-styled button
|       ├── FormInput.tsx           # Form input component
|       ├── HeaderLink.tsx          # Links inside header
|       ├── Input.tsx               # Base input component
|       └── InputRadio.tsx          # Radio button component
|
├── hooks/                          # Custom React Hooks
|   └── useInfiniteDealership.ts    # Hook for infinite scrolling dealerships
|
├── lib/                            # Helper functions and services
|   ├── api.ts                      # API request helpers
|   ├── dummyData.ts                # Test data
|   ├── formSubmit.ts               # Form submission functions
|   └── validators.ts               # Form validation schemas
|
└── types/                          # TypeScript type definitions
    └── forms.d.ts                  # Form data types
```

---

## How to Run

### 1. Install Dependencies

```bash
npm install
```

### 2. Create .env File

Create a `.env.local` file in root with:

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
```

### 3. Run Dev Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Running Cypress Tests

```bash
npm run test
```

Or run headless:

```bash
npm run test-h
```

---

Crafted with care by **Erhan Fırat** ✨
