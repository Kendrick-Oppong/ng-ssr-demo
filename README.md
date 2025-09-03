# Angular SSR Demo - CSR, SSR, and SSG Showcase

This project demonstrates the differences between Client-Side Rendering (CSR), Server-Side Rendering (SSR), and Static Site Generation (SSG) using Angular with the Platzi Fake API.

## Features Demonstrated

### 🖥️ Client-Side Rendering (CSR)
- Data fetched after component initialization
- Loading states visible to users
- Interactive client-side behavior
- Route: `/csr`

### 🌐 Server-Side Rendering (SSR)
- Content rendered on the server
- Immediate content visibility
- Better SEO and social sharing
- Hydration for interactivity
- Route: `/ssr`

### 📄 Static Site Generation (SSG)
- Pre-rendered content concepts
- Fastest loading performance
- CDN-friendly static content
- Route: `/ssg`

### 🔄 Hydration & Event Replay
- Demonstrates Angular's hydration process
- Event replay functionality
- Incremental hydration features
- Interactive elements post-hydration

## API Integration

Uses the [Platzi Fake API](https://fakeapi.platzi.com/) to demonstrate:
- Product listings
- Product details
- Category information
- Real-world data fetching scenarios

## Development Commands

```bash
# Start development server (CSR mode)
ng serve

# Build and serve with SSR
ng build
npm run serve:ssr:ng-ssr-demo

# Development with SSR
ng serve --ssr
```

## Key Technologies

- Angular 20.2.0
- Angular SSR
- Angular Hydration with Event Replay
- Incremental Hydration
- HttpClient with Fetch API
- Standalone Components
- Angular Signals

## Project Structure

```
src/app/
├── components/
│   ├── home/              # Landing page with explanations
│   ├── csr-demo/          # Client-side rendering demo
│   ├── ssr-demo/          # Server-side rendering demo
│   ├── ssg-demo/          # Static site generation demo
│   └── product-detail/    # Product details with hydration demo
├── services/
│   └── product.service.ts # API service for Platzi Fake API
└── app.routes.ts          # Application routing
```

## Presentation Topics Covered

1. **CSR vs SSR vs SSG** - When to use each approach
2. **Hydration** - How Angular makes server-rendered content interactive
3. **Event Replay** - Capturing and replaying user interactions during hydration
4. **Incremental Hydration** - Progressive enhancement of interactivity
5. **Performance Implications** - Loading times, SEO, and user experience
6. **Real-world API Integration** - Practical examples with external APIs

Perfect for presentations about modern Angular rendering strategies and performance optimization techniques.