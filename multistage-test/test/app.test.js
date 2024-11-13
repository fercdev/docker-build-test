const request = require('supertest');
const app = require('../app');

describe('Test de app', () => {
    it('deberia darme un mensaje de hello world', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello world desde express');
    })
})