const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();
app.use(express.json({extended:false}));
app.get("/",(req,res) =>
{
    res.json({
        msg:"Welcome to the contact-keeper"
    });
});
app.use("/api/users",require("./routes/users"));
app.use("/api/auth",require("./routes/auth"));
app.use("/api/contacts",require("./routes/contacts"));

app.listen(5000,() =>
{
    console.log("Listening to the port number 5000!");
})