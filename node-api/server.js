const express = require('express');

cosnt app = express();

app.get('/', (req, res)=> {
	res.send('Hello World')
});

app.listen(3004);