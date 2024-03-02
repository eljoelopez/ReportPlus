import Express from 'express';
import { generativeModel } from './gemini';
const app = Express();
const port = 3000;

app.use(Express.json()); // to support JSON-encoded bodies
app.use(Express.urlencoded({ extended: true })); // to support URL-encoded bodies

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.post('/generate', (req, res) => {
	console.log(req.body);

	if (!req.body.parts) res.status(404).send('invalid reques - missing parts');
	if (!Array.isArray(req.body.parts)) res.status(404).send('invalid reques - missing parts');

	const request = {
		contents: [{ role: 'user', parts: req.body.parts }],
	};
	const resp = generativeModel.generateContent(request);

	resp.then((reply: any) => {
		console.log(reply);
		// console.log(reply.response.candidates);

		res.send(reply.response.candidates[0].content.parts);
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
