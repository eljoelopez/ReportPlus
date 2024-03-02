fetch('http://localhost:3000/generate/', {
	method: 'POST',
	body: JSON.stringify({
		parts: [
			// {
			//     inline_data: {
			//         mime_type: 'image/png',
			//         data: 'MMtsdWMBaE2+8oBAucRX9mEXaRNW0MBGD7vKlrp6vRxsZ8lVvnrbNpf0gIqnwRyyQgIGVibUMEL6M4Wl8fP36UUBJFEgIcZ4drw4lNgRBFMVJKOPX',
			//     },
			// },
			{ text: 'What is the weather today?' },
		],
		completed: false,
	}),
	headers: {
		'Content-type': 'application/json; charset=UTF-8',
	},
})
	.then((response) => response.json())
	.then((json) => console.log(json));
