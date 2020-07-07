const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.static(path.resolve(__dirname, '../build')));
app.get('/hello-world', (req, res) => {
	const contentReadFromFile = fs.readFileSync(path.resolve(__dirname, '../build/hello-world.html'), 'utf-8');
	res.send(contentReadFromFile);
});

app.get('/kyou', (req, res) => {
	const contentReadFromFile = fs.readFileSync(path.resolve(__dirname, '../build/kyou.html'), 'utf-8');
	res.send(contentReadFromFile);
});

app.get('/', (req, res) => {
	res.send('This is a dummy Page, use /kyou or /hello-world');
});

app.listen(5000, () => {
	console.log('App is listening on port 5000');
});
