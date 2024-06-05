import mongoose from 'mongoose';
const MONGO_URI = process.env.MONGO_URI || 'your_default_mongo_uri_here';


console.log('Connecting to MongoDB...');
mongoose.connect(MONGO_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true
}).then(() => console.log('MongoDB connected successfully'))
    .catch((error) => console.error('Error connecting to MongoDB:', error))
