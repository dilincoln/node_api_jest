const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (_, response) => {
	return response.send('Hello World')
})

app.get('/:parameter', (request, response) => {
	const { parameter } = request.params

	return response.send(parameter)
})

if (require.main === module) {
	app.listen(3333, () => {
		console.log('Server running on port 3333 🚀')
	})
}

module.exports = app
