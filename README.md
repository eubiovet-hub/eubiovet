# Oryx Life Sciences Landing Page

A Next.js landing page for Oryx Life Sciences with tabbed interface for product information.

## Features

- **Product Label Tab**: English and Afrikaans language options
- **Product Information Tab**: Placeholder for Product Information Leaflet (PIL)
- **General Tab**: About, Contact, Privacy & Terms sections
- Built with Next.js, TypeScript, and Tailwind CSS
- Ready for deployment on Vercel

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Deployment

This project is configured for Vercel deployment. Push to your repository and connect it to Vercel for automatic deployments.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
└── components/
    ├── Tabs.tsx         # Main tab component
    └── tabs/
        ├── ProductLabel.tsx
        ├── ProductInformation.tsx
        └── General.tsx
```

## Next Steps

- Add actual product label content (2MB file)
- Add Product Information Leaflet (PIL) once signed off
- Update contact email and Oryx URL
- Add Privacy Policy and Terms & Conditions pages
- Customize colors and branding as needed
