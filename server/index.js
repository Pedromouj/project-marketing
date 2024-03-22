const express = require('express') ;
const app = express();
const cors = require("cors")
const axios = require("axios");
app.use(cors());
const PORT = 5001 ;

app.get('/api/result/:query' , async(req, res) => {
  const query = req.params.query;
  try {
  const url = `https://api.qwant.com/v3/search/web?q=${query}&count=10&locale=fr_FR&offset=0&device=desktop&safesearch=1`
  const { data } = await axios.get(url) ;  
  // res.json(data)
  res.json(data.data?.result?.items?.mainline)

  } catch (error) {
    console.error(error);
    res.status(500).json({Message : "Internale server error" }); 
  }
})


app.listen(PORT , ()=>{
    console.log(`Server runing on ${PORT}`);
})