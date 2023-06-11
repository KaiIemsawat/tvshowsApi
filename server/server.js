const express = require("express");
const app = express();

require("./config/mongoose.config"); // calling mongoose.config and running the connect function

app.use(express.json(), express.urlencoded({ extended: true }));

const TvShowRoute = require("./routes/tvshow.route");
TvShowRoute(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
