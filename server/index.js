const express = require('express');
const cookieParser = require('cookie-parser');
const authRouter = require('./src/auth');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(authRouter);

const PORT = 3001;

app.listen(PORT, console.log(`||| Server started on port: ${PORT} |||`));
