import express from 'express';

const app = express();



app.get('/', (req, res) => {
    res.send("hej");
})


const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));