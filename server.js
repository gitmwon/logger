const express = require("express");

const app = express();

app.use(express.json());

const router = express.Router();

let data;

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

app.listen(8080,()=>{
    console.log('server running on localhost:8080....');
})