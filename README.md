# Tailwind CSS v4 + shadcn/ui Component Showcase

A comprehensive component showcase project featuring **Tailwind CSS v4.1.14** with **shadcn/ui** components. Perfect for designers and developers to explore, customize, and implement UI components.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Run

```bash
# Clone the repository
git clone <your-repo-url>
cd tailwind-v4-demo

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview
```

## 🎨 Designer-Friendly Customization

### Edit Design Tokens
All design tokens are in `src/style.css` - simply modify the CSS variables:

```css
@theme {
  /* Primary Brand Colors */
  --color-primary: #1ca8e1;           /* Change this for your brand color */
  --color-primary-foreground: #ffffff;
  
  /* Background Colors */
  --color-background: #ffffff;        /* Main background */
  --color-foreground: #000000;        /* Main text color */
  
  /* Border & Input Colors */
  --color-border: #d9d9d9;           /* All borders */
  --color-input: #d9d9d9;            /* Input fields */
  
  /* Semantic Colors */
  --color-success: #5cb85c;          /* Success states */
  --color-error: #e13d3d;            /* Error states */
  --color-warning: #ffc107;          /* Warning states */
  --color-info: #17a2b8;             /* Info states */
  
  /* Border Radius */
  --radius: 10px;                    /* Default border radius */
}
```

### Dark Mode
Dark mode tokens are in the `.dark` section - customize both light and dark themes.

## 📱 Component Showcase

The project includes 6 organized showcase pages:

- **Basic Components** - Button, Badge, Avatar, Separator
- **Form Components** - Input, Label, Checkbox, Radio, Switch, Select
- **Feedback Components** - Alert, Dialog, Toast, Tooltip, Spinner, Skeleton
- **Navigation Components** - Tabs, Breadcrumb, Navigation Menu, Pagination
- **Data Components** - Table, Card, Accordion, Empty State
- **Advanced Components** - Dropdown Menu, Popover, Typography, Charts

Each component includes:
- ✅ All variants and states
- ✅ Documentation links (shadcn/ui + Tailwind v4)
- ✅ CSS variable mapping
- ✅ Interactive examples

## 🛠 Tech Stack

- **Tailwind CSS v4.1.14** - CSS-first configuration
- **shadcn/ui** - High-quality React components
- **React 18** + TypeScript
- **Vite** - Fast build tool
- **Radix UI** - Accessible primitives

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── BasicComponents.tsx    # Button, Badge, Avatar, Separator
│   ├── FormComponents.tsx     # Input, Label, Checkbox, etc.
│   ├── FeedbackComponents.tsx # Alert, Dialog, Toast, etc.
│   ├── NavigationComponents.tsx # Tabs, Breadcrumb, etc.
│   ├── DataComponents.tsx     # Table, Card, Accordion, etc.
│   └── AdvancedComponents.tsx # Dropdown, Popover, etc.
├── style.css                  # Design tokens (customize here!)
└── App.tsx                    # Main application
```

## 🎯 Key Features

- **Designer-Friendly** - Edit CSS variables directly
- **Component Documentation** - Links to shadcn/ui and Tailwind docs
- **CSS Variable Mapping** - See which variables control what
- **Dark Mode Support** - Toggle between light/dark themes
- **Responsive Design** - Works on all screen sizes
- **Accessible** - Built with Radix UI primitives

## 🔧 Development

### Add New Components
```bash
npx shadcn@latest add [component-name]
```

### Customize Components
Edit the component files in `src/components/` to add new variants or examples.

### Update Design Tokens
Modify `src/style.css` - changes apply instantly with hot reload.

## 📚 Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs/v4)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)

---

**Perfect for:** Designers, developers, and teams building modern web applications with a consistent design system.