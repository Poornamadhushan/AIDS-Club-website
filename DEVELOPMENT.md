# Development Guide - AIDS Club Website

## Project Setup

This is a React-based Single Page Application (SPA) for the AI and Data Science Club website.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm start

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.js
│   ├── Footer.js
│   └── CountdownTimer.js
├── pages/              # Page components (one per page)
│   ├── LandingPage.js
│   ├── OverviewPage.js
│   ├── EventsPage.js
│   ├── ProjectsPage.js
│   ├── PublicationsPage.js
│   ├── TeamPage.js
│   ├── AlumniPage.js
│   ├── ContactPage.js
│   └── JoinPage.js
├── data/
│   └── membersData.js  # Centralized data source
├── App.js              # Main router component
├── index.js            # React entry point
└── index.css           # Global styles & theme
```

## Key Technologies

- **React 18.2.0** - UI framework
- **React Router 6.14.2** - Client-side routing
- **React Icons 4.11.0** - Icon library
- **CSS3** - Styling with variables, Grid, Flexbox

## Color Palette

```css
--primary: #1e3a8a (Deep Blue)
--secondary: #7c3aed (Purple)
--accent: #06b6d4 (Cyan)
--dark: #0f172a
--light: #f8fafc
--success: #10b981
--warning: #f59e0b
--error: #ef4444
```

## Customization Guide

### Adding a New Member

Edit `src/data/membersData.js`:

```javascript
{
  id: 20,
  name: "New Member",
  role: "Position",
  bio: "Short biography",
  image: "https://i.pravatar.cc/150?img=20",
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
  funFact: "Fun fact here"
}
```

### Adding a New Event

Edit `src/data/membersData.js`:

```javascript
{
  id: 6,
  title: "Event Title",
  date: "2025-05-15",
  time: "2:00 PM",
  description: "Event description",
  category: "Workshop",
  location: "Room 101",
  capacity: 50,
  image: "https://source.unsplash.com/400x300/?event"
}
```

### Changing Colors

Edit `src/index.css` (lines 1-20):

```css
:root {
  --primary: #1e3a8a;    /* Change main theme color */
  --secondary: #7c3aed;   /* Change secondary color */
  --accent: #06b6d4;      /* Change accent color */
  /* ... other variables */
}
```

## Development Server

Run `npm start` to start the development server with:
- Hot Module Replacement (HMR)
- Error overlay
- Fast refresh

The app will open at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

Creates optimized production build in `/build` folder.

## Form Data

### Contact Form (localStorage key: 'inquiries')
Stores contact inquiries with timestamp and ID.

### Membership Form (localStorage key: 'memberships')
Stores membership applications with:
- Full name, email, phone
- Selected interests (array)
- Experience level
- Optional message

## Responsive Breakpoints

- **Mobile:** < 480px
- **Tablet:** 480px - 768px
- **Desktop:** > 768px

## CSS Features

- CSS Grid with auto-fit responsive columns
- CSS Flexbox for component layouts
- CSS Variables for theming
- CSS Animations (fadeIn, slideIn, pulse, bounce)
- Media queries for responsive design

## Common Tasks

### Add a New Page

1. Create `src/pages/NewPage.js`
2. Create `src/pages/NewPage.css`
3. Add route in `src/App.js`
4. Add navigation link in `src/components/Navigation.js`

### Update Animations

Edit animation keyframes in `src/index.css`:

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Modify Navigation Links

Edit `src/components/Navigation.js` - update `<Link>` components with new paths.

## Testing Locally

1. Start server: `npm start`
2. Open: `http://localhost:3000`
3. Test all pages and forms
4. Test mobile view (DevTools)
5. Test form submissions (check browser localStorage)

## Deployment

See `README.md` for deployment options and instructions.

## Troubleshooting

### Port 3000 already in use
```bash
# Kill process on port 3000
npx kill-port 3000
npm start
```

### Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails
```bash
npm cache clean --force
npm install
npm run build
```

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature

# Commit changes
git add .
git commit -m "feat: description"

# Push to remote
git push origin feature/your-feature

# Create PR on GitHub
```

## Performance Tips

- Use React DevTools to profile components
- Lazy load heavy components
- Optimize images
- Minimize CSS/JS bundles

## Resources

- [React Docs](https://react.dev)
- [React Router](https://reactrouter.com)
- [React Icons](https://react-icons.github.io/react-icons/)
- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)

---

**Last Updated:** April 18, 2026
**Maintained by:** Development Team
