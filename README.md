# Ankur Raj - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme
- **Responsive**: Optimized for all devices and screen sizes
- **Multi-page**: Home, About, Projects, and Contact pages
- **Animations**: Smooth transitions and scroll-triggered animations
- **Contact Form**: Working contact form with Web3Forms integration
- **Resume Download**: Direct download functionality for resume
- **Performance**: Built with Vite for optimal performance

## 🛠️ Built With

- **React** - UI framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Web3Forms** - Contact form backend

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ankurraj2606/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

## 🔧 Configuration

### Contact Form Setup

To enable the contact form functionality:

1. Sign up for a free account at [Web3Forms](https://web3forms.com)
2. Get your access key
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `src/components/ContactForm.jsx` with your actual key

### Resume Download

Place your resume PDF file in the `public` folder and update the `resumeUrl` in `src/utils/data.js`.

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── SkillBar.jsx
│   ├── ProjectCard.jsx
│   ├── ContactForm.jsx
│   └── AnimatedCounter.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
├── hooks/              # Custom React hooks
│   ├── useTypingEffect.js
│   └── useScrollAnimation.js
├── utils/              # Utilities and data
│   └── data.js
├── App.jsx             # Main App component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Personal Information
Update your personal information in `src/utils/data.js`:
- Name, title, contact details
- Skills and experience
- Projects and achievements
- Social media links

### Styling
The project uses Tailwind CSS with a custom configuration in `tailwind.config.js`. You can:
- Modify color schemes
- Add custom animations
- Adjust responsive breakpoints

### Content
Update the content in the respective page components:
- `src/pages/Home.jsx` - Landing page content
- `src/pages/About.jsx` - Professional summary and skills
- `src/pages/Projects.jsx` - Project showcase
- `src/pages/Contact.jsx` - Contact information

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for React Router (add `_redirects` file with `/* /index.html 200`)

### Deploy to Vercel
```bash
npm run build
vercel --prod
```

## 📧 Contact

- **Email**: ankurraj2606@gmail.com
- **LinkedIn**: [linkedin.com/in/ankurraj2606](https://linkedin.com/in/ankurraj2606)
- **GitHub**: [github.com/ankurraj2606](https://github.com/ankurraj2606)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
