const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3001;

mongoose.connect('mongodb://localhost:27017/internsignup', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to productdb');
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error:', err);
});

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    offerPrice: Number,
    category: String,
    image: String
});

const Product = mongoose.model('Product', productSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'uploads/'),
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5000000 },
    fileFilter: function(req, file, cb) {
        checkFileType(file, cb);
    }
}).single('image');

function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

app.use(express.static(path.join(__dirname, 'public')));

app.post('/add-product', (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).send(err);
        }

        const { title, description, price, offerPrice, category } = req.body;
        const image = req.file ? req.file.filename : '';

        const newProduct = new Product({
            title,
            description,
            price,
            offerPrice,
            category,
            image
        });

        try {
            await newProduct.save();
            res.status(200).send('Product saved successfully');
        } catch (err) {
            res.status(500).send('Error saving product');
        }
    });
});

app.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (err) {
        res.status(500).send('Error fetching products');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
