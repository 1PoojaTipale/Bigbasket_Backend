const mongoose = require('mongoose');
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const port = 3100
// mongoose.connect('mongodb://localhost:27017/backendshop',
mongoose.connect('mongodb+srv://PoojaTipale:PoojaTipale@cluster0.qfs2u.mongodb.net/Bigbasket?retryWrites=true&w=majority',
 {useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(()=> {
    console.log("DB CONNECTED")
})

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My routes
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

//My Routes

app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", userRoutes);
app.use("/api", orderRoutes);





app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
