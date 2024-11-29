let mongoose = require("mongoose");
let server = require("./app");
let chai = require("chai");
let chaiHttp = require("chai-http");

// Assertion 
chai.should();
chai.use(chaiHttp);

describe('Planets API Suite', () => {

    describe('Fetching Planet Details', () => {
        
        it('it should fetch a planet named Mercury', (done) => {
            let payload = { id: 1 };
            console.log('Sending request for Mercury with payload:', payload); // Debugging log
            chai.request(server)
                .post('/planet')
                .send(payload)
                .end((err, res) => {
                    console.log('Received response for Mercury:', res.body); // Debugging log
                    if (err) {
                        console.log('Error in Mercury response:', err); // Debugging log
                    }
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(1);
                    res.body.should.have.property('name').eql('Mercury');
                    done();
                });
        });

        it('it should fetch a planet named Venus', (done) => {
            let payload = { id: 2 };
            console.log('Sending request for Venus with payload:', payload); // Debugging log
            chai.request(server)
                .post('/planet')
                .send(payload)
                .end((err, res) => {
                    console.log('Received response for Venus:', res.body); // Debugging log
                    if (err) {
                        console.log('Error in Venus response:', err); // Debugging log
                    }
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(2);
                    res.body.should.have.property('name').eql('Venus');
                    done();
                });
        });

        it('it should fetch a planet named Earth', (done) => {
            let payload = { id: 3 };
            console.log('Sending request for Earth with payload:', payload); // Debugging log
            chai.request(server)
                .post('/planet')
                .send(payload)
                .end((err, res) => {
                    console.log('Received response for Earth:', res.body); // Debugging log
                    if (err) {
                        console.log('Error in Earth response:', err); // Debugging log
                    }
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(3);
                    res.body.should.have.property('name').eql('Earth');
                    done();
                });
        });

        it('it should fetch a planet named Mars', (done) => {
            let payload = { id: 4 };
            console.log('Sending request for Mars with payload:', payload); // Debugging log
            chai.request(server)
                .post('/planet')
                .send(payload)
                .end((err, res) => {
                    console.log('Received response for Mars:', res.body); // Debugging log
                    if (err) {
                        console.log('Error in Mars response:', err); // Debugging log
                    }
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(4);
                    res.body.should.have.property('name').eql('Mars');
                    done();
                });
        });

        it('it should fetch a planet named Jupiter', (done) => {
            let payload = { id: 5 };
            console.log('Sending request for Jupiter with payload:', payload); // Debugging log
            chai.request(server)
                .post('/planet')
                .send(payload)
                .end((err, res) => {
                    console.log('Received response for Jupiter:', res.body); // Debugging log
                    if (err) {
                        console.log('Error in Jupiter response:', err); // Debugging log
                    }
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(5);
                    res.body.should.have.property('name').eql('Jupiter');
                    done();
                });
        });

        it('it should fetch a planet named Saturn', (done) => {
            let payload = { id: 6 };
            console.log('Sending request for Saturn with payload:', payload); // Debugging log
            chai.request(server)
                .post('/planet')
                .send(payload)
                .end((err, res) => {
                    console.log('Received response for Saturn:', res.body); // Debugging log
                    if (err) {
                        console.log('Error in Saturn response:', err); // Debugging log
                    }
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(6);
                    res.body.should.have.property('name').eql('Saturn');
                    done();
                });
        });

        it('it should fetch a planet named Uranus', (done) => {
            let payload = { id: 7 };
            console.log('Sending request for Uranus with payload:', payload); // Debugging log
            chai.request(server)
                .post('/planet')
                .send(payload)
                .end((err, res) => {
                    console.log('Received response for Uranus:', res.body); // Debugging log
                    if (err) {
                        console.log('Error in Uranus response:', err); // Debugging log
                    }
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(7);
                    res.body.should.have.property('name').eql('Uranus');
                    done();
                });
        });

        it('it should fetch a planet named Neptune', (done) => {
            let payload = { id: 8 };
            console.log('Sending request for Neptune with payload:', payload); // Debugging log
            chai.request(server)
                .post('/planet')
                .send(payload)
                .end((err, res) => {
                    console.log('Received response for Neptune:', res.body); // Debugging log
                    if (err) {
                        console.log('Error in Neptune response:', err); // Debugging log
                    }
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(8);
                    res.body.should.have.property('name').eql('Neptune');
                    done();
                });
        });

    });        
});

// Use below test case to achieve coverage
describe('Testing Other Endpoints', () => {

    describe('it should fetch OS Details', () => {
        it('it should fetch OS details', (done) => {
            chai.request(server)
                .get('/os')
                .end((err, res) => {
                    console.log('Received response for OS details:', res.body); // Debugging log
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('it should fetch Live Status', () => {
        it('it checks Liveness endpoint', (done) => {
            chai.request(server)
                .get('/live')
                .end((err, res) => {
                    console.log('Received response for Live Status:', res.body); // Debugging log
                    res.should.have.status(200);
                    res.body.should.have.property('status').eql('live');
                    done();
                });
        });
    });

    describe('it should fetch Ready Status', () => {
        it('it checks Readiness endpoint', (done) => {
            chai.request(server)
                .get('/ready')
                .end((err, res) => {
                    console.log('Received response for Ready Status:', res.body); // Debugging log
                    res.should.have.status(200);
                    res.body.should.have.property('status').eql('ready');
                    done();
                });
        });
    });

});   
