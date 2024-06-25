import express from 'express';
const app = express();
// GET -> get some data from db
// PUT -> modify data 
// POST -> send data
// DELETE -> delete some data
// Middleware->funct which handle requests, next goes to next middleware, res send response
// Dynamic Routing
app.delete("/user/:id", (req, res, next) => {
    console.log(req.params.id);
    return res.send("hello");
});
// middleware that parses incoming requests with JSON payloads or any other file format(like forms)
app.use(express.json());
app.listen(5001, () => console.log('listening on port'));
//# sourceMappingURL=index.js.map