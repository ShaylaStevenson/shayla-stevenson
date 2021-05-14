// ref unit 20 activity 14
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

// const path = require("path");
// const router = require("express").Router();
// const apiRoutes = require("./api");

// // API Routes
// router.use("/api", apiRoutes);

// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
//   //"../client/build/index.html"
// });

// module.exports = router;