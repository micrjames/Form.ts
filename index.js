const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const cors = require('cors');

const port = 3000;

app.use(cors({ origin: `http://localhost:${port}`  }));
app.use(express.static('./dist'));

app.all('*', (req, res) => {
	res.status(404).sendFile(path.resolve(__dirname, './dist/oops.html'));
});

app.listen(port, () => {
	console.log(`Server is listening on port ${port}...`);
});
