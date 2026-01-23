# Personal Website - Vivek Mallampati

Modern, professional multi-page website for academic portfolio hosted on GitHub Pages.

## Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Multi-Page Structure**: Home, About, Research, Publications, Resume, and Contact pages
- **Responsive Layout**: Fully responsive design that works on all devices
- **Contact Form**: Integrated with Formspree for easy contact management
- **Social Media Integration**: Links to LinkedIn, Facebook, and Instagram
- **GitHub Pages Ready**: All paths configured for GitHub Pages deployment

## Setup Instructions

### Formspree Contact Form Setup

The contact form uses Formspree for handling submissions. To set it up:

1. Go to [https://formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your form ID (e.g., `xpzgvqkj`)
3. Open `contact.html` and replace `YOUR_FORM_ID` in the form action URL:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace with:
   ```html
   <form action="https://formspree.io/f/xpzgvqkj" method="POST">
   ```
4. Verify your email address in Formspree to start receiving form submissions

### GitHub Pages Deployment

1. Push all files to your GitHub repository
2. Go to repository Settings > Pages
3. Select the branch (usually `main` or `master`)
4. Your site will be live at `https://yourusername.github.io`

## File Structure

```
.
├── index.html              # Home page
├── about.html              # About page
├── research.html           # Research projects
├── publications.html       # Publications list
├── resume.html             # Resume/CV
├── contact.html            # Contact form
├── assets/
│   ├── css/
│   │   ├── main.css        # Main stylesheet
│   │   ├── navigation.css  # Navigation styles
│   │   └── responsive.css  # Responsive breakpoints
│   ├── js/
│   │   ├── main.js         # Navigation and interactions
│   │   └── contact.js      # Contact form handling
│   └── images/
│       └── my-avatar.png   # Profile image
└── README.md
```

## Customization

### Colors

Edit CSS variables in `assets/css/main.css`:
- `--color-accent-primary`: Primary accent color (default: #00d4ff)
- `--color-bg-primary`: Background color (default: #1a1a1a)
- `--color-text-primary`: Primary text color (default: #ffffff)

### Content

Update content in each HTML file:
- Personal information in `about.html`
- Research projects in `research.html`
- Publications in `publications.html`
- Resume details in `resume.html`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Personal website - All rights reserved.
