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
<img width="817" height="540" alt="image" src="https://github.com/user-attachments/assets/6000dcea-7a28-4401-b1f5-323f4f940a40" />



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

1. **Click on the Icon next to Theme Switcher**

   - Click on the icon next to Theme Switcher Icon ( Or Sun Icon).
      
      <img width="499" height="387" alt="image" src="https://github.com/user-attachments/assets/6b606644-789d-459d-8beb-979c325f63f6" />


2. **Direct URL:**

   - Go to [https://jaysmilet.github.io/dashboard-ui/#/order-list](https://jaysmilet.github.io/dashboard-ui/#/order-list) in your browser.
     <img width="823" height="378" alt="image" src="https://github.com/user-attachments/assets/9ec77817-c8c5-46f6-9155-06056cca655b" />


3. **Via App Navigation:**
   - Use a `<Link to="/order-list">Order List</Link>` or call `navigate("/order-list")` from any component using React Router.

When you are on the `/order-list` route, the right sidebar will be hidden and the main content area will expand to fill the space automatically.

## Back to the Dashboard from 'Order List' Page
   - Just click on the Dashboard text to go back to 'Dashboard'

     <img width="495" height="374" alt="image" src="https://github.com/user-attachments/assets/08203f41-1876-4669-bc59-f58eb70b3a34" />


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
