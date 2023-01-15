const express = require('express');
const app = express();
//app.use(express.static('public/')) 
app.get('/', function(req,res){
    console.log('yayy');
    res.send('Hello World!!');
    
})
app.listen(8080, function() {
    console.log('Server listening at 8000');
});