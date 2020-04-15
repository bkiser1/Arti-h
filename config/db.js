const mongoose = require("mongoose");

const config = require("config");

const db = config.get("mongoURI");

//connect mongoose
const connectDb = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("moongoose connected");
	} catch (err) {
		console.error(err.message);
		//failure with message
		process.exit(1);
	}
};

module.exports = connectDb;
