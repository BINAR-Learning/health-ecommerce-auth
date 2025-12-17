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

// ==========================================
// MINIMAL WORKING SERVER (untuk starter)
// ==========================================
// Server ini akan jalan dengan minimal setup
// Lengkapi TODOs di atas untuk full functionality

require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Basic middleware
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    note: 'This is starter project - complete TODOs for full functionality'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found. Complete server.js setup to add routes.'
  });
});

// Basic error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: 'Server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
app.listen(PORT, () => {
  console.log('\n' + '='.repeat(60));
  console.log('HEALTH E-COMMERCE AUTH - STARTER PROJECT');
  console.log('='.repeat(60));
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log('\nThis is starter project - implementation needed:');
  console.log('  1. Complete server.js setup (see TODOs above)');
  console.log('  2. Setup security middleware (helmet, cors, rate limiting)');
  console.log('  3. Connect to database');
  console.log('  4. Mount auth routes');
  console.log('  5. Setup error handling');
  console.log('\nCheck finished-project for reference');
  console.log('='.repeat(60) + '\n');
});

module.exports = app;