const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

const connectDatabase = () => {
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose Connected");
        });

 

}

module.exports = connectDatabase;
// console.log(process.env.MONGO_URI);
// const mongoose = require('mongoose');

// connectdb().catch(err => console.log(err));

// async function connectdb() {
//   await mongoose.connect(process.env.MONGO_URI);
// }

// module.exports=connectdb;
