# AXPO Contract

A React application for displaying contract information in an expandable accordion format.

## Features

- **Accordion Interface**: Expandable/collapsible contract overview sections
- **Responsive Design**: Mobile-first approach with grid layouts that adapt to screen size
- **Accessibility**: Proper ARIA labels, keyboard navigation, and screen reader support
- **Text Overflow Handling**: Automatic tooltips for truncated text
- **Country Flags**: Visual indicators with SVG flag icons

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
cd axso_etrm_frontend_coding_challenge
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

## Approach

### Component Architecture

- **App.jsx**: Main component that fetches contract data and orchestrates the layout
- **Accordion.jsx**: Reusable accordion component with open/close state management
- **ContractAccordion.jsx**: Contract-specific implementation with grid layout and overflow detection

### Key Implementation Details

1. **Data Fetching**: Contracts are loaded from `public/contracts.json` using the Fetch API
2. **State Management**: React hooks (useState, useEffect, useRef) for component state and side effects
3. **Overflow Detection**: Uses refs to measure text width and conditionally show tooltips
4. **CSS Variables**: Centralized design tokens for colors, spacing, and typography
5. **Responsive Grid**: 2-column layout on desktop, single column on mobile

### Styling Approach

- CSS Modules for component-specific styles
- Global CSS variables for consistent theming
- Mobile-first responsive design with media queries
- Custom animations for accordion expand/collapse

## Project Structure

```
src/
├── components/
│   ├── Accordion.jsx
│   ├── Accordion.css
│   ├── ContractAccordion.jsx
│   └── ContractAccordion.css
├── assets/
│   ├── logo.svg
│   └── chevron_up.svg
├── App.jsx
└── styles.css
public/
├── contracts.json
└── FR.svg
```
