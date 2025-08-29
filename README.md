# CYBX Cybersecurity Website Clone

A modern, responsive cybersecurity website clone built with the MERN stack (MongoDB, Express.js, React, Node.js) and Tailwind CSS. This project replicates the design and functionality of the CYBX cybersecurity website with enhanced features and modern UI/UX.

## 🚀 Features

- **Modern Design**: Beautiful, responsive design with smooth animations
- **Full-Stack Application**: Complete MERN stack implementation
- **Interactive Components**: Animated sections with Framer Motion
- **Contact Forms**: Functional contact and newsletter subscription forms
- **API Integration**: RESTful API endpoints for data management
- **Responsive Layout**: Mobile-first design approach
- **SEO Optimized**: Meta tags and semantic HTML structure

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth transitions
- **React Router** - Client-side routing
- **React Icons** - Icon library
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Express Validator** - Input validation
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
cybx-clone/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── App.jsx         # Main app component
│   │   ├── main.jsx        # Entry point
│   │   └── index.css       # Global styles
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
├── models/                 # MongoDB models
├── routes/                 # API routes
├── server.js              # Express server
├── package.json           # Backend dependencies
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cybx-clone
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/cybx-clone
   JWT_SECRET=your_jwt_secret_key_here
   ```

5. **Start MongoDB**
   Make sure MongoDB is running on your system or use MongoDB Atlas.

### Running the Application

#### Development Mode
```bash
# Run both frontend and backend concurrently
npm run dev

# Or run them separately:
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
npm run client
```

#### Production Mode
```bash
# Build the frontend
npm run build

# Start the production server
npm start
```

## 📱 Available Scripts

- `npm start` - Start the production server
- `npm run server` - Start the development server
- `npm run client` - Start the React development server
- `npm run dev` - Run both frontend and backend in development
- `npm run build` - Build the React app for production
- `npm run install-client` - Install frontend dependencies

## 🌐 API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact form

### Newsletter
- `POST /api/newsletter` - Subscribe to newsletter

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get project by ID

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get service by ID

### Blog
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/:id` - Get blog post by ID

## 🎨 Components

### Frontend Components
- **Navbar** - Responsive navigation with mobile menu
- **Hero** - Animated hero section with call-to-action
- **About** - Company information and features
- **Services** - Service offerings with interactive cards
- **Projects** - Portfolio with filtering capabilities
- **WhyChooseUs** - Benefits and statistics
- **Blog** - Latest blog posts
- **Newsletter** - Email subscription form
- **Contact** - Contact form and information
- **Footer** - Company links and social media

## 🔧 Customization

### Styling
- Modify `client/tailwind.config.js` for theme customization
- Update `client/src/index.css` for global styles
- Use Tailwind CSS classes for component styling

### Content
- Update content in component files
- Modify API routes for dynamic content
- Add new sections by creating new components

### Database
- Add new models in the `models/` directory
- Create corresponding routes in the `routes/` directory
- Update API endpoints as needed

## 🚀 Deployment

### Heroku
1. Create a Heroku account and install Heroku CLI
2. Initialize git repository
3. Create Heroku app: `heroku create your-app-name`
4. Add MongoDB addon: `heroku addons:create mongolab`
5. Deploy: `git push heroku main`

### Vercel (Frontend)
1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel`

### Netlify (Frontend)
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `client/build`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Original design inspiration from [CYBX](https://demos.camionthemes.com/cybx/index-7.html)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

## 📞 Support

For support and questions, please contact:
- Email: hello@cybx.com
- Phone: +123-456-7890

---

**Note**: This is a clone project for educational purposes. All rights belong to their respective owners.

