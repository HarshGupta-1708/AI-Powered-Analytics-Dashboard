# 🚀 AI-Powered Analytics Dashboard

A modern, responsive analytics dashboard built with Next.js, TypeScript, and Tailwind CSS. This dashboard provides comprehensive data visualization with interactive charts, real-time metrics, and a clean, professional interface.

![Dashboard Preview](https://ai-powered-analytics-dashboard-kappa.vercel.app/)

## ✨ Features

### 📊 **Interactive Data Visualization**
- **Line Charts**: Revenue trends over time with smooth animations
- **Bar Charts**: User and conversion comparisons across campaigns
- **Pie Charts**: Traffic source distribution with percentage breakdowns
- **Data Tables**: Sortable and filterable campaign performance data

### 🎨 **Modern UI/UX**
- **Dark/Light Mode**: Seamless theme switching
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Smooth Animations**: Enhanced user experience with CSS transitions
- **Professional Styling**: Clean, modern interface with Tailwind CSS

### ⚡ **Performance Optimized**
- **Next.js 15**: Latest framework with App Router
- **TypeScript**: Type-safe development
- **Turbopack**: Fast development builds
- **Optimized Charts**: Efficient data rendering with Recharts

### 🔧 **Developer Friendly**
- **TypeScript**: Full type safety
- **ESLint**: Code quality enforcement
- **Modular Architecture**: Reusable components
- **Clean Code**: Well-structured and documented

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Build Tool**: [Turbopack](https://turbo.build/pack)

## 📱 Demo

**🔗 Live Demo**: [Add your demo link here]

*Note: Replace the placeholder above with your actual deployed demo URL*

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HarshGupta-1708/AI-Powered-Analytics-Dashboard.git
   cd AI-Powered-Analytics-Dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ai-dashboard/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout with navigation
│   │   ├── page.tsx           # Main dashboard page
│   │   ├── profile/           # Profile page
│   │   ├── settings/          # Settings page
│   │   └── logout/            # Logout page
│   ├── components/            # Reusable UI components
│   │   ├── ChartBar.tsx       # Bar chart component
│   │   ├── ChartLine.tsx      # Line chart component
│   │   ├── ChartPie.tsx       # Pie chart component
│   │   ├── DataTable.tsx      # Data table component
│   │   ├── MetricCard.tsx     # Metric card component
│   │   └── Navbar.tsx         # Navigation component
│   ├── data/                  # Sample data and types
│   │   └── sampleData.ts      # Mock data for charts
│   └── lib/                   # Utility functions
│       └── utils.ts           # Helper functions
├── public/                    # Static assets
└── package.json              # Dependencies and scripts
```

## 🎯 Key Components

### 📈 Chart Components

- **ChartLine**: Revenue trends with interactive tooltips
- **ChartBar**: Campaign performance comparison
- **ChartPie**: Traffic source distribution
- **DataTable**: Sortable and filterable data grid

### 🎨 UI Components

- **MetricCard**: Key performance indicators
- **Navbar**: Responsive navigation with theme toggle
- **Responsive Design**: Mobile-first approach

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🎨 Customization

### Adding New Charts

1. Create a new component in `src/components/`
2. Import and use Recharts components
3. Add proper TypeScript interfaces
4. Include in the main dashboard page

### Modifying Data

Update the sample data in `src/data/sampleData.ts`:

```typescript
export const metrics = [
  { title: "Revenue", value: "$12,300", change: "+5%", icon: "💰" },
  // Add more metrics...
];
```

### Styling

The project uses Tailwind CSS for styling. Customize the theme in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        // Add custom colors...
      }
    }
  }
}
```

## 📊 Data Structure

### Metrics
```typescript
interface Metric {
  title: string;
  value: string;
  change: string;
  icon: string;
}
```

### Chart Data
```typescript
// Line Chart
interface LineChartData {
  month: string;
  revenue: number;
}

// Bar Chart
interface BarChartData {
  name: string;
  users: number;
  conversions: number;
}

// Pie Chart
interface PieChartData {
  name: string;
  value: number;
}
```

## 🌟 Features in Detail

### Interactive Charts
- **Hover Effects**: Detailed tooltips on chart interaction
- **Responsive**: Charts adapt to screen size
- **Animations**: Smooth transitions and loading states
- **Accessibility**: Screen reader friendly

### Data Management
- **Sorting**: Click column headers to sort data
- **Filtering**: Search through campaign data
- **Pagination**: Navigate through large datasets
- **Export**: Ready for data export functionality

### Performance
- **Lazy Loading**: Components load on demand
- **Optimized Rendering**: Efficient chart updates
- **Memory Management**: Proper cleanup and optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Recharts](https://recharts.org/) for beautiful chart components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide](https://lucide.dev/) for beautiful icons

## 📞 Contact

**Harsh Gupta** - [@HarshGupta-1708](https://github.com/HarshGupta-1708)

Project Link: [https://github.com/HarshGupta-1708/AI-Powered-Analytics-Dashboard](https://github.com/HarshGupta-1708/AI-Powered-Analytics-Dashboard)

---

⭐ **Star this repository if you found it helpful!**
