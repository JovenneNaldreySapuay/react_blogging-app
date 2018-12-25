import express from 'express';
import path from 'path';

const app = express();

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running on localhost:${PORT}`));
process.setMaxListeners(0);
