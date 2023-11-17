const mongoose = require('mongoose');

const mongoDB = async () => {
    try {
       
        
        //const mongoURI='mongodb+srv://Gofood:Gofood123@cluster0.3neizjm.mongodb.net/Gofoodmern?retryWrites=true&w=majority&appName=AtlasApp';
        const mongoURI='mongodb+srv://Test:Test123@cluster0.qyrvgqa.mongodb.net/testdb?retryWrites=true&w=majority&appName=AtlasApp'
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Mongo connected');
        
        const fetched_data = mongoose.model('fetched_data', new mongoose.Schema({}), 'users');
        
        const data = await fetched_data.find({});
        
        global.person=data;
        
        console.log(data);
        
        //mongoose.disconnect(); // Disconnect from the database after fetching data
    } catch(error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = mongoDB