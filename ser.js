const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Form submission handler
app.post('/sub', (req, res) => {
  console.log('Form data received:', req.body,req.ip);
  res.status(200).json({ status: 'success', data: req.body });
});

// Export for Vercel (essential!)
module.exports = app;

// Local development fallback
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Local server running on port ${PORT}`));
}
module.exports=app;
