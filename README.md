# AI and Data Science Club Website

A modern, responsive multi-page website for the AI and Data Science Club built with React, featuring comprehensive member profiles, event management, project showcase, and membership system.

## Features

✨ **9 Complete Pages:**
- **Landing Page** - Hero section with countdown timer and club highlights
- **Overview Page** - Vision, mission, core values, and membership benefits
- **Events Page** - Tabbed interface for upcoming and past events
- **Projects Page** - Project showcase with filtering and challenge section
- **Publications Page** - Articles and news with category filtering
- **Team Page** - 19 member profiles with GitHub and LinkedIn links
- **Alumni Page** - Alumni achievements and success stories
- **Contact Page** - Contact form with validation and FAQ
- **Join Page** - Membership application form with interests and experience levels

### Design & UX
- 📱 **Fully Responsive** - Mobile-first design with breakpoints at 1024px, 768px, 480px
- 🎨 **Professional Theme** - Blue, purple, and cyan color palette with CSS variables
- ✨ **Animations** - Smooth transitions, hover effects, and staggered animations
- 🎯 **Clean Code** - Separated components and CSS files for maintainability
- ♿ **Semantic HTML** - Proper form structures and accessibility attributes

### Technical Features
- 🔄 **Form Handling** - Contact and membership forms with localStorage persistence
- ⏱️ **Countdown Timer** - Live event countdown in days/hours/minutes/seconds
- 🔍 **Content Filtering** - Tag-based project filtering and category-based publication filtering
- 🎪 **Tab Navigation** - Organized event display with tabbed interface
- 🔗 **Social Integration** - GitHub, LinkedIn, and WhatsApp links throughout
- 💾 **Data Persistence** - Form submissions stored in browser localStorage

## Project Structure

```
src/
├── components/
│   ├── Navigation.js       # Main navigation bar with responsive menu
│   ├── Navigation.css
│   ├── Footer.js           # Footer with social links and info
│   ├── Footer.css
│   ├── CountdownTimer.js   # Live countdown component
│   └── CountdownTimer.css
├── pages/
│   ├── LandingPage.js      # Home page with hero section
│   ├── LandingPage.css
│   ├── OverviewPage.js     # Club overview and mission
│   ├── OverviewPage.css
│   ├── EventsPage.js       # Events with tabs
│   ├── EventsPage.css
│   ├── ProjectsPage.js     # Projects and challenges
│   ├── ProjectsPage.css
│   ├── PublicationsPage.js # Articles and news
│   ├── PublicationsPage.css
│   ├── TeamPage.js         # 19 team members
│   ├── TeamPage.css
│   ├── AlumniPage.js       # Alumni profiles
│   ├── AlumniPage.css
│   ├── ContactPage.js      # Contact form
│   ├── ContactPage.css
│   ├── JoinPage.js         # Membership form
│   └── JoinPage.css
├── data/
│   └── membersData.js      # All data: members, events, projects, etc.
├── App.js                  # Main router component
├── index.js                # React entry point
└── index.css               # Global styles and theme variables
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone or download the project**
   ```bash
   cd AIDS-Club-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

4. **Build for production**
   ```bash
   npm run build
   ```
   Creates an optimized production build in the `build` folder

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (irreversible)

## Key Technologies

- **React 18.2.0** - UI framework
- **React Router DOM 6.14.2** - Client-side routing
- **React Icons 4.11.0** - Icon library
- **CSS3** - Styling with variables, Grid, Flexbox, and animations

## Color Palette

- **Primary Blue**: `#1e3a8a`
- **Secondary Purple**: `#7c3aed`
- **Accent Cyan**: `#06b6d4`
- **Dark**: `#0f172a`
- **Light**: `#f8fafc`
- **Success**: `#10b981`
- **Warning**: `#f59e0b`
- **Error**: `#ef4444`

## Features Overview

### Forms & Data Persistence
- **Contact Form** - Sends inquiry to localStorage under 'inquiries' key
- **Membership Form** - Registers new members to 'memberships' key
- Both include timestamp and unique ID for tracking

### Navigation
- Sticky navigation bar with responsive hamburger menu
- Links to all 9 pages
- Active page highlighting
- Smooth scrolling

### Responsive Breakpoints
- **Desktop**: 1024px and above (full layout)
- **Tablet**: 768px - 1023px (adjusted grid columns)
- **Mobile**: Below 768px (single column layouts, full hamburger menu)

### Member Profiles
- 19 team members with:
  - Profile pictures
  - Name, role, and bio
  - Fun facts
  - GitHub and LinkedIn links
- 5 alumni members with achievements

### Event Management
- Upcoming events with countdown timer
- Past events with attendance info
- Event categories and filtering
- Date, location, and capacity information

### Projects & Challenges
- 6 projects with tags and GitHub links
- 3 challenges with difficulty levels
- Project status (Completed/In Progress)
- Tag-based filtering system

### Publications & News
- 5 articles with category tags
- Read time and author information
- Publication date and category filtering
- Newsletter subscription integration

## Form Data Structure

### Contact Inquiry (localStorage key: 'inquiries')
```javascript
{
  name: string,
  email: string,
  message: string,
  timestamp: ISO string,
  id: number
}
```

### Membership Application (localStorage key: 'memberships')
```javascript
{
  fullName: string,
  email: string,
  phone: string,
  interests: string[], // Array of selected interests
  experience: string, // 'beginner', 'intermediate', 'advanced'
  message: string,
  timestamp: ISO string,
  id: number
}
```

## Customization

### Updating Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary: #1e3a8a;
  --secondary: #7c3aed;
  --accent: #06b6d4;
  /* ... other variables */
}
```

### Adding/Editing Content
All content is centralized in `src/data/membersData.js`. Edit the arrays to:
- Add/remove/update team members
- Modify events
- Update projects and challenges
- Change publications

### Updating Member Data
```javascript
{
  id: 1,
  name: "Member Name",
  role: "Position",
  bio: "Short bio",
  image: "https://i.pravatar.cc/150?img=1",
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
  funFact: "Fun fact here"
}
```

## Image Sources

- **Member Avatars**: Pravatar.cc (auto-generated placeholder avatars)
- **Event/Project Images**: Unsplash (royalty-free images)
- **Icons**: React Icons library (FontAwesome and others)

To use real images:
1. Upload images to a hosting service (Cloudinary, AWS S3, etc.)
2. Update image URLs in `membersData.js`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Deployment

### Deploy to Netlify
1. Push code to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `build`

### Deploy to Vercel
1. Import project from GitHub
2. Build settings auto-configured for React
3. Deploy with one click

### Deploy to GitHub Pages
1. Add to package.json: `"homepage": "https://yourusername.github.io/AIDS-Club-website"`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Run: `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML elements (form, fieldset, legend, label)
- ARIA labels on interactive elements
- High contrast color combinations
- Keyboard navigation support
- Proper heading hierarchy

## Future Enhancements

- Backend API integration for form submissions
- User authentication for member dashboard
- Event registration system
- Dynamic gallery for project images
- Blog or news feed
- Member directory with search
- Real-time notifications
- Analytics integration

## Support & Contributing

For questions or suggestions:
- 📧 Email: contact@aidsclub.edu
- 🐙 GitHub Issues: [Create an issue]
- 💬 WhatsApp: [+1 (555) 000-0000]

## License 

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

**Made with ❤️ by the AI and Data Science Club**

Built with React and modern web technologies.
