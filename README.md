# Dashboard UI

This is a modern React dashboard application built with TypeScript, Vite, Tailwind CSS, and Recharts. It features a responsive layout, sidebar navigation, charts, and an order list page.

## Features

- Responsive dashboard layout with left and right sidebars
- Main content area with charts and statistics
- Order List page with table, search, and pagination
- Routing via React Router
- Styled with Tailwind CSS and custom variables

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd dashboard-ui
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open the live app at [https://jaysmilet.github.io/dashboard-ui/](https://jaysmilet.github.io/dashboard-ui/)

## Project Structure

- `src/` - Main source code
  - `components/` - Reusable UI components
  - `charts/` - Chart components (Bar, Pie, Revenue, etc.)
  - `pages/` - Application pages (e.g., OrderList)
  - `static/` - Static data
  - `hooks/` - Custom hooks
  - `DashboardLayout.tsx` - Main layout and routing
  - `App.tsx` - App entry point

## Routing

The app uses React Router for navigation. Main routes:

- `/` - Dashboard main page
- `/order-list` - Order List page

## How to Navigate to the 'Order List' Page

You can access the Order List page in two ways:

1. **Direct URL:**

   - Go to [https://jaysmilet.github.io/dashboard-ui/#/order-list](https://jaysmilet.github.io/dashboard-ui/#/order-list) in your browser.

2. **Via App Navigation:**
   - Use a `<Link to="/order-list">Order List</Link>` or call `navigate("/order-list")` from any component using React Router.

When you are on the `/order-list` route, the right sidebar will be hidden and the main content area will expand to fill the space automatically.

## Build & Deploy

- Build for production:
  ```sh
  npm run build
  ```
- Preview production build:
  ```sh
  npm run preview
  ```
- Deploy to GitHub Pages:
  ```sh
  npm run deploy
  ```

## Customization

- Edit `src/static/static-data.ts` for demo data
- Update styles in `src/index.css` and `tailwind.config.js`

## License

MIT
