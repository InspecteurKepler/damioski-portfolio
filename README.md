# DAMIOSKI Portfolio

![portfolio banner](public/banner.png)

## 🌟 Overview

Modern and interactive professional portfolio developed with the latest web technologies. This showcase website presents DAMIOSKI's skills, academic background, and professional experiences in an elegant and responsive interface.

### ✨ Demo

Visit the live site: [portfolio.damioski.de](https://portfolio.damioski.de)

## 🚀 Features

- **Modern design** with fluid animations and elegant transitions
- **Responsive interface** adapted to all devices (desktop, tablet, mobile) **(WIP)**
- **Thematic sections** presenting different aspects of professional journey
- **Functional contact form** with SMTP email sending
- **Performance optimization** for fast loading times
- **Accessibility** compliant with web standards

## 🛠️ Technologies

- **Frontend**:
  - [React.js](https://reactjs.org/) - JavaScript library for building user interfaces
  - [Vite.js](https://vitejs.dev/) - Ultra-fast build tool with HMR (Hot Module Replacement)
  - [SCSS](https://sass-lang.com/) - CSS preprocessor for advanced styling
  - [Framer Motion](https://www.framer.com/motion/) - Animation library for React

- **Backend**:
  - [Node.js](https://nodejs.org/) - JavaScript runtime environment
  - [Nodemailer](https://nodemailer.com/) - Module for sending emails via SMTP

- **Tools**:
  - [dotenv](https://www.npmjs.com/package/dotenv) - Environment variable management
  - [ESLint](https://eslint.org/) - JavaScript/React code linting

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [npm](https://www.npmjs.com/) (v6.0.0 or higher)

## 🔧 Installation

1. Clone the repository
   ```bash
   git clone https://github.com/InspecteurKepler/damioski-portfolio.git
   cd damioski-portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file at the root of the project with SMTP information
   ```
   EMAIL_HOST=your-smtp-server.com
   EMAIL_PORT=465
   EMAIL_USER=your-email@example.com
   EMAIL_PASS=your-password
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:4545](http://localhost:4545) in your browser

## 🏗️ Project Structure

```
damioski-portfolio/
├── public/             # Static files (images, favicon, etc.)
├── sections/           # Main portfolio components
│   ├── DAMIOSKI/       # Home section
│   ├── Cursus/         # Academic background section
│   ├── Jobs/           # Professional experiences section
│   ├── Skills/         # Skills section
│   ├── Contact/        # Contact form section
│   └── styles/         # Shared styles between sections
├── src/
│   ├── api/            # API endpoints (form handling)
│   ├── services/       # Services (email, etc.)
│   ├── App.jsx         # Main component
│   └── main.jsx        # Application entry point
├── .env                # Environment variables (not versioned)
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts
```

## 📦 Deployment

To build the application for production:

```bash
npm run build
```

Production files will be generated in the `dist/` folder.

## 📝 Email Configuration

The contact form uses Nodemailer to send messages via SMTP. To properly configure email sending:

1. Make sure the SMTP credentials in the `.env` file are correct
2. If using Gmail, you'll need to generate an app password
3. For custom SMTP servers, check security settings (SSL/TLS)

## 📱 Responsive Design (WIP)

The portfolio is fully responsive with breakpoints for:
- Large screens (1200px+)
- Laptops and small screens (992px-1199px)
- Tablets (768px-991px)
- Smartphones (576px-767px)
- Small smartphones (575px and below)

## 🤝 Contributions

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the GNU License. See the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**DAMIOSKI** (Enzo DELHAYE WOLFF)

- [GitHub](https://github.com/InspecteurKepler)
- [LinkedIn](https://www.linkedin.com/in/enzo-delhaye-wolff/)
- [Twitter](https://x.com/DAMIOSKI/)

---

✨ Made with ❤️ and React.js ✨
