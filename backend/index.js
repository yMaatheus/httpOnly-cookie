require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 3001;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: FRONTEND_URL,
  credentials: true,
}));

app.post('/login', async (_req, res) => {
  const token = jwt.sign({ id: '10' }, JWT_SECRET);
  res.cookie('token', token, { httpOnly: true });

  res.status(200).json({ message: 'Login successful' });
});


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));