"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generativeModel = void 0;
const vertexai_1 = require("@google-cloud/vertexai");
require("dotenv/config");
// Copy past .js file to Google cloud function
const project = process.env.GOOGLE_CLOUD_PROJECT; //project name from .env file
const loc = 'europe-west3';
const textModel = 'gemini-1.0-pro';
const visionModel = 'gemini-1.0-pro-vision'; // needed if you want to use vision models
const vertex_ai = new vertexai_1.VertexAI({ project: project, location: loc });
// Instantiate models
exports.generativeModel = vertex_ai.getGenerativeModel({
    //model: textModel,
    model: visionModel,
    // The following parameters are optional
    // They can also be passed to individual content generation requests
    safety_settings: [
        {
            category: vertexai_1.HarmCategory.HARM_CATEGORY_UNSPECIFIED,
            threshold: vertexai_1.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ],
    generation_config: {
        max_output_tokens: 2048,
        temperature: 0.6,
        top_p: 1,
        top_k: 32,
    },
});
