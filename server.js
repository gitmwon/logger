const express = require("express");

const app = express();

app.use(express.json());

const router = express.Router();

let data;

require('dotenv').config();

router.route('/').get((req,res)=>{

    res.redirect("/data");

});

router.route('/data').post((req,res)=>{

    data = req.body;
    console.log(data);

    res.send('data logged succesfully');

}).get((req,res)=>{

    res.status(200).json(data);

})

app.use(router);

const port = process.env.PORT || 8080;

app.listen(port ,"0.0.0.0",()=>{
    console.log(`server running on localhost:${port}....`);
})