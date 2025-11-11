/**
 *  FILE INI PERLU DILENGKAPI
 *
 * Secure Server Setup
 * Setup Express server dengan security best practices
 */

// TODO: Load environment variables
// require('dotenv').config();

// TODO: Import dependencies
// const express = require('express');
// const helmet = require('helmet');
// const cors = require('cors');
// const rateLimit = require('express-rate-limit');
// const mongoSanitize = require('mongo-sanitize');
// const connectDB = require('./config/database');
// const authRoutes = require('./routes/authRoutes');

// TODO: Initialize app
// const app = express();

// TODO: Connect to database
// connectDB();

// TODO: Security Middleware
// app.use(helmet());  // Security headers
// app.use(cors({ origin: 'http://localhost:3000', credentials: true }));  // CORS
// app.use(express.json({ limit: '10kb' }));  // Body parser dengan limit
// app.use(mongoSanitize());  // Sanitize data

// TODO: Rate Limiting
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   max: 100
// });
// app.use('/api/', limiter);

// TODO: Routes
// app.use('/api/auth', authRoutes);

// TODO: Error Handler
// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).json({ success: false, message: 'Server error' });
// });

// TODO: Start server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
