const supertest = require('supertest')
const server = require('./server')

describe('Root endpoint', () => {
	it('GET request', async () => {
		const response = await supertest(server).get('/')

		expect(response.statusCode).toEqual(200)
		expect(response.text).toEqual('Hello World')
	})
})

describe('Root endpoint with parameter', () => {
	it('GET request with parameter', async () => {
		const parameter = Math.random().toString()

		const response = await supertest(server).get(`/${parameter}`)

		expect(response.statusCode).toEqual(200)
		expect(response.text).toEqual(parameter)
	})
})
