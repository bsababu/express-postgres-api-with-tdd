const request = require('supertest');
const app = require('../index');

describe('Home', () => {
    describe('GET /users', () => {
        it('It should return all users', (done) => {
            request(app)
            .get('/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
        });
    });

    describe('GET /users/:id', () => {
        it('return a user with specific id', (done) =>{
            request(app)
                .get('/users/1')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    })

    describe('POST /users', () => {
        let user = {
            name: "admin",
            email: "admin@admin.com"
        }
        it('User created', (done)=> {
            request(app)
                .post('/users')
                .send(user)
                .set('Accept', 'application/json')
                .expect('Content-Type',/json/)
                .expect(201)
                .end((err) => {
                    if (err) return done(err);
                    done();
                });
        });
    })

    describe('DELETE /users/:id', () => {
       
        it('delete a user', (done)=> {
            request(app)
                .delete('/users/2')
                .set('Accept', 'application/json')
                .expect('Content-Type',/json/)
                .expect(200, done)
        });
    })
})