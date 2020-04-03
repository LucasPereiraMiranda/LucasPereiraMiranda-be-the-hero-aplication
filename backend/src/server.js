const app = require('./app');

port = 3333

app.listen(port,()=>{
    console.log(`server running in the port ${port}`);
});