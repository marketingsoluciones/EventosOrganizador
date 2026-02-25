# CLAUDE.md — EventosOrganizador

## Project Overview

EventosOrganizador is a multi-language marketing and product website for an event management SaaS platform. It serves as the public-facing site for a product that includes CRM, ticketing, lead generation, ERP, finance/OCR, automations, event/wedding management, and analytics modules.

- **Live URL**: https://www.eventosorganizador.com
- **App URL**: https://app.eventosorganizador.com
- **Backend API**: https://api.bodasdehoy.com (GraphQL)
- **Deploy**: Vercel

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (Pages Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3 + custom CSS animations |
| UI Libraries | Material-UI 6, Headless UI, Heroicons |
| i18n | next-intl 4 (9 locales, default: `es`) |
| Carousels | Swiper 11, react-slick |
| HTTP | Axios (GraphQL client) |
| Analytics | Google Analytics 4, Facebook Pixel |
| Fonts | Geist (local woff files in `pages/fonts/`) |
| SEO | Schema.org JSON-LD, Open Graph, hreflang |

## Build & Dev Commands

```bash
npm run dev      # Start dev server (next dev)
npm run build    # Production build (next build)
npm run start    # Start production server (next start)
npm run lint     # Run ESLint (next lint)
```

No test framework is currently configured. There are no `npm test` or unit test scripts.

## Project Structure

```
├── pages/                   # Next.js Pages Router
│   ├── _app.tsx             # App wrapper: next-intl provider, GA4, FB Pixel
│   ├── _document.tsx        # HTML shell: Schema.org, hreflang, PWA meta
│   ├── index.tsx            # Homepage
│   ├── api/                 # API routes
│   │   ├── hello.ts         # Health check endpoint
│   │   └── agendar-reunion.ts  # Meeting booking (POST, saves to JSON file)
│   ├── funcionalidades/     # Feature pages (7 modules + index)
│   │   ├── index.tsx        # Features overview
│   │   ├── generacion-leads.tsx
│   │   ├── crm.tsx
│   │   ├── erp.tsx
│   │   ├── finanzas.tsx
│   │   ├── automatizaciones.tsx
│   │   ├── eventos-bodas.tsx
│   │   └── analytics.tsx
│   ├── soluciones/          # Industry-specific solution pages (8 pages)
│   │   ├── agencias-marketing.tsx
│   │   ├── equipos-ventas.tsx
│   │   ├── wedding-planners.tsx
│   │   ├── startups.tsx
│   │   ├── finanzas.tsx
│   │   ├── consultores.tsx
│   │   ├── venues.tsx
│   │   └── distribuidores.tsx
│   ├── pricing.tsx          # Pricing plans
│   ├── demo.tsx             # Product demo
│   ├── contacto.tsx         # Contact form
│   ├── agendar-reunion.tsx  # Schedule meeting page
│   ├── soporte.tsx          # Support page
│   ├── politicas.tsx        # Policies (privacy, terms)
│   ├── marcablanca.tsx      # White-label solution
│   ├── masterclass.tsx      # Training/masterclass
│   └── [...slug].js         # Catch-all route
├── components/
│   ├── shared/              # Reusable page-building components
│   │   ├── HeroSection.tsx       # Hero with badge, CTAs, benefits, breadcrumb
│   │   ├── FeatureGrid.tsx       # Grid layout for features with icons
│   │   ├── FAQSection.tsx        # Accordion FAQ
│   │   ├── ComparisonTable.tsx   # Feature comparison table
│   │   ├── TestimonialSection.tsx
│   │   ├── PainPointsSection.tsx
│   │   ├── CTASection.tsx        # Call-to-action section
│   │   ├── StatsBar.tsx          # Statistics/metrics bar
│   │   └── SectionHeader.tsx     # Reusable section header
│   ├── Navbar/              # Navigation (Navbar, MegaDropdown, DropdownMenu)
│   ├── Header/              # Hero section (IndexHeader, Carusel, Card)
│   ├── Footer/              # Footer (IndexFooter)
│   ├── Informations/        # Info cards section
│   ├── Solutions/           # Solutions section + ProductFeatures
│   ├── Testimonies/         # Testimonials section
│   ├── Socials/             # Social events (weddings, parties) + Modales/
│   ├── Ticketing/           # Event ticketing section + Modales/
│   ├── Ayuda/               # Help/support section
│   ├── LanguageSelector/    # Language switcher dropdown
│   ├── Modal.tsx            # Generic modal wrapper
│   ├── Socials.tsx          # Socials wrapper export
│   └── Tiketing.tsx         # Ticketing wrapper export (note: "Tiketing" spelling)
├── hooks/
│   └── useScrollReveal.ts   # IntersectionObserver hook for scroll animations
├── lib/
│   └── getMessages.ts       # i18n helpers: getMessagesForLocale(), getI18nProps()
├── utils/
│   └── Fetching.tsx         # GraphQL API client (fetchApi + predefined queries)
├── api.tsx                  # Axios instance for GraphQL (base: api.bodasdehoy.com)
├── messages/                # i18n JSON files
│   ├── es.json (default)
│   ├── en.json, fr.json, de.json, it.json, pt.json
│   ├── zh.json, ko.json, ja.json
├── styles/
│   └── globals.css          # Tailwind directives + custom animations + Swiper styles
├── public/
│   ├── image/               # SVG banners and logos
│   ├── manifest.json        # PWA manifest
│   ├── robots.txt
│   └── sitemap.xml
└── Configuration files
    ├── next.config.mjs      # i18n locales, security headers, URL redirects
    ├── tailwind.config.ts
    ├── tsconfig.json         # Path alias: @/* → ./*
    └── postcss.config.mjs
```

## Architecture & Patterns

### Pages Router (not App Router)

This project uses Next.js **Pages Router**. All routes live under `pages/`. Do NOT create files in an `app/` directory.

### Page Template Pattern

Every page follows this structure:

```tsx
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';
// + shared components from components/shared/

const MyPage = () => (
  <>
    <Head>
      <title>Page Title | EventosOrganizador</title>
      <meta name="description" content="..." />
    </Head>
    <Navbar />
    {/* Page content using shared components */}
    <Footer />
  </>
);

export default MyPage;

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale ?? 'es'}.json`)).default,
    },
  };
}
```

**Key points:**
- Always include `<Head>` with `<title>` and `<meta name="description">`
- Always wrap content with `<Navbar />` and `<Footer />`
- Always export `getStaticProps` with i18n messages loading
- For nested pages (e.g., `funcionalidades/crm.tsx`), adjust the import path: `../../messages/...`

### Shared Components (components/shared/)

Feature and solution pages are built by composing shared components. Use these instead of writing custom sections:

| Component | Purpose | Key Props |
|-----------|---------|-----------|
| `HeroSection` | Page hero with badge, title, CTAs, benefits, breadcrumb | `badge`, `title` (ReactNode), `subtitle`, `primaryCTA`, `secondaryCTA`, `benefits`, `breadcrumb` |
| `FeatureGrid` | Grid of feature cards with icons | `features` (array with icon/title/description), `cols` |
| `FAQSection` | Accordion FAQ list | `faqs` (array with question/answer) |
| `ComparisonTable` | Us-vs-competitors table | `rows`, `title`, `subtitle` |
| `TestimonialSection` | Testimonial cards | `testimonials` (array with name/role/company/quote/metrics) |
| `PainPointsSection` | Problem/pain point cards | `painPoints` (array with emoji/title/description) |
| `CTASection` | Call-to-action banner | `title`, `description`, `guarantees` |
| `StatsBar` | Metric statistics row | `stats` (array with value/label) |

### Internationalization (i18n)

- **Library**: `next-intl` via `NextIntlClientProvider` in `_app.tsx`
- **Locales**: `es` (default), `en`, `fr`, `it`, `de`, `pt`, `zh`, `ko`, `ja`
- **Message files**: `messages/{locale}.json`
- **Timezone**: `Europe/Madrid`
- **Usage in components**: `useTranslations()` from `next-intl`
- **Page-level**: Messages loaded via `getStaticProps` → `context.locale`
- When adding new UI text, add keys to all 9 locale files

### Styling Conventions

- **Primary color**: `#6096B9` (blue-gray, used as brand accent)
- **Secondary color**: `#4b7591` (darker variant for hovers)
- **Background**: White (`bg-white`) for most sections, `bg-gray-50` for alternating sections
- **Text**: `text-gray-900` (headings), `text-gray-600` (body), `text-gray-500` (secondary), `text-gray-400` (tertiary)
- **Max width**: `max-w-[1200px] mx-auto` for page content containers
- **Padding**: `px-4` or `px-6` horizontal, `py-20` vertical for sections
- **Border radius**: `rounded-2xl` for cards, `rounded-xl` for buttons, `rounded-lg` for smaller elements
- Use Tailwind utility classes; avoid inline styles except for dynamic brand color application
- Custom CSS animations defined in `styles/globals.css` (fadeIn, slideDown, slideUp, gradient, shine, float, pulse-glow, scale-in, bounce-in, wave)
- Custom utility classes: `.glassmorphism`, `.pattern-dots`, `.pattern-grid`, `.mesh-gradient`, `.button-press`, `.skeleton`

### Component Naming Conventions

- **Index components**: Named `Index{Section}.tsx` (e.g., `IndexHeader.tsx`, `IndexFooter.tsx`, `IndexSocials.tsx`)
- **Card components**: Named `Card{N}.tsx` within their parent directory
- **Modal components**: Placed in `Modales/` subdirectory, named `Modal{Feature}.tsx`
- **Pages**: Use kebab-case filenames matching URL slugs (e.g., `agencias-marketing.tsx`, `wedding-planners.tsx`)

### GraphQL API

- **Base URL**: `https://api.bodasdehoy.com/graphql`
- **Client**: Axios instance in `api.tsx`, wrapper in `utils/Fetching.tsx`
- **Auth header**: `Development: "4net"`
- **Available queries**: `getChannel`, `getAllPost`, `getGeoInfo`, `setConnet`
- Supports file uploads via FormData (Apollo-compatible protocol)

### SEO

- Schema.org JSON-LD in `_document.tsx`: SoftwareApplication, Organization, WebSite
- Each page sets its own `<title>` and `<meta name="description">` via `next/head`
- Open Graph + Twitter Card meta tags on homepage
- `hreflang` tags for all 9 locales in `_document.tsx`
- Security headers configured in `next.config.mjs` (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy)

### URL Redirects

Legacy routes are redirected in `next.config.mjs`. When removing or renaming pages, add a redirect entry there rather than deleting old URLs.

## Environment Variables

Required for Google Calendar API integration (see `.env.local.example`):

```
GOOGLE_PROJECT_ID
GOOGLE_PRIVATE_KEY_ID
GOOGLE_PRIVATE_KEY
GOOGLE_CLIENT_EMAIL
GOOGLE_CLIENT_ID
GOOGLE_CALENDAR_ID
GOOGLE_ORGANIZER_EMAIL
```

These are only needed for the meeting scheduling feature. The site builds and runs without them.

## Important Notes

- **No test suite**: There are no unit/integration tests. Be extra careful with changes and verify with `npm run build`.
- **Path alias**: `@/*` maps to project root (configured in `tsconfig.json`).
- **Spanish-first**: Default content language is Spanish. Page copy is mostly hardcoded in Spanish on feature/solution pages; only the homepage and navigation use i18n message keys extensively.
- **Typo in codebase**: "Tiketing" is used throughout (component names, file names) instead of "Ticketing". Maintain this spelling for consistency unless doing a full rename.
- **Large SVG banners**: `public/image/banner*.svg` files are very large (8-26 MB each). Avoid adding more large assets without optimization.
- **`package copy.json`**: This is a backup file; the actual config is `package.json`.
- **Data directory**: The `/data` directory (gitignored) stores booking JSON files created by the `agendar-reunion` API route at runtime.
- **No ESLint config file**: Linting uses Next.js defaults (`next lint`).

## Workflow for Adding New Pages

1. Create the page file in the appropriate directory under `pages/`
2. Follow the page template pattern above (Head, Navbar, content, Footer, getStaticProps)
3. Compose the page using shared components from `components/shared/`
4. If the page needs new i18n keys, add them to all 9 message files in `messages/`
5. Add navigation links in `components/Navbar/Navbar.tsx` if needed
6. Verify the build succeeds with `npm run build`
7. If replacing an old URL, add a redirect in `next.config.mjs`

## Workflow for Adding New Shared Components

1. Create the component in `components/shared/`
2. Use TypeScript interfaces for props
3. Follow the existing pattern: FC with explicit props interface
4. Use Tailwind classes with the project's color scheme (`#6096B9` brand color)
5. Keep components stateless where possible; use hooks for interactivity
