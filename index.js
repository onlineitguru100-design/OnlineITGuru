const express = require('express');


// Next initialize the application
const app = express();
require('dotenv').config();
//const bodyParser = require('body-parser');
const connectDB = require('./configs/mongooseDB');

const usersRoutes = require('./Routes/UsersRoutes');
// const categoryRoutes = require('./routes/categoryRoutes');
// const subCategoryRoutes = require('./routes/subCategoryRoutes');
// const cartRoutes = require('./routes/cartRoutes');
// const ordersRoutes = require('./routes/ordersRoutes');
// const homeRoutes = require('./routes/homeRoutes');
// const bannersRoutes = require('./routes/bannersRoutes');
// const paymentRoutes = require('./routes/paymentRoutes');
// const membershipRoutes = require('./routes/membershipRoutes');
// const wishlistRoutes = require('./routes/wishlistRoutes');
// const addressRoutes = require('./routes/addressRoutes');
// const s3UploaderRoutes = require('./routes/s3uploder');
// const adminRoutes = require('./routes/adminRoutes');
// const couponsRoutes = require('./routes/couponsRoutes');
// const searchRoutes = require('./routes/searchRoutes');
// const currentMembershipRoutes = require('./routes/currentmembershipRoutes');
const cors = require('cors')

const port = process.env.PORT || 3030;
// Middleware
// app.use(bodyParser.json());
connectDB();

app.use(cors({ origin: "*" }));

app.use(express.json())
app.use('/users', usersRoutes)
// app.use('/categories',categoryRoutes);
// app.use('/subCategories',subCategoryRoutes);
// app.use('/Cart',cartRoutes);
// app.use('/orders', ordersRoutes);
// app.use('/home',homeRoutes);
// app.use('/banners',bannersRoutes);
// app.use('/payment',paymentRoutes);
// app.use('/membership',membershipRoutes);
// app.use('/wishlist',wishlistRoutes);
// app.use('/address',addressRoutes);
// app.use('/',s3UploaderRoutes);
// app.use('/admin',adminRoutes);
// app.use('/coupons',couponsRoutes);
// app.use('/search',searchRoutes);
// app.use('/currentMemership',currentMembershipRoutes);

app.use((req,res,next)=> {
  console.log(`${req.method} ${req.url}`);
next();
})

// routing path
app.get('/test', (req, res) => {
  res.send('Server is up and running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`)
});