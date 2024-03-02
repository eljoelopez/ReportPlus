import { VertexAI, HarmCategory, HarmBlockThreshold } from '@google-cloud/vertexai';
import 'dotenv/config';

// Copy past .js file to Google cloud function
const project = process.env.GOOGLE_CLOUD_PROJECT!; //project name from .env file
const loc = 'europe-west3';
const textModel = 'gemini-1.0-pro';
const visionModel = 'gemini-1.0-pro-vision'; // needed if you want to use vision models

const vertex_ai = new VertexAI({ project: project, location: loc });

// Instantiate models
export const generativeModel = vertex_ai.getGenerativeModel({
	model: textModel,
	// The following parameters are optional
	// They can also be passed to individual content generation requests
	safety_settings: [
		{
			category: HarmCategory.HARM_CATEGORY_UNSPECIFIED,
			threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
		},
	],
	generation_config: {
		max_output_tokens: 2048,
		temperature: 0.6,
		top_p: 1,
		top_k: 32,
	},
});
