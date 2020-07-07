const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/', (req, res, next) => {
	const contentReadFromFile = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
	res.send(contentReadFromFile);
});

app.listen(5000, () => {
	console.log('App is listen on port 5000');
});
