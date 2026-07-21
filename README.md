# Nirman 360 - Construction & Home Design Platform

A modern React + Vite application for construction planning and home design services across Roorkee, Haridwar, Dehradun, and Saharanpur.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/adnanraza1993-svg/Nirman360.git
cd Nirman360

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
Nirman360/
├── src/
│   ├── App.jsx          # Main component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles with Tailwind
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── README.md            # This file
```

## 🛠️ Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **lucide-react** - Icon library
- **PostCSS** - CSS processor

## 🌐 Features

- **Planning Tools**: Naksha Generator, BOQ Estimator, Land Unit Converter, Vaastu Guide, Property Valuation
- **Site Services**: Supervision, Structural Design, Interior & MEP, Renovation
- **Multi-region Coverage**: Roorkee, Haridwar, Dehradun, Saharanpur
- **Responsive Design**: Mobile-first approach
- **Modern UI**: Clean, professional design with smooth animations

## 📦 Deployment

### Option 1: Vercel (Recommended)

```bash
npm install -g vercel
vercel --prod
```

### Option 2: Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Option 3: GitHub Pages

Update `vite.config.js` to add:
```javascript
export default defineConfig({
  base: '/Nirman360/',
  plugins: [react()],
});
```

Then push to GitHub and enable GitHub Pages in repository settings.

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 👨‍💼 Author

Adnan Raza - [@adnanraza1993-svg](https://github.com/adnanraza1993-svg)
