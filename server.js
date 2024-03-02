"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gemini_1 = require("./gemini");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json()); // to support JSON-encoded bodies
app.use(express_1.default.urlencoded({ extended: true })); // to support URL-encoded bodies
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post('/generate', (req, res) => {
    console.log(req.body);
    if (!req.body.parts)
        res.status(404).send('invalid reques - missing parts');
    if (!Array.isArray(req.body.parts))
        res.status(404).send('invalid reques - missing parts');
    const request = {
        contents: [{ role: 'user', parts: req.body.parts }],
    };
    const resp = gemini_1.generativeModel.generateContent(request);
    resp.then((reply) => {
        console.log(reply);
        // console.log(reply.response.candidates);
        res.send(reply.response.candidates[0].content.parts);
    });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
