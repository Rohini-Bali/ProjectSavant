import express from "express";
import helmet from "helmet";
// eslint-disable-next-line max-len
// Helmet is Express middleware.(It also works with Connect or no library at all! If you need support for other frameworks or languages, see this list.) The top - level helmet function is a wrapper around 15 smaller middlewares.
import cors from "cors";
const app = express();
const port = 3000;

const whitelist = ["http://localhost:3000"];

const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.get("/", (req, res)=>{
  res.send("Hello World! :)");
});
app.use(helmet());
app.get("/", cors(corsOptions), (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`CORS-enabled web server listening on port ${port}`);
});
