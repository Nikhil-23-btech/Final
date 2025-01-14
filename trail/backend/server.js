require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();
const port = 6000;

app.use(bodyParser.json());
app.use(express.static('public'));

let otpStore = {};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'clginternshipacc@gmail.com',
    pass: 'asrn pwxu jile azwt',
  }
});

function generateOTP() {
  return crypto.randomInt(100000, 999999).toString();
}

mongoose.connect('mongodb://localhost:27017/internsignup' )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

const cartSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  cartItems: [
    {
      id: { type: String, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      image: { type: String, required: true }
    }
  ]
});

const Cart = mongoose.model('Cart', cartSchema);

  const reportSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    product: { type: String, required: true },
    problem: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  });
  
  const Report = mongoose.model('Report', reportSchema);
  
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  aadhar: { type: String, required: true },
  mobileNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  offerPrice: Number,
  category: String,
  image: String,
});

const Product = mongoose.model('Product', productSchema);

// Feedback schema
const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  rating: { type: Number, required: true },
  comments: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

app.post('/send-otp', async (req, res) => {
  const { email, password } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).send('Invalid email format.');
  }

  if (!email || !password) {
    return res.status(400).send('Email and password are required.');
  }

  const user = await User.findOne({ email });
  if (!user || !user.password) {
    return res.status(401).send('Incorrect email or password.');
  }

  const passwordMatch = await bcrypt.compare(password.toString(), user.password.toString());
  if (!passwordMatch) {
    return res.status(401).send('Incorrect email or password.');
  }

  const otp = generateOTP();
  otpStore[email] = otp;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Failed to send OTP. Please try again.');
    } else {
      res.send('OTP sent successfully.');
    }
  });
});

app.post('/verify-otp', (req, res) => {
  const { email, otp } = req.body;
  if (otpStore[email] === otp) {
    delete otpStore[email];
    res.send('OTP verified successfully. You can proceed to login');
  } else {
    res.status(400).send('Invalid OTP. Please try again.');
  }
});

app.post('/register', async (req, res) => {
  const { name, address, aadhar, mobileNumber, email, password } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).send('Invalid email format.');
  }

  if (password.length < 6) {
    return res.status(400).send('Password must be at least 6 characters long.');
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).send('User already exists.');
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, address, aadhar, mobileNumber, email, password: hashedPassword });
    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(500).send('Failed to register user. Please try again.');
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).send('Invalid email format.');
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send('Incorrect email or password.');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).send('Incorrect email or password.');
    }

    res.json({
      userId: user._id,
      name: user.name,
      address: user.address,
      aadhar: user.aadhar,
      email: user.email,
      mobileNumber: user.mobileNumber
    });
  } catch (error) {
    res.status(500).send('Failed to login. Please try again.');
  }
});

app.get('/getUserData', async (req, res) => {
  const { email } = req.query;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send('User not found.');
    }

    res.json({
      name: user.name,
      address: user.address,
      aadhar: user.aadhar,
      mobileNumber: user.mobileNumber,
      email: user.email
    });
  } catch (error) {
    res.status(500).send('Failed to fetch user data. Please try again.');
  }
});

// API endpoint to handle feedback submission
app.post('/submit-feedback', async (req, res) => {
  const { name, email, rating, comments } = req.body;

  if (!name || !email || !rating || !comments) {
    return res.status(400).send('All fields are required.');
  }

  try {
    const feedback = new Feedback({
      name,
      email,
      rating,
      comments
    });
    await feedback.save();
    res.status(201).send('Feedback submitted successfully.');
  } catch (error) {
    console.error('Error saving feedback:', error);
    res.status(500).send('Failed to submit feedback. Please try again.');
  }
});
app.post('/submit-report', async (req, res) => {
  const { name, email, product, problem } = req.body;

  if (!name || !email || !product || !problem) {
    return res.status(400).send('All fields are required.');
  }

  try {
    const report = new Report({
      name,
      email,
      product,
      problem
    });
    await report.save();
    res.status(201).send('Report submitted successfully.');
  } catch (error) {
    console.error('Error saving report:', error);
    res.status(500).send('Failed to submit report. Please try again.');
  }
});

// Endpoint to get product list
app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});
app.post('/store-cart', async (req, res) => {
  const { email, cartItems } = req.body;

  if (!email || !cartItems || !Array.isArray(cartItems)) {
    return res.status(400).send('Invalid request data');
  }

  try {
    // Find the user's cart by email
    let userCart = await Cart.findOne({ email });

    if (userCart) {
      // If cart already exists, update it
      userCart.cartItems = cartItems;
      await userCart.save();
      res.status(200).send('Cart updated successfully.');
    } else {
      // If cart doesn't exist, create a new one
      const newCart = new Cart({ email, cartItems });
      await newCart.save();
      res.status(201).send('Cart saved successfully.');
    }
  } catch (error) {
    console.error('Error saving cart items:', error);
    res.status(500).send('Error saving cart items. Please try again.');
  }
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
