const express = require('express');


// Next initialize the application
const app = express();
require('dotenv').config();
//const bodyParser = require('body-parser');
const connectDB = require('./Configs/MongooseDB');

const usersRoutes = require('./Routes/UsersRoutes');
const categoryRoutes = require('./Routes/CategoriesRoutes');
const exploreCoursesRoutesRoutes = require('./Routes/ExploreCoursesRoutes');
const everyThingNeedRoutes = require('./Routes/EveryThingNeedRoutes');
const learnersWorldWideRoutes = require('./Routes/LearnersWorldWideRoutes');
const homeRoutes = require('./Routes/HomeRoutes');
const sucessStoriesRoutes = require('./Routes/SucessStoriesRoutes');
const ourExpertsRoutes = require('./Routes/OurExpertsRoutes');
const ourApproachRoutes = require('./Routes/OurApproachRoutes');
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
app.use('/api/users', usersRoutes);
app.use('/api/Categories',categoryRoutes);
app.use('/api/ExploreCourses',exploreCoursesRoutesRoutes);
app.use('/api/EveryThingNeed',everyThingNeedRoutes);
app.use('/api/LearnersWorldWide', learnersWorldWideRoutes);
app.use('/api/Home',homeRoutes);
app.use('/api/SucessStories',sucessStoriesRoutes);
app.use('/api/OurExpertsRoutes',ourExpertsRoutes);
app.use('/api/OurApproachRoutes',ourApproachRoutes);
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