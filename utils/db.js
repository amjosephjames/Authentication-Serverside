const mongoose = require("mongoose");
const url = "mongodb://localhost/authdb";
const lifeURI =
  "mongodb+srv://joseph4231:Barca4231@cluster0.zrkxc.mongodb.net/authdb?retryWrites=true&w=majority";

mongoose.connect(lifeURI);
mongoose.connection
  .on("open", () => {
    console.log("DataBase Connected");
  })
  .once("error", (error) => {
    console.log(`Failed to Connect to the Database\n ${error}`);
  });
// const connectDB = (url) => {
//   return mongoose.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
// }

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(lifeURI, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//     });
//     console.log(` connected: ${conn.connection.host}`);
//     return conn;
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = connectDB;
